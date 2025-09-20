import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiPrint, FiMail, FiDownload, FiArrowLeft, FiAward, FiCalendar, FiUser, FiBookOpen } from 'react-icons/fi';

interface Certificate {
  id: string;
  courseId: string;
  courseName: string;
  studentName: string;
  instructorName: string;
  completionDate: string;
  issueDate: string;
  certificateNumber: string;
  grade: string;
  duration: string;
  isAvailable: boolean;
}

const CourseCertificate = () => {
  const { courseId } = useParams();
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [emailSent, setEmailSent] = useState(false);

  // Sample certificate data - in real app, this would come from API
  const sampleCertificates: Record<string, Certificate> = {
    '1': {
      id: 'CERT-001',
      courseId: '1',
      courseName: 'تطوير المواقع للمبتدئين',
      studentName: 'أحمد محمد علي',
      instructorName: 'د. محمد أحمد',
      completionDate: '2024-01-15',
      issueDate: '2024-01-16',
      certificateNumber: 'LP-2024-001-HTML',
      grade: 'ممتاز',
      duration: '12 ساعة',
      isAvailable: true
    },
    '2': {
      id: 'CERT-002',
      courseId: '2',
      courseName: 'تصميم واجهات المستخدم',
      studentName: 'أحمد محمد علي',
      instructorName: 'سارة محمود',
      completionDate: '2024-02-20',
      issueDate: '2024-02-21',
      certificateNumber: 'LP-2024-002-UIUX',
      grade: 'جيد جداً',
      duration: '8 ساعات',
      isAvailable: true
    },
    '3': {
      id: 'CERT-003',
      courseId: '3',
      courseName: 'برمجة التطبيقات المحمولة',
      studentName: 'أحمد محمد علي',
      instructorName: 'أحمد علي',
      completionDate: '',
      issueDate: '',
      certificateNumber: '',
      grade: '',
      duration: '15 ساعة',
      isAvailable: false
    }
  };

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      const cert = sampleCertificates[courseId || '1'];
      setCertificate(cert || null);
      setIsLoading(false);
    }, 1000);
  }, [courseId]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In real app, this would generate and download a PDF certificate
    console.log('Downloading certificate:', certificate?.certificateNumber);
    alert('سيتم تحميل الشهادة بصيغة PDF قريباً');
  };

  const handleEmailSend = () => {
    // In real app, this would send certificate via email
    console.log('Sending certificate via email:', certificate?.certificateNumber);
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل الشهادة...</p>
        </div>
      </div>
    );
  }

  if (!certificate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiAward className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">الشهادة غير موجودة</h1>
          <p className="text-gray-600 mb-6">لم يتم العثور على شهادة لهذه الدورة</p>
          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center"
          >
            <FiArrowLeft className="ml-2 h-5 w-5" />
            العودة للوحة التحكم
          </Link>
        </div>
      </div>
    );
  }

  if (!certificate.isAvailable) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/dashboard"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center mb-4"
            >
              <FiArrowLeft className="ml-2 h-4 w-4" />
              العودة للوحة التحكم
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">شهادة الدورة</h1>
          </div>

          {/* Certificate Not Available */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiAward className="h-10 w-10 text-yellow-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">الشهادة غير متاحة بعد</h2>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{certificate.courseName}</h3>
              <p className="text-gray-600">المدة: {certificate.duration}</p>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              لم تكمل هذه الدورة بعد. يجب إكمال جميع الدروس والواجبات للحصول على الشهادة.
            </p>

            <div className="space-y-4">
              <Link
                to={`/course-preview/${certificate.courseId}`}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
              >
                <FiBookOpen className="ml-2 h-5 w-5" />
                متابعة الدورة
              </Link>
              
              <Link
                to="/dashboard"
                className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-semibold inline-flex items-center justify-center"
              >
                العودة للوحة التحكم
              </Link>
            </div>
          </div>

          {/* Progress Information */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">متطلبات الحصول على الشهادة</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600">1</span>
                </div>
                <span className="text-gray-700">إكمال جميع دروس الدورة</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600">2</span>
                </div>
                <span className="text-gray-700">اجتياز جميع الواجبات والاختبارات</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600">3</span>
                </div>
                <span className="text-gray-700">الحصول على درجة 70% على الأقل</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 print:hidden">
          <Link
            to="/dashboard"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center mb-4"
          >
            <FiArrowLeft className="ml-2 h-4 w-4" />
            العودة للوحة التحكم
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">شهادة الإنجاز</h1>
              <p className="text-gray-600">رقم الشهادة: {certificate.certificateNumber}</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3 space-x-reverse">
              <button
                onClick={handlePrint}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-semibold flex items-center space-x-2 space-x-reverse"
              >
                <FiPrint className="h-4 w-4" />
                <span>طباعة</span>
              </button>
              
              <button
                onClick={handleDownload}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center space-x-2 space-x-reverse"
              >
                <FiDownload className="h-4 w-4" />
                <span>تحميل PDF</span>
              </button>
              
              <button
                onClick={handleEmailSend}
                disabled={emailSent}
                className={`px-4 py-2 rounded-lg transition-colors font-semibold flex items-center space-x-2 space-x-reverse ${
                  emailSent
                    ? 'bg-green-600 text-white'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                <FiMail className="h-4 w-4" />
                <span>{emailSent ? 'تم الإرسال' : 'إرسال بالبريد'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Certificate */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none">
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 text-center">
            <div className="mb-4">
              <FiAward className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h2 className="text-3xl font-bold mb-2">شهادة إنجاز</h2>
              <p className="text-blue-200">Certificate of Completion</p>
            </div>
          </div>

          {/* Certificate Body */}
          <div className="p-12 text-center">
            <div className="mb-8">
              <p className="text-lg text-gray-600 mb-4">هذا يشهد أن</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
                {certificate.studentName}
              </h3>
              <p className="text-lg text-gray-600 mb-6">قد أكمل بنجاح دورة</p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h4 className="text-2xl font-bold text-blue-900 mb-2">
                  {certificate.courseName}
                </h4>
                <div className="flex items-center justify-center space-x-8 space-x-reverse text-gray-600">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <FiUser className="h-4 w-4" />
                    <span>المدرب: {certificate.instructorName}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <FiCalendar className="h-4 w-4" />
                    <span>المدة: {certificate.duration}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">تاريخ الإكمال</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(certificate.completionDate).toLocaleDateString('ar-SA')}
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">التقدير</p>
                  <p className="font-semibold text-gray-900">{certificate.grade}</p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">تاريخ الإصدار</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(certificate.issueDate).toLocaleDateString('ar-SA')}
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate Footer */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="w-32 border-b border-gray-400 mb-2"></div>
                  <p className="text-sm text-gray-600">منصة التعلم</p>
                  <p className="text-xs text-gray-500">Learning Platform</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    <p className="text-xs font-semibold">رقم الشهادة</p>
                    <p className="text-sm">{certificate.certificateNumber}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-32 border-b border-gray-400 mb-2"></div>
                  <p className="text-sm text-gray-600">{certificate.instructorName}</p>
                  <p className="text-xs text-gray-500">المدرب المعتمد</p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Section */}
          <div className="bg-gray-50 p-6 text-center border-t print:hidden">
            <p className="text-sm text-gray-600 mb-2">
              يمكن التحقق من صحة هذه الشهادة عبر الرابط التالي:
            </p>
            <p className="text-blue-600 font-mono text-sm">
              https://learningplatform.com/verify/{certificate.certificateNumber}
            </p>
          </div>
        </div>

        {/* Certificate Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8 print:hidden">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">معلومات الشهادة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">تفاصيل الدورة</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• إكمال جميع الدروس والوحدات</li>
                <li>• اجتياز جميع الاختبارات والواجبات</li>
                <li>• الحصول على تقدير {certificate.grade}</li>
                <li>• مدة الدورة: {certificate.duration}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">صلاحية الشهادة</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• شهادة معتمدة من منصة التعلم</li>
                <li>• صالحة مدى الحياة</li>
                <li>• قابلة للتحقق إلكترونياً</li>
                <li>• معترف بها في الصناعة</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Share Options */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8 print:hidden">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">مشاركة الشهادة</h3>
          <p className="text-gray-600 mb-4">شارك إنجازك مع الآخرين على منصات التواصل المهني</p>
          <div className="flex space-x-4 space-x-reverse">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              LinkedIn
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
              Twitter
            </button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;