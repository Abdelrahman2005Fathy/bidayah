import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // دالة للتمرير السلس إلى القسم المطلوب
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
    <nav className="sticky top-0 bg-[#055f56] text-white shadow-lg w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* الجزء الأيمن (الشعار) */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img 
            src="/Logo.jpg" 
            alt="شعار برنامج بداية" 
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <span className="custom-arabic-title">بـدايــــــــة</span>
        </div>

        {/* القائمة الرئيسية (للكمبيوتر) */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-[#f5a623] transition-colors cursor-pointer"
          >
            الرئيسية
          </button>
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-[#f5a623] transition-colors cursor-pointer"
          >
            عن البرنامج
          </button>
          <button 
            onClick={() => scrollToSection('program')} 
            className="hover:text-[#f5a623] transition-colors cursor-pointer"
          >
            المحاور
          </button>
          <button 
            onClick={() => scrollToSection('schedule')} 
            className="hover:text-[#f5a623] transition-colors cursor-pointer"
          >
            الجـدول الزمـنــي
          </button>
          <Button 
            className="bg-red-600 hover:bg-red-400 cursor-pointer"
            
          >
            تم غلق التسجيل
          </Button>
        </div>

        {/* قائمة الهاتف */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-white/10 cursor-pointer"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* القائمة المنسدلة للهاتف */}
      {isOpen && (
        <div className="md:hidden bg-[#055f56] pb-4 px-4 space-y-3">
          <button 
            onClick={() => scrollToSection('home')} 
            className="block hover:text-[#f5a623] py-2 w-full text-right cursor-pointer"
          >
            الرئيسية
          </button>
          <button 
            onClick={() => scrollToSection('home')} 
            className="block hover:text-[#f5a623] py-2 w-full text-right cursor-pointer"
          >
            عن البرنامج
          </button>
          <button 
            onClick={() => scrollToSection('program')} 
            className="block hover:text-[#f5a623] py-2 w-full text-right cursor-pointer"
          >
            المحاور
          </button>
          <button 
            onClick={() => scrollToSection('schedule')} 
            className="block hover:text-[#f5a623] py-2 w-full text-right cursor-pointer"
          >
            الجـدول الزمـنــي
          </button>
          <Button 
            className="w-full bg-red-600 hover:bg-red-400 cursor-pointer"
            
          >
            تم غلق التسجيل
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;