
import { GoogleGenAI } from "@google/genai";

export const editImage = async (base64Image: string, prompt: string): Promise<string | null> => {
  try {
    // Always use a fresh instance to get the latest process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: 'image/jpeg',
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error editing image:", error);
    return null;
  }
};

export const generateVideoWithVeo = async (base64Image: string, prompt: string, aspectRatio: '16:9' | '9:16' = '16:9'): Promise<string | null> => {
  try {
    const aistudio = (window as any).aistudio;
    
    // Check for API key selection window requirement for Veo models
    if (aistudio && !(await aistudio.hasSelectedApiKey())) {
      await aistudio.openSelectKey();
      // Proceed immediately after triggering openSelectKey to mitigate race conditions
    }

    // Always create a new instance right before the call to use the up-to-date key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'Animate this photo with subtle natural movement',
      image: {
        imageBytes: base64Image,
        mimeType: 'image/jpeg',
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: aspectRatio
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (downloadLink) {
      const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    }
    return null;
  } catch (error: any) {
    const errorMsg = error.message || "";
    console.error("Error generating video:", error);

    // If permission denied or entity not found, the key might be invalid/unpaid for Veo
    if (errorMsg.includes("Requested entity was not found") || 
        errorMsg.includes("permission") || 
        errorMsg.includes("403")) {
      const aistudio = (window as any).aistudio;
      if (aistudio) {
        console.warn("Permission denied or model not found. Prompting for API key selection...");
        await aistudio.openSelectKey();
      }
    }
    return null;
  }
};
