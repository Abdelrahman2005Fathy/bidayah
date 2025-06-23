import React from 'react';
import { BookText, Users, Settings, Activity, Bus } from 'lucide-react';
import { Button } from './ui/button';

const ProgramSection = () => {
  const features = [
  {
    icon: <BookText className="h-8 w-8" />,
    title: "اللقاءات الإيمانية",
    description: "تقوية الصلة بالله ومعرفة أسمائه وصفاته، وتزكية النفس للتقرب إليه"
  },
  {
    icon: <BookText className="h-8 w-8" />,
    title: "اللقاءات العلمية",
    description: "تعلم العقيدة الصحيحة والفقه العملي لفهم أساسيات الدين "
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "الجلسات التربوية",
    description: "تكوين شخصية مسلمة متكاملة على منهج النبي ﷺ والصحابة"
  },
{
  icon: <Settings className="h-8 w-8" />,
  title: "المهارات العملية",
  description: "تطوير المهارات المطلوبة في سوق العمل مثل البرمجة والتصميم واللغة الإنجليزية، لتمكين المشاركين من إنشاء مصادر دخل"
},
  {
    icon: <Activity className="h-8 w-8" />,
    title: "الأنشطة الترفيهية",
    description: "ممارسة أنشطة رياضية متنوعة (كرة قدم، سباحة، و غيرها) في بيئة إيمانية، تجمع بين المتعة الصحية وبناء العلاقات الأخوية"
  },
  {
    icon: <Bus className="h-8 w-8" />,
    title: "الرحلة الختامية",
    description: "رحلة ختامية في نهاية هذا البرنامج "
  }
]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8f8f8] to-white">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#055f56] mb-4">
            <span className="font-arabic block mb-2">مميزات البرنامج</span>
            رحلة متكاملة تنقلك إلى الأفضل
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto"></div>
        </div>

        {/* بطاقات المميزات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* الشريط العلوي */}
              <div className="h-2 bg-[#055f56]"></div>
              
              <div className="p-6">
                {/* الأيقونة */}
                <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-[#055f56]/10 text-[#055f56] group-hover:bg-[#f5a623]/10 group-hover:text-[#f5a623] transition-colors duration-300">
                  {feature.icon}
                </div>
                
                {/* المحتوى */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#055f56] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>

              {/* تأثير عند hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f5a623]/30 rounded-xl pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* قسم إضافي */}
        <div className="mt-20 bg-[#055f56] rounded-2xl p-8 md:p-12 text-center text-white shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">برنامج شامل لكل جوانب الحياة</h3>
          <p className="text-white/90 max-w-3xl mx-auto mb-6">
            "بداية" ليس مجرد برنامج عادي، بل هو تجربة تحويلية تغطي جميع الجوانب التي يحتاجها الشباب المسلم في زماننا
          </p>
          <Button className="bg-[#f5a623] hover:bg-[#e6951f] px-8 py-4 text-lg font-semibold">
            اكتشف المزيد عن المحاور
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;