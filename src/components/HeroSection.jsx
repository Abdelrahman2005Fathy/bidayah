import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  // مؤقت عد تنازلي (3 أيام كمثال)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev;
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // إغلاق القائمة المنسدلة على الهاتف بعد النقر
  };

  return (
    <section className="relative bg-gradient-to-b from-[#055f56] to-[#0e2f1a] py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* الجزء النصي */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-right">
            {/* العنوان والعنوان الفرعي */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                <span className="block font-arabic text-[#f5a623] mb-4">آنَ أوانُ الانطلاقة...</span>
                هل ستكون من أهلها؟
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                برنامج "بداية" رحلة تغيير شاملة تنقلك من حيث أنت إلى حيث تريد أن تكون
              </p>
            </div>

            {/* مؤقت العد التنازلي */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <Clock className="text-[#f5a623] h-5 w-5" />
                <span className="text-white/90 text-sm">ينتهي التسجيل خلال:</span>
              </div>
              <div className="flex justify-center lg:justify-start gap-3">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center">
                    <div className="bg-[#f5a623] text-white font-bold rounded-lg w-12 h-12 flex items-center justify-center text-xl">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <span className="text-white/80 text-xs mt-1">
                      {unit === 'days' ? 'أيام' : 
                       unit === 'hours' ? 'ساعات' : 
                       unit === 'minutes' ? 'دقائق' : 'ثواني'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* أزرار CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
              
                <Button className="z-10 cursor-pointer bg-[#f5a623] hover:bg-[#e6951f] px-8 py-6 text-lg font-semibold shadow-lg transform transition hover:scale-105">
                  <Link to={'https://forms.gle/LeEVGjW1Fi84gzb79'} target="_blank" >
                  سجل الآن - مقاعد محدودة
                  </Link>
                </Button>
              <Button 
               variant="outline" 
               className="z-10 cursor-pointer border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
               onClick={() => scrollToSection('gallery')} 
               >
                شاهد الفيديو التعريفي
              </Button>
            </div>
          </div>

          {/* الصورة التعبيرية */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-[1.02] transition duration-500">
              <img 
                src="/heroImg.jpg" 
                alt="شباب يشاركون في أنشطة البرنامج" 
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* عناصر تصميمية إضافية */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#f5a623]/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#055f56]/20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;