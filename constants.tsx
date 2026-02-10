
import React from 'react';
import { ServiceItem, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'muscle-fat',
    title: '增肌減脂營養規劃',
    description: '科學化配比，精準控制熱量與三大營養素，打造理想體態。',
    target: '上班族、體態管理需求者',
    painPoints: ['精神體力不佳', '試過各種減肥法卻復胖', '體脂肪過高'],
    features: ['個人化飲食建議', '體成分分析追蹤', '居家飲食替代方案'],
    icon: '💪'
  },
  {
    id: 'gut-health',
    title: '調整腸胃營養',
    description: '從飲食根源改善消化問題，提升腸道免疫力。',
    target: '腸胃敏感、排便不順者',
    painPoints: ['飯後脹氣不適', '排便頻率不正常', '皮膚狀況不佳'],
    features: ['高纖維飲食指引', '益生菌攝取建議', '食物耐受性排除'],
    icon: '🥗'
  },
  {
    id: 'sports',
    title: '運動營養補充',
    description: '提升運動表現與修復效率，支撐高強度訓練需求。',
    target: '健身愛好者、運動員',
    painPoints: ['運動後疲勞感重', '肌肉成長停滯', '受傷風險增加'],
    features: ['訓練前後營養補給', '蛋白質補充時機規劃', '微量元素調整'],
    icon: '🏃'
  },
  {
    id: 'pregnancy',
    title: '孕期營養支持',
    description: '一人吃兩人補，精準補足各孕期所需關鍵營養。',
    target: '備孕女性、準媽咪',
    painPoints: ['擔心影響寶寶發育', '孕吐嚴重食慾不振', '產後恢復困擾'],
    features: ['葉酸與DHA補充建議', '體重增長控管', '產後發奶與恢復營養'],
    icon: '🤰'
  },
  {
    id: 'elderly',
    title: '銀髮族保養營養',
    description: '對抗肌肉流失，守護骨骼健康，維持銀髮生活品質。',
    target: '退休人士、家中長輩',
    painPoints: ['牙口不好沒食慾', '肌肉無力走路不穩', '慢病飲食控管'],
    features: ['軟食營養設計', '優質蛋白質補給', '骨質密度支撐營養'],
    icon: '👴'
  },
  {
    id: 'kids',
    title: '兒童健康成長營養',
    description: '把握黃金成長期，解決挑食問題，奠定健康基礎。',
    target: '發育中兒童、家長',
    painPoints: ['小孩挑食營養不均', '身高發育落後', '學習專注力不足'],
    features: ['趣味飲食搭配', '成長期礦物質補給', '腸道吸收能力優化'],
    icon: '👦'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '每天一杯咖啡可以嗎？',
    answer: '適度的黑咖啡是可以的，但我們會建議調整飲用時機與種類，避免影響營養吸收或造成胃部負擔。'
  },
  {
    question: '沒有運動習慣也可以改善體態嗎？',
    answer: '當然可以！體態管理 70% 來自於飲食調整，30% 才是運動。我們的重點在於優化您的飲食結構，讓您在忙碌生活中也能變健康。'
  },
  {
    question: '平時很忙沒時間準備餐點怎麼辦？',
    answer: '我們會教您如何在便利商店、外送平台或外食餐廳中做出正確選擇。營養不一定要自己煮，選對食物更重要。'
  },
  {
    question: '孕婦 / 小孩 / 長輩適合諮詢嗎？',
    answer: '非常適合。不同族群有其獨特的生理需求，專業營養師的個別化建議能幫助各年齡層在不靠藥物的情況下，透過飲食達成健康目標。'
  }
];

export const CONTACT_INFO = {
  phones: ['0906-000-923', '02-25236643'],
  address: '台北市大同區承德路一段23號1樓',
  hours: '週一至週五 07:30–11:30 (其他時間採預約制)',
  // 請將此處的 lichieh.lin 替換為您實際的 LINE ID 即可運作
  lineId: 'https://line.me/ti/p/~lichieh.lin' 
};
