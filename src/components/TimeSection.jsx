import React from 'react';
import { Calendar, Users, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const TimeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f8f8f8]">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#055f56]">
            <span className="font-arabic block mb-2">تفاصيل البرنامج</span>
            كل ما تحتاج معرفته للمشاركة
          </h2>
          <div className="w-20 h-1 bg-[#f5a623] mx-auto mt-4"></div>
        </div>

        {/* بطاقات التفاصيل */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* الجدول الزمني */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#055f56] hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-[#055f56]/10 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-[#055f56]" />
              </div>
              <h3 className="text-xl font-bold text-[#055f56]">الجدول الزمني</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-[#f5a623] text-white p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>3 أيام أسبوعياً</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#f5a623] text-white p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>الأحد، الثلاثاء، الخميس</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#f5a623] text-white p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>بـعــد صــلاة الـفـجــــــر مـبـــاشـرة</span>
              </li>
            </ul>
          </div>

          {/* الفئة المستهدفة */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#f5a623] hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-[#f5a623]/10 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-[#f5a623]" />
              </div>
              <h3 className="text-xl font-bold text-[#055f56]">الفئة المستهدفة</h3>
            </div>
            <div className="flex items-center justify-center bg-[#055f56]/5 rounded-lg p-4">
              <span className="text-4xl font-bold text-[#055f56] mr-2">15-25</span>
              <span className="text-lg">سنة</span>
            </div>
            <p className="mt-3 text-gray-600 text-center">للشباب فـقـط</p>
          </div>

          {/* مدة البرنامج */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#055f56] hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-[#055f56]/10 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-[#055f56]" />
              </div>
              <h3 className="text-xl font-bold text-[#055f56]">مدة البرنامج</h3>
            </div>
            <div className="text-center py-2">
              <div className="inline-flex items-center bg-gradient-to-r from-[#055f56] to-[#f5a623] text-white px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">10</span>
                <span className="mr-2">أسابيع</span>
              </div>
              <p className="mt-3 text-gray-600">شهرين ونصف من التميز</p>
            </div>
          </div>

          {/* مكان الانعقاد */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#f5a623] hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-[#f5a623]/10 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-[#f5a623]" />
              </div>
              <h3 className="text-xl font-bold text-[#055f56]">الـمـكــان</h3>
            </div>
            <div className="text-center">
              <div className="bg-[#055f56]/5 rounded-lg p-4 mb-3">
                <p className="font-bold text-[#055f56]">حضوري فقط</p>
                <p className="text-gray-600 mt-1">لا يوجد أونلاين</p>
              </div>
              <div className="flex items-center justify-center bg-[#f5a623]/10 rounded-lg p-3">
                <MapPin className="h-5 w-5 text-[#f5a623] mr-2" />
                <span className="font-medium">قرية المسلمي</span>
              </div>
            </div>
          </div>
        </div>

        {/* ملاحظة ختامية */}
        <div className="mt-12 text-center bg-white p-6 rounded-xl shadow-sm max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            <span className="font-arabic text-[#055f56] font-bold">ملاحظة:</span> البرنامج يتطلب الالتزام بالحضور طوال المدة
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimeSection;