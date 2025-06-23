import React, { useState, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('video');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  // بيانات صور من النسخ السابقة
  const galleryImages = [
    '/design1.jpg',
    '/design2.jpg',
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8f8f8] to-white">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#055f56]">
            <span className="font-arabic block mb-2">معرض الوسائط</span>
          </h2>
          <div className="w-20 h-1 bg-[#f5a623] mx-auto mt-4"></div>
        </div>

        {/* أزرار التبويب */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === 'video' ? 'bg-[#055f56] text-white' : 'text-gray-600'}`}
            >
              الفيديو التعريفي
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === 'gallery' ? 'bg-[#055f56] text-white' : 'text-gray-600'}`}
            >
              معرض الصور
            </button>
          </div>
        </div>

        {/* محتوى الوسائط */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {activeTab === 'video' ? (
  <div 
    className="relative pt-[56.25%]"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* مشغل الفيديو */}
    <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
      onClick={togglePlay}
    >
      <source src="/Promo.mp4" type="video/mp4" />
      متصفحك لا يدعم تشغيل الفيديو
    </video>

    {/* عناصر التحكم */}
    {!isPlaying && (
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity"
        aria-label="تشغيل الفيديو"
      >
        <div className="bg-[#f5a623] p-5 rounded-full transform transition hover:scale-110">
          <Play className="h-10 w-10 text-white" fill="currentColor" />
        </div>
      </button>
    )}

    {isHovered && isPlaying && (
      <button
        onClick={togglePlay}
        className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black transition-all"
        aria-label="إيقاف الفيديو"
      >
        <Pause className="h-5 w-5" />
      </button>
    )}
  </div>
) : (
  <div className="relative">
    {/* عرض الصور جنبًا إلى جنب */}
    <div className="relative h-96 overflow-hidden flex justify-center mx-auto" style={{ maxWidth: '800px' }}>
      {galleryImages.map((img, index) => (
        <div 
          key={index} 
          className="relative h-full group flex items-center justify-center"
          style={{ width: '50%' }}
        >
          <div className="relative h-full w-full overflow-hidden">
            <img
              src={img}
              alt={`معرض صور البرنامج ${index + 1}`}
              className=" h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            {/* حدود ملونة */}
            <div className={`absolute top-0 bottom-0 w-1 ${index === 0 ? 'right-0 bg-amber-400' : 'left-0 bg-amber-500'}`}></div>
            
            {/* تأثير hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-medium">نسخة {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
};
export default MediaGallery;