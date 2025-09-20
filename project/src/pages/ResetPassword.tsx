import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowLeft, FiBookOpen, FiCheck } from 'react-icons/fi';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate email
    if (!email) {
      setError('البريد الإلكتروني مطلوب');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('البريد الإلكتروني غير صحيح');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, this would call the password reset API
      console.log('Password reset requested for:', email);
      
      setIsSubmitted(true);
    } catch (err) {
      setError('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = () => {
    setIsLoading(true);
    
    // Simulate resend
    setTimeout(() => {
      setIsLoading(false);
      alert('تم إعادة إرسال البريد الإلكتروني');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-2 space-x-reverse mb-6">
              <FiBookOpen className="h-10 w-10 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">منصة التعلم</span>
            </Link>
          </div>

          {/* Success Message */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheck className="h-8 w-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">تم إرسال البريد الإلكتروني</h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              تم إرسال رابط إعادة تعيين كلمة المرور إلى عنوان البريد الإلكتروني:
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="font-medium text-blue-900">{email}</p>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600">
              <p>يرجى التحقق من صندوق الوارد الخاص بك واتباع التعليمات الموجودة في البريد الإلكتروني.</p>
              <p>إذا لم تجد البريد الإلكتروني، تحقق من مجلد الرسائل غير المرغوب فيها.</p>
            </div>

            <div className="mt-8 space-y-4">
              <button
                onClick={handleResendEmail}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors font-semibold"
              >
                {isLoading ? 'جاري الإرسال...' : 'إعادة إرسال البريد الإلكتروني'}
              </button>
              
              <Link
                to="/login"
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-center block"
              >
                العودة لتسجيل الدخول
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">هل تحتاج مساعدة؟</h3>
            <p className="text-gray-600 mb-4">
              إذا واجهت أي مشاكل، يرجى التواصل مع فريق الدعم
            </p>
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 space-x-reverse mb-6">
            <FiBookOpen className="h-10 w-10 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">منصة التعلم</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">إعادة تعيين كلمة المرور</h2>
          <p className="text-gray-600">أدخل بريدك الإلكتروني لإرسال رابط إعادة التعيين</p>
        </div>

        {/* Reset Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    error ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="أدخل بريدك الإلكتروني"
                  disabled={isLoading}
                />
              </div>
              {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-semibold"
            >
              {isLoading ? 'جاري الإرسال...' : 'إرسال رابط إعادة التعيين'}
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <FiArrowLeft className="ml-2 h-4 w-4" />
              العودة لتسجيل الدخول
            </Link>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">كيفية إعادة تعيين كلمة المرور</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start space-x-3 space-x-reverse">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                1
              </div>
              <p>أدخل عنوان البريد الإلكتروني المرتبط بحسابك</p>
            </div>
            <div className="flex items-start space-x-3 space-x-reverse">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                2
              </div>
              <p>تحقق من صندوق الوارد الخاص بك للحصول على رابط إعادة التعيين</p>
            </div>
            <div className="flex items-start space-x-3 space-x-reverse">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                3
              </div>
              <p>انقر على الرابط واتبع التعليمات لإنشاء كلمة مرور جديدة</p>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="text-yellow-600 mt-1">⚠️</div>
            <div>
              <h4 className="text-sm font-semibold text-yellow-800 mb-1">ملاحظة أمنية</h4>
              <p className="text-sm text-yellow-700">
                رابط إعادة تعيين كلمة المرور صالح لمدة 24 ساعة فقط لأسباب أمنية. 
                إذا انتهت صلاحية الرابط، يمكنك طلب رابط جديد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;