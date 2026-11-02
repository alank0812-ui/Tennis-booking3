'use client';

import React, { useState } from 'react';
import { 
  ChevronRight, 
  Instagram, 
  MessageCircle, 
  Wind, 
  Sparkles, 
  Calendar, 
  ArrowUpRight, 
  Compass, 
  Activity, 
  Layers,
  Award
} from 'lucide-react';

export default function ElsinLandingPage() {
  const [activeBrand, setActiveBrand] = useState<'marketing' | 'tennis'>('tennis');

  // 社群連結常數
  const TENNIS_IG = "https://www.instagram.com/elsin_tennis.tw";
  const SPORT_MARKETING_IG = "https://www.instagram.com/elsin_sport.tw";

  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#FAF6F0] selection:bg-[#D9B370] selection:text-[#0C0B0A] font-sans antialiased overflow-x-hidden">
      
      {/* 頂部導覽列 Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C0B0A]/85 backdrop-blur-md border-b border-[#D9B370]/15">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* 左側 Logo (ES Monogram) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-black border border-[#D9B370]/30 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg group-hover:border-[#D9B370] transition-colors">
              <span className="font-serif font-bold text-2xl text-white tracking-tighter select-none">
                E<span className="text-[#D9B370] italic -ml-1">S</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-sm font-semibold uppercase text-[#FAF6F0]">
                ELSIN
              </span>
              <span className="text-[9px] tracking-[0.18em] text-[#D9B370] uppercase">
                HALEWIND
              </span>
            </div>
          </a>

          {/* 中間快速導覽連結 */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-[#A39E93]">
            <a href="#about" className="hover:text-[#D9B370] transition-colors">關於艾新</a>
            <a href="#dual-brands" className="hover:text-[#D9B370] transition-colors">品牌體系</a>
            <a href="#moments" className="hover:text-[#D9B370] transition-colors">活動掠影</a>
          </div>

          {/* 右側社群與聯絡入口 */}
          <div className="flex items-center gap-3">
            <a 
              href={TENNIS_IG}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3.5 py-2 border border-[#D9B370]/30 rounded-full text-[#D9B370] hover:bg-[#D9B370]/10 transition-all flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">俱樂部</span>
            </a>
            <a 
              href={SPORT_MARKETING_IG}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3.5 py-2 border border-[#FAF6F0]/20 rounded-full text-[#FAF6F0] hover:bg-[#FAF6F0]/10 transition-all flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">運動行銷</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero 旗艦主視覺區塊 */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 px-6 overflow-hidden">
        {/* 背景光暈效果 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#D9B370]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#594933]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* 上標標籤 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D9B370]/25 bg-[#D9B370]/5 mb-8">
            <Wind className="w-3.5 h-3.5 text-[#D9B370]" />
            <span className="text-xs tracking-[0.25em] text-[#D9B370] uppercase">
              Hale in the Wind ‧ 新竹
            </span>
          </div>

          {/* 主標題 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight leading-[1.15] text-[#FAF6F0] mb-8">
            迎風而擊，<br />
            <span className="font-normal italic text-[#D9B370]">優雅隨行。</span>
          </h1>

          {/* 副標說明 */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#B3ADA0] font-light leading-relaxed tracking-wide mb-12">
            將 <span className="text-[#FAF6F0] font-normal">Elegant（優雅）</span> 的擊球節奏，融入 <span className="text-[#FAF6F0] font-normal">Hsinchu（新竹）</span> 的風之城。
            從球場上的精準回擊，到跨界生活風格的探索，展現純粹且從容的運動姿態。
          </p>

          {/* 快捷引導按鈕 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#dual-brands" 
              className="w-full sm:w-auto px-8 py-3.5 bg-[#D9B370] text-[#0C0B0A] font-medium text-xs tracking-[0.2em] uppercase rounded-full hover:bg-[#E5C48A] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D9B370]/10"
            >
              探索雙品牌體系
              <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="#moments" 
              className="w-full sm:w-auto px-8 py-3.5 border border-[#FAF6F0]/20 text-[#FAF6F0] text-xs tracking-[0.2em] uppercase rounded-full hover:border-[#D9B370] hover:text-[#D9B370] transition-all flex items-center justify-center gap-2"
            >
              瀏覽精選活動
            </a>
          </div>
        </div>
      </section>

      {/* 品牌理念介紹 (About / Philosophy) */}
      <section id="about" className="py-24 px-6 border-t border-[#D9B370]/10 bg-[#0E0D0B] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="text-[11px] tracking-[0.25em] text-[#D9B370] uppercase mb-4">
              Our Philosophy
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#FAF6F0] leading-snug mb-6">
              優雅擊球，<br />
              來自對細節的專注與理解。
            </h2>
            <p className="text-sm text-[#A39E93] leading-relaxed mb-6">
              我們深信，運動不只是一次次的揮拍，更是一種掌握自我節奏的生活風格。在艾新，每一次指導皆致力於化繁為簡，讓學員在從容、順暢的動作中體會運動的純粹快樂。
            </p>
            <p className="text-sm text-[#A39E93] leading-relaxed">
              同時，我們將運動的能量延伸至球場之外，攜手生活品牌與熱愛挑戰的同好，打造兼具質感、社群共鳴與視野的高階運動場域。
            </p>
          </div>

          {/* 核心價值卡片 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#141210] border border-[#D9B370]/15">
              <Compass className="w-6 h-6 text-[#D9B370] mb-4" />
              <div className="font-serif text-lg text-[#FAF6F0] mb-2">精確化引導</div>
              <p className="text-xs text-[#8A857B] leading-relaxed">
                以清晰直覺的方式拆解揮拍要領，助你找到省力且自然的擊球軌跡。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141210] border border-[#D9B370]/15">
              <Wind className="w-6 h-6 text-[#D9B370] mb-4" />
              <div className="font-serif text-lg text-[#FAF6F0] mb-2">迎風專注</div>
              <p className="text-xs text-[#8A857B] leading-relaxed">
                將新竹強勁的風勢化作心智鍛鍊，在變化中淬鍊沉穩與球場智慧。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141210] border border-[#D9B370]/15">
              <Layers className="w-6 h-6 text-[#D9B370] mb-4" />
              <div className="font-serif text-lg text-[#FAF6F0] mb-2">跨界生活</div>
              <p className="text-xs text-[#8A857B] leading-relaxed">
                不限於單一球類，結合主題活動與品牌合作，拓展運動生活視野。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141210] border border-[#D9B370]/15">
              <Sparkles className="w-6 h-6 text-[#D9B370] mb-4" />
              <div className="font-serif text-lg text-[#FAF6F0] mb-2">菁英社群</div>
              <p className="text-xs text-[#8A857B] leading-relaxed">
                匯聚各領域專業人才與企業夥伴，在球敘中交流情誼、共拓未來。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 雙品牌體系展示 (Dual Brands Section) */}
      <section id="dual-brands" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[0.25em] text-[#D9B370] uppercase mb-3">
              Dual Brand Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#FAF6F0]">
              艾新雙核心品牌
            </h2>
          </div>

          {/* 切換按鈕 */}
          <div className="flex justify-center mb-12">
            <div className="p-1.5 bg-[#141210] border border-[#D9B370]/20 rounded-full flex gap-1">
              <button
                onClick={() => setActiveBrand('tennis')}
                className={`px-6 py-2.5 rounded-full text-xs tracking-wider transition-all ${
                  activeBrand === 'tennis' 
                    ? 'bg-[#D9B370] text-[#0C0B0A] font-semibold shadow' 
                    : 'text-[#A39E93] hover:text-[#FAF6F0]'
                }`}
              >
                艾新網球俱樂部
              </button>
              <button
                onClick={() => setActiveBrand('marketing')}
                className={`px-6 py-2.5 rounded-full text-xs tracking-wider transition-all ${
                  activeBrand === 'marketing' 
                    ? 'bg-[#D9B370] text-[#0C0B0A] font-semibold shadow' 
                    : 'text-[#A39E93] hover:text-[#FAF6F0]'
                }`}
              >
                艾新運動行銷
              </button>
            </div>
          </div>

          {/* 品牌內容展示卡片 */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#141210]/70 border border-[#D9B370]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9B370]/5 rounded-full blur-3xl pointer-events-none" />

            {activeBrand === 'tennis' ? (
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#D9B370]/10 text-[#D9B370] text-[11px] tracking-widest uppercase mb-4">
                    ELSIN HALEWIND TENNIS CLUB
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF6F0] mb-4">
                    艾新網球俱樂部
                  </h3>
                  <p className="text-sm text-[#A39E93] leading-relaxed mb-6">
                    深耕新竹在地的網球交流與教學社群。以耐心引導、清晰結構與優雅動作為教學核心，為成人初學、進階學員及青少年提供兼具樂趣與質感的網球體驗。
                  </p>
                  <ul className="space-y-3 mb-8 text-xs text-[#FAF6F0]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B370]" />
                      一對一私人擊球指導 / 雙人對練
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B370]" />
                      成人小班精緻教學與步法觀念建構
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B370]" />
                      專屬俱樂部學員交流賽與常態球敘
                    </li>
                  </ul>
                  <a 
                    href={TENNIS_IG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-[#D9B370] font-medium tracking-wider uppercase group"
                  >
                    探索俱樂部日常 
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#D9B370]/20 bg-[#1A1815] aspect-[4/3] flex items-center justify-center p-8 text-center">
                  <div className="space-y-3">
                    <Wind className="w-10 h-10 text-[#D9B370] mx-auto opacity-80" />
                    <div className="font-serif text-xl text-[#FAF6F0]">Play Tennis, Hale in the Wind</div>
                    <p className="text-xs text-[#8A857B] max-w-xs mx-auto">
                      在風中健康暢打，體會網球擊球的極致優雅
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#FAF6F0]/10 text-[#FAF6F0] text-[11px] tracking-widest uppercase mb-4">
                    ELSIN SPORTS MARKETING
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF6F0] mb-4">
                    艾新運動行銷
                  </h3>
                  <p className="text-sm text-[#A39E93] leading-relaxed mb-6">
                    打破傳統運動的框架，打造兼具美感與品味的體育企劃。涵蓋主題運動賽事策劃、跨界品牌聯名、企業運動專案以及高爾夫等高階項目推廣。
                  </p>
                  <ul className="space-y-3 mb-8 text-xs text-[#FAF6F0]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B370]" />
                      特色節慶主題球賽策劃（聖誕、萬聖節變裝球賽）
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B370]" />
                      時尚服飾、咖啡與休閒品牌跨界聯名活動
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B370]" />
                      高爾夫推廣項目與商業品牌合作專案
                    </li>
                  </ul>
                  <a 
                    href={SPORT_MARKETING_IG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-[#D9B370] font-medium tracking-wider uppercase group"
                  >
                    關注運動行銷動態 
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#D9B370]/20 bg-[#1A1815] aspect-[4/3] flex items-center justify-center p-8 text-center">
                  <div className="space-y-3">
                    <Sparkles className="w-10 h-10 text-[#D9B370] mx-auto opacity-80" />
                    <div className="font-serif text-xl text-[#FAF6F0]">Elevating Sports & Community</div>
                    <p className="text-xs text-[#8A857B] max-w-xs mx-auto">
                      以精緻策劃引領運動新風尚，連結多面向高端客群
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 活動掠影 (Curated Moments / Gallery) */}
      <section id="moments" className="py-24 px-6 border-t border-[#D9B370]/10 bg-[#0E0D0B]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="text-[11px] tracking-[0.25em] text-[#D9B370] uppercase mb-3">
                Curated Moments
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#FAF6F0]">
                活動與跨界掠影
              </h2>
            </div>
            <p className="text-xs text-[#8A857B] mt-4 md:mt-0 tracking-wider">
              記錄運動場上的精彩碰撞與純粹笑容
            </p>
          </div>

          {/* 相簿卡片列表 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Coffee Run (已對接本地圖片路徑) */}
            <div className="group rounded-2xl overflow-hidden bg-[#141210] border border-[#D9B370]/15 hover:border-[#D9B370]/50 transition-all flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-[#1A1815] relative">
                <img 
                  src="/images/coffee-run.jpg" 
                  alt="Coffee Run 品牌跨界慢跑活動" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // 若本地尚未放置圖片，自動切換至優雅備用佔位色塊
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1C1A16] to-[#0C0B0A]">
                        <span class="text-xs text-[#D9B370] tracking-widest uppercase mb-2">ELSIN × Coffee Run</span>
                        <p class="text-[11px] text-[#8A857B]">服飾品牌跨界晨跑企劃</p>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] tracking-widest text-[#D9B370] uppercase mb-1">Brand Collaboration</div>
                  <h4 className="font-serif text-base text-[#FAF6F0] mb-1">Coffee Run 跨界慢跑</h4>
                  <p className="text-xs text-[#8A857B] leading-relaxed">
                    結合運動休閒與咖啡文化的社群盛會。
                  </p>
                </div>
              </div>
            </div>

            {/* 2. 萬聖節變裝球賽 */}
            <div className="group rounded-2xl overflow-hidden bg-[#141210] border border-[#D9B370]/15 hover:border-[#D9B370]/50 transition-all flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#1C1A16] to-[#0C0B0A] flex flex-col items-center justify-center p-6 text-center">
                <span className="text-xs text-[#D9B370] tracking-widest uppercase mb-2">Halloween Tennis</span>
                <p className="text-[11px] text-[#8A857B]">創意變裝主題球賽</p>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] tracking-widest text-[#D9B370] uppercase mb-1">Thematic Event</div>
                  <h4 className="font-serif text-base text-[#FAF6F0] mb-1">萬聖節變裝網球賽</h4>
                  <p className="text-xs text-[#8A857B] leading-relaxed">
                    打破常規的趣味競技，滿載節慶熱力。
                  </p>
                </div>
              </div>
            </div>

            {/* 3. 聖誕球賽 */}
            <div className="group rounded-2xl overflow-hidden bg-[#141210] border border-[#D9B370]/15 hover:border-[#D9B370]/50 transition-all flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#1C1A16] to-[#0C0B0A] flex flex-col items-center justify-center p-6 text-center">
                <span className="text-xs text-[#D9B370] tracking-widest uppercase mb-2">Christmas Cup</span>
                <p className="text-[11px] text-[#8A857B]">歲末年終俱樂部交流賽</p>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] tracking-widest text-[#D9B370] uppercase mb-1">Annual Tournament</div>
                  <h4 className="font-serif text-base text-[#FAF6F0] mb-1">聖誕歲末挑戰賽</h4>
                  <p className="text-xs text-[#8A857B] leading-relaxed">
                    年末球友齊聚一堂，揮拍交流美好回憶。
                  </p>
                </div>
              </div>
            </div>

            {/* 4. 高爾夫項目推廣 */}
            <div className="group rounded-2xl overflow-hidden bg-[#141210] border border-[#D9B370]/15 hover:border-[#D9B370]/50 transition-all flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#1C1A16] to-[#0C0B0A] flex flex-col items-center justify-center p-6 text-center">
                <span className="text-xs text-[#D9B370] tracking-widest uppercase mb-2">Golf Expansion</span>
                <p className="text-[11px] text-[#8A857B]">高階球道揮桿探索</p>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] tracking-widest text-[#D9B370] uppercase mb-1">Upcoming Project</div>
                  <h4 className="font-serif text-base text-[#FAF6F0] mb-1">高爾夫運動企劃</h4>
                  <p className="text-xs text-[#8A857B] leading-relaxed">
                    邁向綠茵球道的從容揮桿，延伸高端體驗。
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 頁面尾端 (Footer) */}
      <footer className="py-16 px-6 border-t border-[#D9B370]/15 bg-[#080706]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black border border-[#D9B370]/30 rounded-md flex items-center justify-center">
              <span className="font-serif font-bold text-lg text-white">E<span className="text-[#D9B370] italic">S</span></span>
            </div>
            <div>
              <div className="font-serif tracking-widest text-xs uppercase text-[#FAF6F0]">ELSIN 艾新</div>
              <div className="text-[10px] tracking-wider text-[#8A857B]">HALEWIND TENNIS & SPORTS MARKETING</div>
            </div>
          </div>

          {/* 獨立品牌 IG 導流 */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#B3ADA0]">
            <a 
              href={TENNIS_IG}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#D9B370] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#D9B370]" />
              <span>艾新網球俱樂部 IG</span>
            </a>
            <a 
              href={SPORT_MARKETING_IG}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#D9B370] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#D9B370]" />
              <span>艾新運動行銷 IG</span>
            </a>
          </div>

          <div className="text-[11px] text-[#635F57] tracking-wider">
            © {new Date().getFullYear()} ELSIN. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}
