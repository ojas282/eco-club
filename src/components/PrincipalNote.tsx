import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrincipalNote = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                alt="Principal Sudha Gupta"
                className="rounded-lg shadow-lg z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-200 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              {isEnglish ? "Principal's Message" : "प्राचार्य का संदेश"}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {isEnglish 
                  ? "Under the visionary leadership of our Hon'ble Prime Minister Shri Narendra Modi ji, the Eco Club initiative has become a cornerstone of environmental education in our school. As the Principal of Prathmik Vidhyalay Narauna Kakori, I am proud to witness our students and staff embracing this green revolution."
                  : "माननीय प्रधानमंत्री श्री नरेंद्र मोदी जी के दूरदर्शी नेतृत्व में, इको क्लब पहल हमारे स्कूल में पर्यावरण शिक्षा का आधार बन गई है। प्राथमिक विद्यालय नरौना काकोरी की प्राचार्य के रूप में, मुझे गर्व है कि हमारे छात्र और स्टाफ इस हरित क्रांति को अपना रहे हैं।"}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {isEnglish
                  ? "Our school has planted over 100 trees and plants, each carefully selected to create a diverse ecosystem. Through our QR code initiative, we're making environmental education interactive and accessible. Our students not only learn about nature but become its guardians."
                  : "हमारे स्कूल ने 100 से अधिक पेड़ और पौधे लगाए हैं, जो एक विविध पारिस्थितिकी तंत्र बनाने के लिए सावधानीपूर्वक चुने गए हैं। हमारी क्यूआर कोड पहल के माध्यम से, हम पर्यावरण शिक्षा को इंटरैक्टिव और सुलभ बना रहे हैं।"}
              </p>
              <div className="mt-6">
                <p className="font-semibold text-green-800">
                  {isEnglish ? "Mrs. Sudha Gupta" : "श्रीमती सुधा गुप्ता"}
                </p>
                <p className="text-gray-600">
                  {isEnglish ? "Principal" : "प्राचार्य"}
                </p>
                <p className="text-gray-600">
                  {isEnglish 
                    ? "Prathmik Vidhyalay Narauna Kakori" 
                    : "प्राथमिक विद्यालय नरौना काकोरी"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalNote;