import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiCheck, FiDownload, FiMail, FiCalendar, FiCreditCard, FiBookOpen, FiPrinter } from 'react-icons/fi';

const ThankYou = () => {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);

    // Get purchase details from URL parameters or localStorage
    const orderId = searchParams.get('orderId') || '#ORD-' + Date.now();
    const courseId = searchParams.get('courseId') || '1';
    const paymentMethod = searchParams.get('paymentMethod') || 'بطاقة ائتمانية';
    const total = searchParams.get('total') || '250';
    const coupon = searchParams.get('coupon');

    // Sample purchase data - in real app, this would come from API
    const purchaseData = {
        orderId,
        date: new Date().toLocaleDateString('ar-SA'),
        time: new Date().toLocaleTimeString('ar-SA'),
        course: {
            id: courseId,
            title: 'تطوير المواقع للمبتدئين',
            instructor: 'د. محمد أحمد',
            image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
            duration: '12 ساعة',
            lessons: 24
        },
        customer: {
            name: 'أحمد محمد',
            email: 'ahmed@example.com',
            phone: '+966 50 123 4567'
        },
        payment: {
            subtotal: 350,
            discount: 100,
            couponDiscount: coupon ? 25 : 0,
            total: parseFloat(total),
            method: paymentMethod,
            transactionId: 'TXN-' + Date.now()
        }
    };

    useEffect(() => {
        // Simulate loading effect
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleDownloadInvoice = () => {
        // In real app, this would generate and download a PDF invoice
        console.log('Downloading invoice for order:', orderId);
        alert('سيتم تحميل الفاتورة قريباً');
    };

    const handlePrintInvoice = () => {
        window.print();
    };

    const handleEmailInvoice = () => {
        // In real app, this would send invoice via email
        console.log('Sending invoice via email to:', purchaseData.customer.email);
        alert('تم إرسال الفاتورة إلى بريدك الإلكتروني');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">جاري تحضير فاتورتك...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Success Header */}
                <div className="text-center mb-8">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiCheck className="h-10 w-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">شكراً لك!</h1>
                    <p className="text-lg text-gray-600">تم إتمام عملية الشراء بنجاح</p>
                </div>

                {/* Purchase Summary Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                    <div className="bg-blue-600 text-white p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">فاتورة الشراء</h2>
                                <p className="text-blue-100">رقم الطلب: {purchaseData.orderId}</p>
                            </div>
                            <div className="text-left">
                                <p className="text-blue-100">التاريخ: {purchaseData.date}</p>
                                <p className="text-blue-100">الوقت: {purchaseData.time}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Course Details */}
                        <div className="border-b border-gray-200 pb-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">تفاصيل الدورة</h3>
                            <div className="flex items-center space-x-4 space-x-reverse">
                                <img
                                    src={purchaseData.course.image}
                                    alt={purchaseData.course.title}
                                    className="w-20 h-20 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                        {purchaseData.course.title}
                                    </h4>
                                    <p className="text-gray-600 mb-1">المدرب: {purchaseData.course.instructor}</p>
                                    <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                                        <span>{purchaseData.course.duration}</span>
                                        <span>•</span>
                                        <span>{purchaseData.course.lessons} درس</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Customer Information */}
                        <div className="border-b border-gray-200 pb-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">معلومات العميل</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">الاسم</p>
                                    <p className="font-medium text-gray-900">{purchaseData.customer.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                                    <p className="font-medium text-gray-900">{purchaseData.customer.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">رقم الهاتف</p>
                                    <p className="font-medium text-gray-900">{purchaseData.customer.phone}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">طريقة الدفع</p>
                                    <p className="font-medium text-gray-900">{purchaseData.payment.method}</p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Breakdown */}
                        <div className="border-b border-gray-200 pb-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">تفاصيل الدفع</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">السعر الأصلي</span>
                                    <span className="font-medium">${purchaseData.payment.subtotal}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">خصم الدورة</span>
                                    <span className="text-green-600">-${purchaseData.payment.discount}</span>
                                </div>

                                {purchaseData.payment.couponDiscount > 0 && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">خصم الكوبون</span>
                                        <span className="text-green-600">-${purchaseData.payment.couponDiscount}</span>
                                    </div>
                                )}

                                <div className="border-t border-gray-200 pt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold text-gray-900">المبلغ الإجمالي</span>
                                        <span className="text-lg font-bold text-blue-600">${purchaseData.payment.total}</span>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div className="flex items-center space-x-2 space-x-reverse">
                                        <FiCreditCard className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm text-gray-600">
                                            رقم المعاملة: {purchaseData.payment.transactionId}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleDownloadInvoice}
                                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2 space-x-reverse"
                            >
                                <FiDownload className="h-5 w-5" />
                                <span>تحميل الفاتورة</span>
                            </button>

                            <button
                                onClick={handlePrintInvoice}
                                className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-semibold flex items-center justify-center space-x-2 space-x-reverse"
                            >
                                <FiPrinter className="h-5 w-5" />
                                <span>طباعة الفاتورة</span>
                            </button>

                            <button
                                onClick={handleEmailInvoice}
                                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2 space-x-reverse"
                            >
                                <FiMail className="h-5 w-5" />
                                <span>إرسال بالبريد</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">الخطوات التالية</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <FiBookOpen className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">ابدأ التعلم</h4>
                            <p className="text-gray-600 text-sm">يمكنك الآن الوصول إلى جميع دروس الدورة</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <FiCalendar className="h-6 w-6 text-green-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">جدولة التعلم</h4>
                            <p className="text-gray-600 text-sm">ضع خطة زمنية لإكمال الدورة</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <FiCheck className="h-6 w-6 text-purple-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">احصل على الشهادة</h4>
                            <p className="text-gray-600 text-sm">أكمل الدورة واحصل على شهادة معتمدة</p>
                        </div>
                    </div>
                </div>

                {/* Action Links */}
                <div className="text-center space-y-4">
                    <Link
                        to={`/course-preview/${purchaseData.course.id}`}
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                        ابدأ الدورة الآن
                    </Link>

                    <div className="flex justify-center space-x-6 space-x-reverse">
                        <Link
                            to="/dashboard"
                            className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                            لوحة التحكم
                        </Link>
                        <Link
                            to="/courses"
                            className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                            تصفح المزيد من الدورات
                        </Link>
                        <Link
                            to="/contact"
                            className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                            تواصل معنا
                        </Link>
                    </div>
                </div>

                {/* Support Information */}
                <div className="bg-blue-50 rounded-xl p-6 mt-8">
                    <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">هل تحتاج مساعدة؟</h4>
                        <p className="text-gray-600 mb-4">
                            فريق الدعم متاح 24/7 لمساعدتك في أي استفسار
                        </p>
                        <div className="flex justify-center space-x-4 space-x-reverse">
                            <Link
                                to="/contact"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                تواصل معنا
                            </Link>
                            <Link
                                to="/faq"
                                className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                الأسئلة الشائعة
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;