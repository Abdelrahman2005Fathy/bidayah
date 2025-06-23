import { Button } from "@/components/ui/button";
import { useState } from "react";

 function Footer() {
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
    <footer className="text-amber-50 dark:bg-[#055f56] border-t mt-12">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* روابط التنقل */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
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
          </nav>

          {/* زر التسجيل */}
         <Button 
            className="bg-[#f5a623] hover:bg-[#e6951f] cursor-pointer"
            onClick={() => window.open('https://forms.gle/LeEVGjW1Fi84gzb79', '_blank')}
          >
            سجل الآن
          </Button>
        </div>

        {/* حقوق النشر */}
        <div className="mt-8 text-center text-sm ">
          <h6>© 1446هـ برنامج بداية. جميع الحقوق محفوظة.</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;