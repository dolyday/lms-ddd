import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft, FiBookOpen } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-2 space-x-reverse mb-8">
          <FiBookOpen className="h-12 w-12 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">منصة التعلم</span>
        </Link>

        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <div className="w-32 h-32 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="text-6xl">🔍</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">الصفحة غير موجودة</h1>
          <p className="text-lg text-gray-600 mb-2">
            عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها
          </p>
          <p className="text-gray-500">
            قد تكون الصفحة قد تم نقلها أو حذفها أو أن الرابط غير صحيح
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
          >
            <FiHome className="ml-2 h-5 w-5" />
            العودة للرئيسية
          </Link>
          
          <Link
            to="/courses"
            className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors font-semibold inline-flex items-center justify-center"
          >
            <FiArrowLeft className="ml-2 h-5 w-5" />
            تصفح الدورات
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">هل تحتاج مساعدة؟</h3>
          <p className="text-gray-600 mb-4">
            إذا كنت تعتقد أن هذا خطأ، يرجى التواصل معنا
          </p>
          <div className="space-y-2">
            <Link
              to="/contact"
              className="block text-blue-600 hover:text-blue-700 font-medium"
            >
              تواصل معنا
            </Link>
            <Link
              to="/faq"
              className="block text-blue-600 hover:text-blue-700 font-medium"
            >
              الأسئلة الشائعة
            </Link>
          </div>
        </div>

        {/* Search Suggestions */}
        <div className="mt-8">
          <h4 className="text-md font-medium text-gray-900 mb-3">صفحات مقترحة:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link to="/about" className="text-blue-600 hover:text-blue-700">
              من نحن
            </Link>
            <Link to="/courses" className="text-blue-600 hover:text-blue-700">
              الدورات
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-700">
              تواصل معنا
            </Link>
            <Link to="/faq" className="text-blue-600 hover:text-blue-700">
              الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;