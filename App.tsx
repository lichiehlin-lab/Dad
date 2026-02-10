
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SERVICES, FAQS, CONTACT_INFO } from './constants';
import { editImage, generateVideoWithVeo } from './services/geminiService';

// --- 子組件 ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">阿</div>
            <span className="text-xl font-bold text-gray-800">阿爸的家園</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors font-medium">關於我們</a>
            <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors font-medium">服務項目</a>
            <a href="#experience" className="text-gray-600 hover:text-green-600 transition-colors font-medium">49元體驗</a>
            <a href="#faq" className="text-gray-600 hover:text-green-600 transition-colors font-medium">常見問題</a>
            <a href="mailto:lichieh.lin@gmail.com" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition shadow-md font-bold">立即諮詢</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
      {/* 行動裝置選單 */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 shadow-lg">
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">關於我們</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">服務項目</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">49元體驗</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium">常見問題</a>
          <a href="mailto:lichieh.lin@gmail.com" onClick={() => setIsOpen(false)} className="block bg-green-600 text-white text-center py-3 rounded-xl font-bold">立即諮詢</a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">阿</div>
            <h3 className="text-xl font-bold">阿爸的家園 健康營養中心</h3>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            讓身體成為您想要的樣子。我們提供最科學、最溫暖的營養諮詢服務，陪伴您全家人一起變健康。
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">快速連結</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#services" className="hover:text-white transition">服務項目</a></li>
            <li><a href="#experience" className="hover:text-white transition">體驗方案</a></li>
            <li><a href="#faq" className="hover:text-white transition">常見問題</a></li>
            <li><a href="mailto:lichieh.lin@gmail.com" className="hover:text-white transition">聯絡我們</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">聯絡資訊</h4>
          <ul className="space-y-3 text-gray-400">
            <li>地址：{CONTACT_INFO.address}</li>
            <li>電話：{CONTACT_INFO.phones.join(' / ')}</li>
            <li>時間：{CONTACT_INFO.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} 阿爸的家園 Healthy Nutrition Center. 版權所有。
      </div>
    </div>
  </footer>
);

const LineFloatingButton = () => (
  <a 
    href={CONTACT_INFO.lineId}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#06C755] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 line-float"
  >
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M24 10.3c0-4.7-5.4-8.5-12-8.5S0 5.6 0 10.3c0 4.2 4.3 7.7 10.1 8.4.4.1.9.3 1.1.7l.4 1.7c.1.5.5.6.8.4l2.1-1.4c.5-.3.8-.3 1.2-.3 5.1-.1 8.3-3.9 8.3-8.8zM7.7 13.6c-.4 0-.7-.3-.7-.7V8.5c0-.4.3-.7.7-.7s.7.3.7.7v4.4c0 .4-.3.7-.7.7zm4.2 0H9.7c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h1.5c.4 0 .7.3.7.7s-.3.7-.7.7zm3.1-.7c0 .4-.3.7-.7.7s-.7-.3-.7-.7V8.5c0-.4.3-.7.7-.7s.7.3.7.7v4.4zm4.2-.7h-1.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h1.5v-.7h-1.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h1.5c.4 0 .7.3.7.7s-.3.7-.7.7z" /></svg>
  </a>
);

// --- 區塊組件 ---

const HeroSection = () => (
  <section className="relative min-h-[80vh] flex items-center gradient-bg pt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          讓身體成為<br />
          <span className="text-green-600">您想要的樣子</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl">
          專業科學營養、個人化飲食調整，不用藥、非醫療。無論是體態管理或成長發育，我們陪伴您達成目標。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#experience" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg text-center">
            49 元體驗預約
          </a>
          <a href={CONTACT_INFO.lineId} className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition text-center">
            加入 LINE 諮詢
          </a>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop" 
            alt="健康飲食" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">🥗</div>
          <div>
            <p className="font-bold text-gray-800">100% 自然飲食</p>
            <p className="text-sm text-gray-500">非藥物調整計畫</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-24 bg-white px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">專業營養規劃服務</h2>
        <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-all border border-transparent hover:border-green-100 group">
            <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <div className="space-y-2 mb-8">
              <p className="text-sm font-semibold text-green-700">對象：{service.target}</p>
            </div>
            <a href="mailto:lichieh.lin@gmail.com" className="text-green-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              了解更多 <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].title
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`【預約體驗】阿爸的家園 - ${formData.name}`);
    const body = encodeURIComponent(
      `您好，我想預約 49 元體驗方案：\n\n姓名：${formData.name}\n電話：${formData.phone}\n感興趣的服務：${formData.service}\n\n期待您的回覆，謝謝！`
    );
    window.location.href = `mailto:lichieh.lin@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="experience" className="py-24 bg-green-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <div className="flex-1 p-10 lg:p-16">
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">限時優惠</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">49 元體驗方案</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              想改變體態卻不知道從何開始？給自己一個機會，用一瓶飲料的價格，換取專業的營養評估與諮詢。
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { step: '1', title: '填寫資料', desc: '輸入基本資料並點擊發送預約郵件' },
                { step: '2', title: '深度面談', desc: '專業顧問進行體成分分析與生活型態了解' },
                { step: '3', title: '建議與體驗', desc: '獲得初步飲食建議並體驗特色營養套餐' }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 bg-green-600 p-10 lg:p-16 text-white">
            <h3 className="text-2xl font-bold mb-8">立即預約體驗</h3>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-sm font-bold mb-2">姓名</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-green-500 border-none rounded-xl p-4 text-white placeholder-green-200 outline-none focus:ring-2 focus:ring-white" 
                  placeholder="您的姓名" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">電話</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-green-500 border-none rounded-xl p-4 text-white placeholder-green-200 outline-none focus:ring-2 focus:ring-white" 
                  placeholder="09XX-XXX-XXX" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">感興趣的服務</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-green-500 border-none rounded-xl p-4 text-white outline-none focus:ring-2 focus:ring-white appearance-none"
                >
                  {SERVICES.map(s => <option key={s.id} value={s.title} className="text-gray-800">{s.title}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-white text-green-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                發送預約郵件
              </button>
              <p className="text-center text-xs text-green-100">點擊後將開啟您的電子郵件程式</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24 bg-white px-4">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop" 
          alt="營養諮詢" 
          className="rounded-[2rem] shadow-2xl"
        />
      </div>
      <div className="flex-1 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          阿爸的家園理念：<br />
          <span className="text-green-600">讓健康回歸飲食本質</span>
        </h2>
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            我們相信，身體最好的藥方就在每天攝取的食物中。
          </p>
          <p className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-600 text-gray-800 font-medium">
            「不是藥物、非醫療介入，而是透過精準的飲食調整，重新喚醒身體的自癒力。」
          </p>
          <p>
            「阿爸的家園」創立的初衷，是想為每一個家庭提供一個安心、科學且可持續的健康諮詢環境。無論是工作繁忙的上班族、需要能量的運動員，或是正在成長的小朋友，我們都有適合您的方案。
          </p>
        </div>
      </div>
    </div>
  </section>
);

const AIFeatureSection = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('讓我看起來更健康更有精神，背景充滿自然綠意');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setEditedImage(null);
        setVideoUrl(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image) return;
    setLoading(true);
    const result = await editImage(image.split(',')[1], prompt);
    setEditedImage(result);
    setLoading(false);
  };

  const handleGenerateVideo = async () => {
    if (!image) return;
    setLoading(true);
    const result = await generateVideoWithVeo(image.split(',')[1], '呈現充滿朝氣與健康的生活場景');
    setVideoUrl(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-gray-50 px-4 border-y border-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">AI 健康未來視</h2>
        <p className="text-gray-600">透過 AI 技術，讓我們幫您預見健康生活的新樣貌。</p>
      </div>

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-[2rem] shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-200 rounded-3xl aspect-square flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-green-50 transition relative overflow-hidden">
              {image ? (
                <img src={image} className="w-full h-full object-cover rounded-2xl" />
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <p className="text-gray-500 font-medium">上傳照片預見健康</p>
                  <label htmlFor="ai-upload" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-green-700">選擇照片</label>
                  <input type="file" id="ai-upload" className="hidden" onChange={handleFileChange} accept="image/*" />
                </div>
              )}
              {loading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="font-bold text-green-600">AI 計算中...</p>
                </div>
              )}
            </div>
            <input 
              type="text" 
              value={prompt} 
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-gray-100 border-none rounded-xl p-4 text-gray-700 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="描述您的視覺想像..."
            />
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleEdit}
                disabled={loading || !image}
                className="bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 disabled:opacity-50 transition"
              >
                AI 濾鏡優化
              </button>
              <button 
                onClick={handleGenerateVideo}
                disabled={loading || !image}
                className="bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition"
              >
                生成健康動畫
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            {editedImage || videoUrl ? (
              <div className="w-full space-y-6">
                <p className="text-center font-bold text-gray-800">生成結果：</p>
                {editedImage && <img src={editedImage} className="w-full rounded-2xl shadow-lg" />}
                {videoUrl && <video src={videoUrl} controls autoPlay loop className="w-full rounded-2xl shadow-lg" />}
              </div>
            ) : (
              <div className="text-center text-gray-300">
                <div className="text-6xl mb-4">✨</div>
                <p>上傳照片並點擊按鈕<br/>體驗 AI 的神奇力量</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => (
  <section id="faq" className="py-24 bg-white px-4">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">常見問題 FAQ</h2>
        <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>
      <div className="space-y-6">
        {FAQS.map((faq, idx) => (
          <details key={idx} className="group bg-gray-50 rounded-2xl p-6 hover:bg-green-50 transition-colors cursor-pointer border border-transparent open:border-green-200">
            <summary className="list-none flex justify-between items-center font-bold text-gray-800">
              {faq.question}
              <span className="text-green-600 transition-transform group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-24 bg-gray-50 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">聯絡我們</h2>
        
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl shrink-0">📍</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">地址</h4>
              <p className="text-gray-600">{CONTACT_INFO.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl shrink-0">📞</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">諮詢專線</h4>
              {CONTACT_INFO.phones.map(p => <p key={p} className="text-gray-600">{p}</p>)}
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl shrink-0">⏰</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">營業時間</h4>
              <p className="text-gray-600">{CONTACT_INFO.hours}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#06C755] text-white p-8 rounded-3xl flex items-center gap-8 shadow-xl">
          <div className="w-32 h-32 bg-white p-2 rounded-2xl shrink-0">
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-black text-xs font-bold text-center border border-gray-200">
              LINE<br/>QR CODE
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">LINE 官方帳號</h4>
            <p className="text-green-50 mb-4 text-sm">即刻掃碼或點擊，由專人為您服務諮詢。</p>
            <a href={CONTACT_INFO.lineId} className="inline-block bg-white text-[#06C755] px-6 py-2 rounded-full font-bold hover:bg-green-50 transition shadow-sm">
              立即加好友
            </a>
          </div>
        </div>
      </div>
      <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3614.654848035698!2d121.516149!3d25.045763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97262077e6b%3A0xc3c9a6a84d28471c!2zMTAz5Y-w5YyX5biC5aSn5ZCM5Y2A5om_5b636Lev5LiA5q61MjPlmZ8x6Jmf!5e0!3m2!1szh-TW!2stw!4v1715671234567!5m2!1szh-TW!2stw" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ExperienceSection />
                <AIFeatureSection />
                <FAQSection />
                <ContactSection />
              </>
            } />
          </Routes>
        </main>

        <Footer />
        <LineFloatingButton />
      </div>
    </Router>
  );
};

export default App;
