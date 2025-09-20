import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنرد عليك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'البريد الإلكتروني',
      details: 'info@learningplatform.com\nsupport@learningplatform.com',
      color: 'blue'
    },
    {
      icon: FiPhone,
      title: 'الهاتف',
      details: '+966 11 123 4567\n+966 50 123 4567',
      color: 'green'
    },
    {
      icon: FiMapPin,
      title: 'العنوان',
      details: 'الرياض، المملكة العربية السعودية\nشارع الملك فهد، الدور الخامس',
      color: 'red'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            نحن هنا للمساعدة! تواصل معنا لأي استفسار أو اقتراح
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const colorClasses = {
                blue: 'bg-blue-500 text-blue-500 bg-blue-50',
                green: 'bg-green-500 text-green-500 bg-green-50',
                red: 'bg-red-500 text-red-500 bg-red-50'
              };
              
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${colorClasses[info.color].split(' ')[0]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    الموضوع *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="استفسار عام">استفسار عام</option>
                    <option value="مشكلة تقنية">مشكلة تقنية</option>
                    <option value="استفسار عن دورة">استفسار عن دورة</option>
                    <option value="طلب شراكة">طلب شراكة</option>
                    <option value="اقتراح">اقتراح</option>
                    <option value="شكوى">شكوى</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <FiSend className="ml-2 h-5 w-5" />
                  إرسال الرسالة
                </button>
              </form>
            </div>
            
            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">موقعنا</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FiMapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>خريطة الموقع</p>
                  <p className="text-sm">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ساعات العمل</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">الأحد - الخميس:</span>
                    <span className="text-gray-900 font-medium">8:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الجمعة:</span>
                    <span className="text-gray-900 font-medium">مغلق</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">السبت:</span>
                    <span className="text-gray-900 font-medium">10:00 ص - 4:00 م</span>
                  </div>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="bg-green-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">وقت الاستجابة</h3>
                <p className="text-gray-600">
                  نسعى للرد على جميع الرسائل خلال 24 ساعة من استلامها. للاستفسارات العاجلة، 
                  يرجى التواصل معنا عبر الهاتف.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">هل تبحث عن إجابات سريعة؟</h2>
          <p className="text-lg text-gray-600 mb-8">
            تحقق من صفحة الأسئلة الشائعة قبل التواصل معنا
          </p>
          <a
            href="/faq"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            الأسئلة الشائعة
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;