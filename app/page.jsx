'use client';
import React, { useState, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  CheckCircle2, 
  Award, 
  Star, 
  ChevronRight, 
  X, 
  MessageCircle, 
  Info,
  CalendarCheck,
  ShieldCheck,
  Plus,
  Lock,
  Unlock,
  Trash2,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Eye,
  CalendarDays,
  Coffee
} from 'lucide-react';

// 假資料：課程方案
const LESSON_TYPES = [
  {
    id: 'private_60',
    title: '1對1 私人專屬指導',
    duration: 60,
    price: 1500,
    badge: '最推薦',
    description: '針對個人正反拍、發球與步法進行高強度客製化修正，附短影音動作回顧。',
    suitableFor: '新手建立架構 / 進階球友突破瓶頸'
  },
  {
    id: 'duo_90',
    title: '雙人雙打戰術班',
    duration: 90,
    price: 2200,
    badge: '人氣首選',
    description: '著重雙打站位、截擊壓迫與默契移位練習，適合好友或夫妻共同進步。',
    suitableFor: '已有來回對抽能力的球友'
  },
  {
    id: 'trial_45',
    title: '基礎擊球體驗課',
    duration: 45,
    price: 1000,
    badge: '新手友善',
    description: '初學者專屬，提供球拍借用，體驗網球擊球樂趣與基本握拍甜區打擊感。',
    suitableFor: '從未接觸過網球之零基礎學員'
  }
];

// 預設時段範例資料
const INITIAL_SLOTS = [
  // Day 0
  { 
    id: 's1', 
    dayOffset: 0, 
    time: '08:30 - 09:30', 
    court: '竹光網球場 第1面', 
    status: 'booked', // available | booked | blocked
    bookingDetails: {
      studentName: '林俊豪',
      phone: '0912-345-678',
      lineId: 'how_tennis',
      lessonType: '1對1 私人專屬指導',
      price: 1500,
      level: '進階愛好者 (NTRP 3.5)',
      notes: '想修正反拍單手切球的穩定度。',
      paymentStatus: 'paid'
    }
  },
  { id: 's2', dayOffset: 0, time: '10:00 - 11:00', court: '竹光網球場 第1面', status: 'available' },
  { id: 's3', dayOffset: 0, time: '15:30 - 16:30', court: '三民網球場 A場', status: 'available' },
  { 
    id: 's4', 
    dayOffset: 0, 
    time: '18:00 - 19:30', 
    court: '新竹縣立網球場 第3面 (夜間)', 
    status: 'booked',
    bookingDetails: {
      studentName: '王怡婷 & 李大華',
      phone: '0988-765-432',
      lineId: 'tina_wang',
      lessonType: '雙人雙打戰術班',
      price: 2200,
      level: '休閒程度 (可底線對抽)',
      notes: '練習網前雙截擊補位與手勢訊號。',
      paymentStatus: 'cash_on_site'
    }
  },
  { id: 's5', dayOffset: 0, time: '20:00 - 21:00', court: '新竹縣立網球場 第3面 (夜間)', status: 'blocked', blockReason: '私人聚餐/休息' },

  // Day 1
  { id: 's6', dayOffset: 1, time: '09:00 - 10:00', court: '竹光網球場 第2面', status: 'available' },
  { id: 's7', dayOffset: 1, time: '10:30 - 11:30', court: '竹光網球場 第2面', status: 'available' },
  { 
    id: 's8', 
    dayOffset: 1, 
    time: '16:00 - 17:00', 
    court: '三民網球場 B場', 
    status: 'booked',
    bookingDetails: {
      studentName: '張家瑋',
      phone: '0922-111-222',
      lineId: 'jw_tennis',
      lessonType: '基礎擊球體驗課',
      price: 1000,
      level: '零基礎新手',
      notes: '當天需借一隻成人練習拍。',
      paymentStatus: 'paid'
    }
  },
  { id: 's9', dayOffset: 1, time: '19:00 - 20:30', court: '新竹縣立網球場 第2面 (夜間)', status: 'available' },

  // Day 2
  { id: 's10', dayOffset: 2, time: '08:00 - 09:00', court: '竹光網球場 第1面', status: 'available' },
  { id: 's11', dayOffset: 2, time: '14:00 - 15:30', court: '三民網球場 A場', status: 'blocked', blockReason: '教練裁判研習會' },
  { id: 's12', dayOffset: 2, time: '17:00 - 18:00', court: '竹光網球場 第1面', status: 'available' },

  // Day 3
  { id: 's13', dayOffset: 3, time: '09:00 - 10:00', court: '三民網球場 A場', status: 'available' },
  { id: 's14', dayOffset: 3, time: '15:00 - 16:00', court: '竹光網球場 第2面', status: 'available' },
  { id: 's15', dayOffset: 3, time: '19:30 - 21:00', court: '新竹縣立網球場 第1面 (夜間)', status: 'available' },

  // Day 4 ~ 6
  { id: 's16', dayOffset: 4, time: '10:00 - 11:00', court: '竹光網球場 第1面', status: 'available' },
  { id: 's17', dayOffset: 4, time: '18:30 - 20:00', court: '新竹縣立網球場 第4面 (夜間)', status: 'available' },
  { id: 's18', dayOffset: 5, time: '08:30 - 09:30', court: '三民網球場 B場', status: 'available' },
  { id: 's19', dayOffset: 5, time: '16:00 - 17:30', court: '竹光網球場 第2面', status: 'available' },
  { id: 's20', dayOffset: 6, time: '09:00 - 10:30', court: '新竹縣立網球場 第1面', status: 'available' },
];

export default function TennisCoachBooking() {
  // 模式切換：'student' (學員前台) | 'admin' (教練後台)
  const [viewMode, setViewMode] = useState('student');

  // 選中的課程類型
  const [selectedLesson, setSelectedLesson] = useState(LESSON_TYPES[0]);
  // 選中的日期 offset (0 = 今天, 1 = 明天...)
  const [selectedDayOffset, setSelectedDayOffset] = useState(0);
  // 所有時段資料狀態
  const [slots, setSlots] = useState(INITIAL_SLOTS);
  // 學員端預約中的時段
  const [activeSlot, setActiveSlot] = useState(null);
  
  // 後台專用狀態
  const [selectedBookingDetail, setSelectedBookingDetail] = useState(null); // 查看預約學員彈窗
  const [isAddSlotModalOpen, setIsAddSlotModalOpen] = useState(false);     // 新增時段彈窗
  const [newSlotForm, setNewSlotForm] = useState({
    dayOffset: 0,
    startTime: '14:00',
    endTime: '15:00',
    court: '竹光網球場 第1面',
    customCourt: ''
  });

  // 表單資料
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    lineId: '',
    level: 'beginner',
    notes: ''
  });
  // 預約完成回執狀態
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 產生未來 7 天日曆資訊
  const daysList = useMemo(() => {
    const list = [];
    const weekDays = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    const now = new Date();

    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(now.getDate() + i);
      list.push({
        offset: i,
        dateStr: `${d.getMonth() + 1}/${d.getDate()}`,
        dayName: i === 0 ? '今天' : weekDays[d.getDay()],
        fullDate: `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
      });
    }
    return list;
  }, []);

  // 當前選取日期的所有時段
  const currentDaySlots = useMemo(() => {
    return slots.filter(slot => slot.dayOffset === selectedDayOffset);
  }, [slots, selectedDayOffset]);

  // 後台統計數據計算
  const stats = useMemo(() => {
    const booked = slots.filter(s => s.status === 'booked');
    const available = slots.filter(s => s.status === 'available');
    const blocked = slots.filter(s => s.status === 'blocked');
    const totalRevenue = booked.reduce((sum, item) => sum + (item.bookingDetails?.price || 1500), 0);
    return {
      bookedCount: booked.length,
      availableCount: available.length,
      blockedCount: blocked.length,
      revenue: totalRevenue
    };
  }, [slots]);

  // 後台操作：一鍵封鎖或解除時段
  const toggleBlockSlot = (slotId) => {
    setSlots(prev => prev.map(s => {
      if (s.id === slotId) {
        if (s.status === 'available') {
          return { ...s, status: 'blocked', blockReason: '教練請假 / 私人行程' };
        } else if (s.status === 'blocked') {
          return { ...s, status: 'available', blockReason: undefined };
        }
      }
      return s;
    }));
  };

  // 後台操作：一鍵全天休假封鎖
  const handleBlockWholeDay = () => {
    setSlots(prev => prev.map(s => {
      if (s.dayOffset === selectedDayOffset && s.status === 'available') {
        return { ...s, status: 'blocked', blockReason: '全天請假 / 球場整修' };
      }
      return s;
    }));
  };

  // 後台操作：全天解鎖開放
  const handleUnblockWholeDay = () => {
    setSlots(prev => prev.map(s => {
      if (s.dayOffset === selectedDayOffset && s.status === 'blocked') {
        return { ...s, status: 'available', blockReason: undefined };
      }
      return s;
    }));
  };

  // 後台操作：刪除時段
  const handleDeleteSlot = (slotId) => {
    setSlots(prev => prev.filter(s => s.id !== slotId));
  };

  // 後台操作：取消學員預約
  const handleCancelBooking = (slotId) => {
    setSlots(prev => prev.map(s => {
      if (s.id === slotId) {
        return { ...s, status: 'available', bookingDetails: undefined };
      }
      return s;
    }));
    setSelectedBookingDetail(null);
  };

  // 後台操作：新增臨時時段送出
  const handleCreateSlot = (e) => {
    e.preventDefault();
    const courtName = newSlotForm.court === '自訂' ? (newSlotForm.customCourt || '自訂球場') : newSlotForm.court;
    const newSlot = {
      id: 'custom_' + Date.now(),
      dayOffset: Number(newSlotForm.dayOffset),
      time: `${newSlotForm.startTime} - ${newSlotForm.endTime}`,
      court: courtName,
      status: 'available'
    };
    setSlots(prev => [...prev, newSlot]);
    setIsAddSlotModalOpen(false);
  };

  // 開啟預約 Modal (學員端)
  const handleOpenBooking = (slot) => {
    if (slot.status !== 'available') return;
    setActiveSlot(slot);
  };

  // 關閉 Modal
  const handleCloseModal = () => {
    setActiveSlot(null);
    setFormData({
      name: '',
      phone: '',
      lineId: '',
      level: 'beginner',
      notes: ''
    });
  };

  // 提交預約 (學員端)
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setSlots(prev => prev.map(s => s.id === activeSlot.id ? { 
        ...s, 
        status: 'booked',
        bookingDetails: {
          studentName: formData.name,
          phone: formData.phone,
          lineId: formData.lineId,
          lessonType: selectedLesson.title,
          price: selectedLesson.price,
          level: formData.level,
          notes: formData.notes,
          paymentStatus: 'paid'
        }
      } : s));
      
      const currentDay = daysList.find(d => d.offset === selectedDayOffset);
      setConfirmedBooking({
        lesson: selectedLesson,
        slot: activeSlot,
        date: currentDay,
        student: { ...formData },
        bookingId: 'TC-' + Math.floor(100000 + Math.random() * 900000)
      });

      setIsSubmitting(false);
      handleCloseModal();
    }, 600);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 py-8 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-emerald-500 selection:text-black">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* 0. 模式切換導覽列 (學員前台 vs 教練後台) */}
        <div className="flex items-center justify-between bg-neutral-800/90 border border-neutral-700/80 px-4 py-2.5 rounded-2xl shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              系統模式
            </span>
          </div>

          <div className="bg-neutral-900/90 p-1 rounded-xl flex items-center gap-1 border border-neutral-700/60">
            <button
              onClick={() => setViewMode('student')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'student'
                  ? 'bg-emerald-500 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              學員預約視圖
            </button>
            <button
              onClick={() => setViewMode('admin')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'admin'
                  ? 'bg-emerald-500 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              教練管理後台
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 教練後台模式 (ADMIN DASHBOARD) */}
        {/* ======================================================== */}
        {viewMode === 'admin' ? (
          <div className="space-y-6 animate-fade-in">
            {/* 1. 儀表板數據指標 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-neutral-800/70 border border-neutral-700/60 p-4 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-neutral-400 text-xs">
                  <span>已預約堂數</span>
                  <CalendarCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-white mt-2">{stats.bookedCount} <span className="text-xs font-normal text-neutral-400">堂</span></div>
              </div>

              <div className="bg-neutral-800/70 border border-neutral-700/60 p-4 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-neutral-400 text-xs">
                  <span>可預約時段</span>
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-emerald-400 mt-2">{stats.availableCount} <span className="text-xs font-normal text-neutral-400">個</span></div>
              </div>

              <div className="bg-neutral-800/70 border border-neutral-700/60 p-4 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-neutral-400 text-xs">
                  <span>封鎖 / 請假</span>
                  <Lock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-black text-neutral-300 mt-2">{stats.blockedCount} <span className="text-xs font-normal text-neutral-400">個</span></div>
              </div>

              <div className="bg-neutral-800/70 border border-neutral-700/60 p-4 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-neutral-400 text-xs">
                  <span>本週預估收入</span>
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-white mt-2">${stats.revenue.toLocaleString()} <span className="text-xs font-normal text-neutral-400">NTD</span></div>
              </div>
            </div>

            {/* 2. 快捷操作列 */}
            <div className="bg-neutral-800/60 border border-neutral-700/60 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4 text-emerald-400" />
                  當日快捷管理：
                  <span className="text-emerald-400">{daysList.find(d => d.offset === selectedDayOffset)?.fullDate}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleBlockWholeDay}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-neutral-300 hover:text-white hover:bg-neutral-700 transition flex items-center gap-1"
                >
                  <Coffee className="w-3.5 h-3.5 text-amber-400" />
                  本日全天請假
                </button>
                <button
                  onClick={handleUnblockWholeDay}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-neutral-300 hover:text-white hover:bg-neutral-700 transition flex items-center gap-1"
                >
                  <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                  全天解除封鎖
                </button>
                <button
                  onClick={() => setIsAddSlotModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs transition flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                >
                  <Plus className="w-4 h-4" />
                  加開臨時時段
                </button>
              </div>
            </div>

            {/* 3. 日期切換 Tab */}
            <div className="grid grid-cols-7 gap-2">
              {daysList.map((day) => {
                const isSelected = selectedDayOffset === day.offset;
                const daySlotCount = slots.filter(s => s.dayOffset === day.offset).length;
                const dayBookedCount = slots.filter(s => s.dayOffset === day.offset && s.status === 'booked').length;

                return (
                  <button
                    key={day.offset}
                    onClick={() => setSelectedDayOffset(day.offset)}
                    className={`py-3 px-1 rounded-xl flex flex-col items-center justify-center transition-all ${
                      isSelected 
                        ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md ring-2 ring-emerald-400' 
                        : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700/60 border border-neutral-700/60'
                    }`}
                  >
                    <span className={`text-xs ${isSelected ? 'text-neutral-900 font-semibold' : 'text-neutral-400'}`}>
                      {day.dayName}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold mt-0.5 tracking-tight">
                      {day.dateStr}
                    </span>
                    <span className={`text-[10px] mt-1 px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-neutral-950/20 text-neutral-900' : 'bg-neutral-900 text-neutral-400'
                    }`}>
                      {dayBookedCount}/{daySlotCount} 堂
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 4. 後台時段管理清單 */}
            <div className="bg-neutral-800/40 border border-neutral-700/60 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-700/60 pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-bold text-white text-sm">
                    {daysList.find(d => d.offset === selectedDayOffset)?.fullDate} 時段列表 ({currentDaySlots.length})
                  </h3>
                </div>
                <div className="text-xs text-neutral-400 flex items-center gap-3">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm" /> 開放中</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-indigo-500 rounded-sm" /> 學員預約</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-neutral-600 rounded-sm" /> 請假封鎖</span>
                </div>
              </div>

              {currentDaySlots.length === 0 ? (
                <div className="text-center py-12 text-neutral-400 text-sm border border-dashed border-neutral-700/80 rounded-xl">
                  本日尚未設置任何時段。點擊上方「加開臨時時段」快速建立。
                </div>
              ) : (
                <div className="space-y-3">
                  {currentDaySlots.map(slot => {
                    const isBooked = slot.status === 'booked';
                    const isBlocked = slot.status === 'blocked';
                    const isAvailable = slot.status === 'available';

                    return (
                      <div
                        key={slot.id}
                        className={`rounded-xl border p-4 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          isBooked 
                            ? 'bg-neutral-900/90 border-indigo-500/50 ring-1 ring-indigo-500/20' 
                            : isBlocked 
                            ? 'bg-neutral-900/50 border-neutral-700/80 opacity-75' 
                            : 'bg-neutral-900/90 border-emerald-500/30 hover:border-emerald-500/60'
                        }`}
                      >
                        {/* 左側時段與球場 */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-base font-bold text-white">{slot.time}</span>
                            
                            {isAvailable && (
                              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                開放學員預約中
                              </span>
                            )}
                            {isBooked && (
                              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                已預約：{slot.bookingDetails?.studentName}
                              </span>
                            )}
                            {isBlocked && (
                              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-neutral-700 text-neutral-300">
                                🚫 {slot.blockReason || '封鎖休假'}
                              </span>
                            )}
                          </div>

                          <div className="text-xs text-neutral-400 flex items-center gap-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                              {slot.court}
                            </span>
                            {isBooked && (
                              <span className="text-neutral-500">
                                ｜ 課程：{slot.bookingDetails?.lessonType} (${slot.bookingDetails?.price})
                              </span>
                            )}
                          </div>
                        </div>

                        {/* 右側管理按鈕群 */}
                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          {isBooked ? (
                            <button
                              onClick={() => setSelectedBookingDetail(slot)}
                              className="px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-200 text-xs font-semibold flex items-center gap-1.5 transition"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              檢視學員資料
                            </button>
                          ) : (
                            <button
                              onClick={() => toggleBlockSlot(slot.id)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
                                isBlocked 
                                  ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/50' 
                                  : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                              }`}
                            >
                              {isBlocked ? (
                                <>
                                  <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                                  解除請假 (開放)
                                </>
                              ) : (
                                <>
                                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                                  封鎖 / 請假
                                </>
                              )}
                            </button>
                          )}

                          <button
                            onClick={() => handleDeleteSlot(slot.id)}
                            title="刪除此時段"
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-red-400 hover:bg-neutral-800 transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 新增臨時時段 Modal */}
            {isAddSlotModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
                <div className="bg-neutral-800 border border-neutral-700 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-700 bg-neutral-900/50">
                    <div className="flex items-center gap-2">
                      <Plus className="w-4 h-4 text-emerald-400" />
                      <h3 className="font-bold text-white text-base">加開臨時教學時段</h3>
                    </div>
                    <button 
                      onClick={() => setIsAddSlotModalOpen(false)}
                      className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-700 transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleCreateSlot} className="p-6 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        選擇日期
                      </label>
                      <select
                        value={newSlotForm.dayOffset}
                        onChange={(e) => setNewSlotForm({ ...newSlotForm, dayOffset: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                      >
                        {daysList.map(d => (
                          <option key={d.offset} value={d.offset}>
                            {d.fullDate} ({d.dayName})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          起始時間
                        </label>
                        <input
                          type="time"
                          value={newSlotForm.startTime}
                          onChange={(e) => setNewSlotForm({ ...newSlotForm, startTime: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          結束時間
                        </label>
                        <input
                          type="time"
                          value={newSlotForm.endTime}
                          onChange={(e) => setNewSlotForm({ ...newSlotForm, endTime: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        上課球場地點
                      </label>
                      <select
                        value={newSlotForm.court}
                        onChange={(e) => setNewSlotForm({ ...newSlotForm, court: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 mb-2"
                      >
                        <option value="竹光網球場 第1面">竹光網球場 第1面</option>
                        <option value="竹光網球場 第2面">竹光網球場 第2面</option>
                        <option value="三民網球場 A場">三民網球場 A場</option>
                        <option value="新竹縣立網球場 第3面 (夜間)">新竹縣立網球場 第3面 (夜間)</option>
                        <option value="自訂">自訂其他場地...</option>
                      </select>

                      {newSlotForm.court === '自訂' && (
                        <input
                          type="text"
                          placeholder="請輸入球場名稱與場號"
                          value={newSlotForm.customCourt}
                          onChange={(e) => setNewSlotForm({ ...newSlotForm, customCourt: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                        />
                      )}
                    </div>

                    <div className="pt-3 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsAddSlotModalOpen(false)}
                        className="px-4 py-2 rounded-xl border border-neutral-700 text-neutral-300 text-sm hover:bg-neutral-700"
                      >
                        取消
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-sm hover:bg-emerald-400"
                      >
                        新增開放時段
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* 學員預約詳情彈窗 */}
            {selectedBookingDetail && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
                <div className="bg-neutral-800 border border-neutral-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-700 bg-neutral-900/50">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-emerald-400" />
                      <h3 className="font-bold text-white text-base">學員預約課堂明細</h3>
                    </div>
                    <button 
                      onClick={() => setSelectedBookingDetail(null)}
                      className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-700 transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between bg-neutral-900/80 p-4 rounded-xl border border-neutral-700/60">
                      <div>
                        <h4 className="text-lg font-bold text-white">{selectedBookingDetail.bookingDetails?.studentName}</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">程度評估：{selectedBookingDetail.bookingDetails?.level}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {selectedBookingDetail.bookingDetails?.paymentStatus === 'paid' ? '已付款 ($' + selectedBookingDetail.bookingDetails?.price + ')' : '現場付款'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-neutral-900/50 p-3 rounded-lg border border-neutral-700/50">
                        <span className="text-neutral-500 block">聯絡電話</span>
                        <a href={`tel:${selectedBookingDetail.bookingDetails?.phone}`} className="font-mono text-white text-sm hover:text-emerald-400">
                          {selectedBookingDetail.bookingDetails?.phone}
                        </a>
                      </div>
                      <div className="bg-neutral-900/50 p-3 rounded-lg border border-neutral-700/50">
                        <span className="text-neutral-500 block">LINE 帳號</span>
                        <span className="font-mono text-emerald-400 text-sm">
                          {selectedBookingDetail.bookingDetails?.lineId || '無填寫'}
                        </span>
                      </div>
                      <div className="bg-neutral-900/50 p-3 rounded-lg border border-neutral-700/50">
                        <span className="text-neutral-500 block">課程項目</span>
                        <span className="text-white font-medium">{selectedBookingDetail.bookingDetails?.lessonType}</span>
                      </div>
                      <div className="bg-neutral-900/50 p-3 rounded-lg border border-neutral-700/50">
                        <span className="text-neutral-500 block">預約時段 / 地點</span>
                        <span className="text-white font-medium">{selectedBookingDetail.time}</span>
                      </div>
                    </div>

                    <div className="bg-neutral-900/50 p-3.5 rounded-lg border border-neutral-700/50">
                      <span className="text-xs text-neutral-500 block mb-1">學員需求與備註</span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {selectedBookingDetail.bookingDetails?.notes || '無特殊備註'}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-neutral-700/60">
                      <button
                        onClick={() => handleCancelBooking(selectedBookingDetail.id)}
                        className="text-xs text-red-400 hover:text-red-300 hover:underline flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        退課並釋出此時段
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedBookingDetail(null)}
                          className="px-4 py-2 rounded-xl bg-neutral-700 text-neutral-200 text-xs font-semibold hover:bg-neutral-600 transition"
                        >
                          關閉
                        </button>
                        <a
                          href={`https://line.me/R/ti/p/~${selectedBookingDetail.bookingDetails?.lineId}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl bg-[#06C755] text-white text-xs font-bold flex items-center gap-1.5 shadow hover:opacity-90 transition"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          LINE 聯繫學員
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ======================================================== */
          /* 學員預約前台 (STUDENT VIEW) */
          /* ======================================================== */
          <>
            {/* 1. 教練個人資訊 Header */}
            <header className="relative bg-neutral-800/80 border border-neutral-700/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                <div className="relative group shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-500 to-lime-400 p-[3px] shadow-lg">
                    <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center overflow-hidden">
                      <span className="text-4xl">🎾</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-neutral-950 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                    <CheckCircle2 className="w-3 h-3" /> 認證教練
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center sm:justify-start gap-2">
                        Alex Chen 陳教練
                        <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-medium">
                          全職教學 8 年
                        </span>
                      </h1>
                      <p className="text-sm text-neutral-400 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                        <Award className="w-4 h-4 text-emerald-400" />
                        USPTA 美國職業網球協會認證教練 ｜ PTR 雙認證
                      </p>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end gap-1.5 bg-neutral-900/80 border border-neutral-700/80 px-3.5 py-1.5 rounded-xl self-center sm:self-start">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-white text-sm">4.98</span>
                      <span className="text-xs text-neutral-400">(140+ 則學員評價)</span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                    專精於「現代力學正手拍」、「低衝擊發球旋轉」與「雙打移位跑動」。注重運動防護，善用高格數慢動作錄影分析，讓初學與進階學員在不造成網球肘的前提下快速建立流暢擊球手感。
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-neutral-400">
                    <span className="bg-neutral-900/60 px-2.5 py-1 rounded-md border border-neutral-800">📍 新竹竹光 / 三民 / 縣立球場</span>
                    <span className="bg-neutral-900/60 px-2.5 py-1 rounded-md border border-neutral-800">🏸 提供專業球拍租借</span>
                    <span className="bg-neutral-900/60 px-2.5 py-1 rounded-md border border-neutral-800">⚡ 課後附擊球動作診斷短片</span>
                  </div>
                </div>
              </div>
            </header>

            {/* 預約成功卡片提示 */}
            {confirmedBooking && (
              <div className="bg-emerald-950/50 border-2 border-emerald-500/80 rounded-2xl p-6 shadow-2xl animate-fade-in relative">
                <button 
                  onClick={() => setConfirmedBooking(null)}
                  className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-emerald-300">預約成功！時段已為您保留</h3>
                      <span className="text-xs font-mono bg-neutral-900/80 text-neutral-300 px-2 py-0.5 rounded border border-neutral-700">
                        訂單編號: {confirmedBooking.bookingId}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      感謝您，<span className="text-white font-medium">{confirmedBooking.student.name}</span>！教練已同步收到預約通知，並已在行事曆上鎖定該時段。教練會在 24 小時內透過 LINE 聯繫您確認當日細節。
                    </p>
                    <div className="bg-neutral-900/70 rounded-xl p-3.5 border border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-neutral-400 block">課程項目</span>
                        <span className="font-semibold text-white">{confirmedBooking.lesson.title}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block">時間</span>
                        <span className="font-semibold text-white">{confirmedBooking.date.fullDate} {confirmedBooking.slot.time}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block">上課球場</span>
                        <span className="font-semibold text-white">{confirmedBooking.slot.court}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. 選擇課程方案 */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                  步驟 1：選擇課程方案
                </h2>
                <span className="text-xs text-neutral-400">費用皆含教練費、練習球與場地燈光費</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {LESSON_TYPES.map((lesson) => {
                  const isSelected = selectedLesson.id === lesson.id;
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson)}
                      className={`relative cursor-pointer rounded-xl p-5 transition-all duration-200 border text-left flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-neutral-800/95 border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-500/5' 
                          : 'bg-neutral-800/40 border-neutral-700/60 hover:border-neutral-600 hover:bg-neutral-800/60'
                      }`}
                    >
                      {lesson.badge && (
                        <span className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-emerald-500 text-neutral-950' : 'bg-neutral-700 text-neutral-300'
                        }`}>
                          {lesson.badge}
                        </span>
                      )}
                      
                      <div>
                        <h3 className="font-bold text-base text-white pr-14">{lesson.title}</h3>
                        <div className="flex items-baseline gap-1 mt-2">
                          <span className="text-2xl font-extrabold text-emerald-400">${lesson.price}</span>
                          <span className="text-xs text-neutral-400">TWD / {lesson.duration}分鐘</span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-2.5 line-clamp-2 leading-relaxed">
                          {lesson.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-neutral-700/60 text-[11px] text-neutral-400 flex items-center justify-between">
                        <span>{lesson.suitableFor}</span>
                        <span className={`font-semibold ${isSelected ? 'text-emerald-400' : 'text-neutral-500'}`}>
                          {isSelected ? '已選取' : '選擇'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 3. 未來 7 天日期與時段選擇 */}
            <section className="bg-neutral-800/50 border border-neutral-700/60 rounded-2xl p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-700/50 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-emerald-400" />
                    步驟 2：選擇預約時段
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">點擊日期後，下方將顯示教練當日開放預約的場地時段</p>
                </div>
                <div className="text-xs text-neutral-400 flex items-center gap-3">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm" /> 可預約</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-neutral-700 rounded-sm" /> 額滿/休假</span>
                </div>
              </div>

              {/* 7 天水平選擇器 */}
              <div className="grid grid-cols-7 gap-2">
                {daysList.map((day) => {
                  const isSelected = selectedDayOffset === day.offset;
                  return (
                    <button
                      key={day.offset}
                      onClick={() => setSelectedDayOffset(day.offset)}
                      className={`py-3 px-1 rounded-xl flex flex-col items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/20 ring-2 ring-emerald-400' 
                          : 'bg-neutral-900/60 text-neutral-300 hover:bg-neutral-700/50 border border-neutral-700/50'
                      }`}
                    >
                      <span className={`text-xs ${isSelected ? 'text-neutral-900 font-semibold' : 'text-neutral-400'}`}>
                        {day.dayName}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold mt-0.5 tracking-tight">
                        {day.dateStr}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* 時段網格清單 */}
              <div className="pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  {daysList.find(d => d.offset === selectedDayOffset)?.fullDate} 可選時段
                </h3>

                {currentDaySlots.length === 0 ? (
                  <div className="text-center py-10 bg-neutral-900/40 rounded-xl border border-dashed border-neutral-700 text-neutral-400 text-sm">
                    教練本日暫未開放預約時段，請切換其他日期或私訊詢問。
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {currentDaySlots.map((slot) => {
                      const isAvailable = slot.status === 'available';
                      const isBlocked = slot.status === 'blocked';
                      
                      return (
                        <button
                          key={slot.id}
                          disabled={!isAvailable}
                          onClick={() => handleOpenBooking(slot)}
                          className={`relative p-4 rounded-xl text-left border transition-all flex flex-col justify-between group ${
                            !isAvailable 
                              ? 'bg-neutral-900/40 border-neutral-800 text-neutral-500 cursor-not-allowed opacity-60' 
                              : 'bg-neutral-900/90 border-neutral-700/80 hover:border-emerald-500 hover:bg-neutral-800 text-white shadow-sm'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-base font-bold font-mono tracking-wide flex items-center gap-1.5">
                              {slot.time}
                            </span>
                            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                              isAvailable 
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                : 'bg-neutral-800 text-neutral-500'
                            }`}>
                              {isAvailable ? '可預約' : (isBlocked ? '休假' : '已額滿')}
                            </span>
                          </div>

                          <div className="mt-3 text-xs flex items-center gap-1 text-neutral-400 group-hover:text-neutral-300">
                            <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                            <span className="truncate">{slot.court}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {/* 預約填表 Modal (學員端) */}
        {activeSlot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
            <div className="bg-neutral-800 border border-neutral-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-700 bg-neutral-900/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <h3 className="font-bold text-white text-base">確認課程與填寫資料</h3>
                </div>
                <button 
                  onClick={handleCloseModal}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-700 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 py-3.5 bg-neutral-900/80 border-b border-neutral-700/60 flex flex-wrap gap-y-2 justify-between items-center text-xs">
                <div>
                  <span className="text-neutral-400 block">課程項目</span>
                  <span className="font-semibold text-emerald-400">{selectedLesson.title} (${selectedLesson.price})</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">時段</span>
                  <span className="font-semibold text-white">
                    {daysList.find(d => d.offset === selectedDayOffset)?.fullDate} {activeSlot.time}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-400 block">場地</span>
                  <span className="font-semibold text-white truncate max-w-[120px]">{activeSlot.court}</span>
                </div>
              </div>

              <form onSubmit={handleSubmitBooking} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    學員姓名 <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="例：王小明"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      行動電話 <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="0912-345-678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      LINE ID <span className="text-neutral-500 text-[10px]">(便於課前聯繫)</span>
                    </label>
                    <div className="relative">
                      <MessageCircle className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="例：tennis_player"
                        value={formData.lineId}
                        onChange={(e) => setFormData({ ...formData, lineId: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    目前網球程度
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="零基礎新手">零基礎新手（需要借球拍、尚未學過握拍）</option>
                    <option value="休閒程度 (可底線對抽)">休閒程度（可底線對抽幾板、需修正發球與截擊）</option>
                    <option value="進階愛好者 (NTRP 3.5)">進階愛好者（NTRP 3.0~3.5，欲針對特定球路精進）</option>
                    <option value="比賽競技導向">比賽競技導向（強化雙打站位與受迫回球）</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    備註需求 / 想改善的動作
                  </label>
                  <textarea
                    rows={2}
                    placeholder="例如：想修正反拍容易下網、或是當天需要向教練借 1 隻球拍..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl p-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2.5 rounded-xl border border-neutral-700 text-neutral-300 text-sm hover:bg-neutral-700 transition"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-sm hover:bg-emerald-400 transition flex items-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? '送出預約中...' : '確認並送出預約'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 底部須知 */}
        <footer className="text-center text-xs text-neutral-500 space-y-1">
          <p>天候因素（如遇雨場地濕滑）教練將於上課前 2 小時主動 LINE 聯繫延期事宜。</p>
          <p>© {new Date().getFullYear()} Alex Chen Tennis Coaching. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
