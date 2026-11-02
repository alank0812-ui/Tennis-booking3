'use client';
import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  Camera, 
  Instagram, 
  MessageCircle, 
  Menu, 
  X,
  ChevronDown,
  Layers,
  Flame
} from 'lucide-react';

// 精緻還原交疊 ES Monogram Logo 元件
function ElsinMonogram({ className = "w-10 h-10" }) {
  return (
    <div className={`${className} bg-black border border-white/10 rounded-lg flex items-center justify-center p-1.5 shadow-md flex-shrink-0 group-hover:border-[#D9B370]/60 transition-colors`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="currentColor" 
        className="w-full h-full text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 精緻高對比襯線 E 與 S 交疊形體 */}
        <text 
          x="10" 
          y="72" 
          fontFamily="'Playfair Display', 'Bodoni MT', 'Didot', serif" 
          fontSize="76" 
          fontWeight="bold" 
          letterSpacing="-2"
          fill="#FFFFFF"
        >
          E
        </text>
        <text 
          x="34" 
          y="84" 
          fontFamily="'Playfair Display', 'Bodoni MT', 'Didot', serif" 
          fontSize="82" 
          fontWeight="bold" 
          letterSpacing="-2"
          fill="#FFFFFF"
          className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          S
        </text>
      </svg>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 照片資料結構（已放入 Coffee Run 實際活動大合照路徑）
  const galleryItems = [
    {
      title: "品牌聯名 Coffee Run",
      subtitle: "Morning Jog & Tennis Vibe",
      category: "生活風格",
      tag: "Live Event",
      aspect: "aspect-[4/5]",
      // 建議將你上傳的照片命名為 coffee-run.jpg 放入 Next.js 的 public/images/ 目錄中
      image: "/images/coffee-run.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=900&q=80",
      desc: "結合運動、網球拍與城市慢跑的跨界社群活動，享受晨光揮汗後的清爽與交流。"
    },
    {
      title: "萬聖節變裝網球派對",
      subtitle: "Halloween On Court",
      category: "主題賽事",
      tag: "Event",
      aspect: "aspect-[4/5]",
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80",
      desc: "打破框架的裝扮擊球，在球場笑聲與競技中體驗最純粹的樂趣。"
    },
    {
      title: "艾新微醺聖誕盃",
      subtitle: "Christmas Tennis Night",
      category: "專屬球聚",
      tag: "Community",
      aspect: "aspect-[4/5]",
      image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?auto=format&fit=crop&w=900&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?auto=format&fit=crop&w=900&q=80",
      desc: "燈火下的熱血對決，用網球凝聚彼此情誼的最佳年終儀式感。"
    },
    {
      title: "高爾夫商務推廣企劃",
      subtitle: "Golf Swing & Connection",
      category: "即將推出",
      tag: "Upcoming",
      aspect: "aspect-[4/5]",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=900&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=900&q=80",
      desc: "將優雅揮桿延伸至綠茵球道，打造跨領域精英的運動生活聚落。"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#FAF6F0] font-sans selection:bg-[#D9B370] selection:text-black antialiased">
      
      {/* 暖色環境光暈 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-[#3B2D1D]/30 blur-[150px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#D9B370]/6 blur-[160px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-[#2E2419]/25 blur-[160px] rounded-full" />
      </div>

      {/* 頂部極簡導覽列 */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0C0B0A]/85 border-b border-[#2A241C] transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Monogram */}
          <a href="#" className="flex items-center gap-3.5 group">
            <ElsinMonogram className="w-11 h-11" />
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-base text-[#FAF6F0] font-semibold group-hover:text-[#D9B370] transition-colors">
                ELSIN
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#A69B8D] uppercase font-mono">
                艾新 • Hsinchu
              </span>
            </div>
          </a>

          {/* 桌面選單 */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-[#C4B7A6]">
            <a href="#about" className="hover:text-[#D9B370] transition-colors">品牌理念</a>
            <a href="#brands" className="hover:text-[#D9B370] transition-colors">雙品牌核心</a>
            <a href="#moments" className="hover:text-[#D9B370] transition-colors">活動掠影</a>
            <a href="#connect" className="hover:text-[#D9B370] transition-colors">聯絡交流</a>
          </nav>

          {/* 右側快速連結 */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#connect" 
              className="px-5 py-2 text-xs tracking-wider text-[#0C0B0A] font-semibold bg-[#D9B370] hover:bg-[#FAF6F0] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(217,179,112,0.2)]"
            >
              與我們交流
            </a>
          </div>

          {/* 手機選單按鈕 */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#FAF6F0] border border-[#2A241C] rounded-lg"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* 手機選單下拉 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141210] border-b border-[#2A241C] px-6 py-6 space-y-4 text-xs tracking-wider uppercase text-[#C4B7A6]">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1">品牌理念</a>
            <a href="#brands" onClick={() => setMobileMenuOpen(false)} className="block py-1">雙品牌核心</a>
            <a href="#moments" onClick={() => setMobileMenuOpen(false)} className="block py-1">活動掠影</a>
            <a href="#connect" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#D9B370]">聯絡交流</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-28 md:pt-32 md:pb-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* 小標籤 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D9B370]/20 bg-[#1D1813]/60 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9B370]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D9B370] font-mono">
              ELEGANT HSINCHU • HALE IN THE WIND
            </span>
          </div>

          {/* 主標題 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#FAF6F0] tracking-tight leading-[1.2] mb-6">
            迎風而擊，<span className="italic font-serif text-[#D9B370]">優雅隨行</span>。
          </h1>

          {/* 洗鍊的副標 */}
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#A89C8E] font-light leading-relaxed mb-10">
            在風之城裡，我們用更懂你的步調，打磨每一次揮拍的從容。<br className="hidden sm:inline" />
            連結網球的優雅節奏與跨界運動生活，讓運動成為日常裡最自在的享受。
          </p>

          {/* 簡約按鈕 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#brands" 
              className="px-7 py-3 rounded-full bg-[#D9B370] text-[#0C0B0A] text-xs font-semibold tracking-wider hover:bg-[#FAF6F0] transition-all"
            >
              探索艾新品牌
            </a>
            <a 
              href="#moments" 
              className="px-7 py-3 rounded-full border border-[#D9B370]/30 hover:border-[#D9B370] text-[#FAF6F0] text-xs font-medium tracking-wider transition-all"
            >
              瀏覽活動動態
            </a>
          </div>

          {/* 往下指引 */}
          <div className="mt-16 flex justify-center text-[#D9B370]/60">
            <ChevronDown size={20} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* 品牌理念區塊：去除科班/背景敘事，強調專注、溫度與品味 */}
      <section id="about" className="relative z-10 py-24 bg-[#110F0D] border-y border-[#262019] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-5 space-y-5">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D9B370]">
                Our Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#FAF6F0] leading-snug">
                優雅擊球，<br />
                <span className="text-[#D9B370] italic">來自對細節的專注與理解。</span>
              </h2>
              <div className="w-10 h-[1.5px] bg-[#D9B370]/50" />
              <p className="text-[#A89C8E] text-xs sm:text-sm leading-relaxed">
                在艾新，運動從來不只是重複的揮拍，而是一種兼具美感與自我對話的生活方式。
              </p>
              <p className="text-[#A89C8E] text-xs sm:text-sm leading-relaxed">
                我們以清晰細緻的引導、同頻的生活視角，陪伴每一位學員在球場上找到屬於自己的節奏，讓擊球變得輕鬆自然、從容自信。
              </p>
            </div>

            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#171411] border border-[#2A231C]">
                <div className="w-9 h-9 rounded-lg bg-[#241E17] flex items-center justify-center text-[#D9B370] mb-4">
                  <Sparkles size={18} />
                </div>
                <h3 className="text-sm font-serif font-bold text-[#FAF6F0] mb-2">清晰從容的教學體驗</h3>
                <p className="text-[#968A7C] text-xs leading-relaxed">
                  化繁為簡的引導方式，幫你建立省力、穩定且流暢的揮拍節奏，享受擊中甜區的清脆手感。
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#171411] border border-[#2A231C]">
                <div className="w-9 h-9 rounded-lg bg-[#241E17] flex items-center justify-center text-[#D9B370] mb-4">
                  <Layers size={18} />
                </div>
                <h3 className="text-sm font-serif font-bold text-[#FAF6F0] mb-2">跨界精緻生活圈</h3>
                <p className="text-[#968A7C] text-xs leading-relaxed">
                  將球場上的活力延伸至戶外跑走、主題運動派對與商務聚會，打造高質感的運動社群聚落。
                </p>
              </div>

              <div className="sm:col-span-2 p-6 rounded-2xl bg-[#171411] border border-[#2A231C]">
                <div className="flex items-center gap-2 mb-2">
                  <Compass size={16} className="text-[#D9B370]" />
                  <h3 className="text-sm font-serif font-bold text-[#FAF6F0]">Hale in the wind • 風中自在前行</h3>
                </div>
                <p className="text-[#968A7C] text-xs leading-relaxed">
                  新竹的風是這座城市的標誌，也是磨練專注的契機。在風中找到自己的步調，享受最純粹健康的運動喜悅。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 雙核心品牌卡片 */}
      <section id="brands" className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D9B370] block mb-2">
            Dual Brands
          </span>
          <h2 className="text-3xl font-serif text-[#FAF6F0]">艾新的兩大支柱</h2>
          <p className="text-xs sm:text-sm text-[#A89C8E] mt-3">一個專注球場上的細節打磨，一個拓展運動的精彩邊界。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* 艾新網球俱樂部 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#14120F] border border-[#2A231C] hover:border-[#D9B370]/50 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D9B370] uppercase">
                TENNIS CLUB
              </span>
              <h3 className="text-2xl font-serif text-[#FAF6F0] mt-3 mb-4">
                艾新網球俱樂部 <span className="text-sm font-mono text-[#A89C8E] font-normal">ELSIN HALEWIND</span>
              </h3>
              <p className="text-[#A89C8E] text-xs sm:text-sm leading-relaxed mb-6">
                針對個人體能與步調量身調整。從握拍球感到實戰對抗，讓擊球變得優雅、省力且不易受傷，享受每一次甜區擊中的清脆回饋。
              </p>
              <ul className="space-y-2 text-xs text-[#C4B7A6]">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D9B370]" />
                  私人一對一 / 雙人專注進階指導
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D9B370]" />
                  零基礎新手友善入門
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D9B370]" />
                  以球會友的溫馨俱樂部社群交流
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-[#262019]">
              <span className="text-xs text-[#D9B370] font-medium flex items-center gap-1">
                專注教學品質 • 俱樂部預約制
              </span>
            </div>
          </div>

          {/* 艾新運動行銷 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#14120F] border border-[#2A231C] hover:border-[#D9B370]/50 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D9B370] uppercase">
                SPORTS MARKETING
              </span>
              <h3 className="text-2xl font-serif text-[#FAF6F0] mt-3 mb-4">
                艾新運動行銷 <span className="text-sm font-mono text-[#A89C8E] font-normal">ELSIN MARKETING</span>
              </h3>
              <p className="text-[#A89C8E] text-xs sm:text-sm leading-relaxed mb-6">
                不只局限於網球。我們為新竹在地生活家與企業社群策劃兼具質感與樂趣的跨界活動，從萬聖狂歡賽到精品手沖咖啡路跑，未來更邁向高爾夫等多元運動。
              </p>
              <ul className="space-y-2 text-xs text-[#C4B7A6]">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D9B370]" />
                  主題運動賽事企劃（萬聖變裝盃、聖誕盃）
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D9B370]" />
                  品牌跨界聯名合作（Coffee Run、服飾聯動）
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D9B370]" />
                  企業專屬球聚與高爾夫推廣專案
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-[#262019]">
              <span className="text-xs text-[#D9B370] font-medium flex items-center gap-1">
                商業合作 • 企業活動策劃
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 活動掠影相簿 (隨時可替換成你的實際照片) */}
      <section id="moments" className="relative z-10 py-24 bg-[#110F0D] border-t border-[#262019] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D9B370] block mb-2">
                Curated Moments
              </span>
              <h2 className="text-3xl font-serif text-[#FAF6F0]">精彩活動掠影</h2>
            </div>
            <p className="text-xs text-[#A89C8E] mt-3 sm:mt-0 flex items-center gap-1.5">
              <Camera size={14} className="text-[#D9B370]" />
              點滴紀錄艾新球場與生活風格足跡
            </p>
          </div>

          {/* 相簿卡片 Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden border border-[#2A231C] bg-[#161310] flex flex-col justify-between hover:border-[#D9B370]/50 transition-all duration-300"
              >
                {/* 圖片展示區 */}
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-black/40`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    onError={(e) => {
                      // 若本地路徑尚未放置圖片，自動切換為優雅的展示備用圖
                      if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                        e.currentTarget.src = item.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-transparent to-black/20" />
                  
                  {/* Tag */}
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[9px] font-mono tracking-wider bg-black/60 backdrop-blur-md text-[#D9B370] border border-[#D9B370]/30">
                    {item.tag}
                  </span>
                </div>

                {/* 圖片文字解說 */}
                <div className="p-5">
                  <div className="text-[10px] text-[#A89C8E] font-mono uppercase tracking-wider mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-sm font-serif font-bold text-[#FAF6F0] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#8C8072] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 簡潔優雅的聯繫區塊 (去除多餘表單，回歸純粹的社群與諮詢通道) */}
      <section id="connect" className="relative z-10 py-24 px-6 max-w-4xl mx-auto text-center">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D9B370] block mb-3">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#FAF6F0] mb-4">
          認識艾新，與我們聊聊。
        </h2>
        <p className="text-xs sm:text-sm text-[#A89C8E] max-w-lg mx-auto leading-relaxed mb-10">
          想了解成人新手網球課程、雙人小班，或是討論運動品牌聯名與活動企劃？<br />
          歡迎直接透過 Instagram 或 LINE 找到我們。
        </p>

        {/* 快速交流雙按鈕 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a 
            href="#" 
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#06C755]/15 border border-[#06C755]/50 text-[#06C755] hover:bg-[#06C755]/25 text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <MessageCircle size={16} />
            加入官方 LINE 諮詢
          </a>
          <a 
            href="#" 
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FAF6F0]/5 border border-[#FAF6F0]/20 text-[#FAF6F0] hover:border-[#D9B370] hover:text-[#D9B370] text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <Instagram size={16} />
            追蹤 Instagram 日常
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-[#262019] bg-[#0A0908] px-6 text-xs text-[#7A7064]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-[#FAF6F0] text-sm tracking-widest">ELSIN</span>
            <span>•</span>
            <span>艾新網球俱樂部 & 艾新運動行銷</span>
          </div>
          <div className="font-mono text-[10px]">
            © {new Date().getFullYear()} ELSIN HSINCHU. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

    </div>
  );
}
