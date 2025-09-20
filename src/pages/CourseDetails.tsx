import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiStar, FiUsers, FiClock, FiPlay, FiCheck, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{code: string, discount: number} | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [couponError, setCouponError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [id]);

  // Sample course data - in real app, this would come from API
  const course = {
    id: 1,
    title: 'HTML للمبتدئين',
    category: 'تطوير الويب',
    level: 'مبتدئ',
    students: 0,
    language: 'العربية',
    rating: 0,
    price: 50,
    originalPrice: 100,
    instructor: {
      name: 'د. محمد أحمد',
      bio: 'مطور ويب متمرس مع أكثر من 10 سنوات من الخبرة في تطوير المواقع والتطبيقات.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    overview: 'هذه الدورة المناسبة للمبتدئين هي نقطة البداية المثالية لأي شخص يريد تعلم كيفية بناء المواقع. ستبدأ من الصفر المطلق - لا حاجة لخبرة برمجية مسبقة - وستتعلم تدريجياً كيفية هيكلة صفحة ويب باستخدام HTML، اللغة التي تشغل كل موقع على الإنترنت.',
    whatYouWillLearn: [
      'فهم كيفية عمل HTML ودوره في تطوير الويب',
      'إنشاء وهيكلة صفحة ويب HTML أساسية من الصفر',
      'استخدام عناصر HTML الأساسية للعناوين والنصوص والروابط والصور والمزيد'
    ],
    requirements: [
      'لا حاجة لخبرة برمجية مسبقة - مناسب للمبتدئين المطلقين',
      'جهاز كمبيوتر محمول أو مكتبي مع إمكانية الوصول للإنترنت',
      'متصفح ويب حديث (مثل Chrome، Firefox)',
      'محرر نصوص أساسي (مثل VS Code، Sublime Text، Notepad++)'
    ],
    curriculum: [
      {
        id: 1,
        title: 'مقدمة في HTML',
        lectures: 3,
        duration: '1 ساعة 45 دقيقة',
        lessons: [
          { title: 'ما هو HTML؟', duration: '45 دقيقة', isPreview: true },
          { title: 'كيف يعمل الويب (المتصفحات، الخوادم، الملفات)', duration: '15 دقيقة', isPreview: true },
          { title: 'إعداد بيئة البرمجة', duration: '45 دقيقة', isPreview: false }
        ]
      },
      {
        id: 2,
        title: 'هيكل HTML والعناصر الأساسية',
        lectures: 3,
        duration: '1 ساعة 20 دقيقة',
        lessons: [
          { title: 'هيكل مستند HTML', duration: '30 دقيقة', isPreview: false },
          { title: 'العناصر والوسوم', duration: '25 دقيقة', isPreview: false },
          { title: 'العناصر الأساسية', duration: '25 دقيقة', isPreview: false }
        ]
      }
    ],
    includes: [
      'وصول مدى الحياة',
      'الوصول عبر الهاتف المحمول والتلفاز',
      'شهادة إتمام'
    ],
    totalDuration: '3 ساعات 5 دقائق',
    totalLectures: 6,
    totalChapters: 2
  };

  const breadcrumb = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الدورات', path: '/courses' },
    { name: course.title, path: '#' }
  ];

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  // Sample coupon codes
  const validCoupons = [
    { code: 'SAVE20', discount: 20 },
    { code: 'STUDENT15', discount: 15 },
    { code: 'WELCOME10', discount: 10 }
  ];

  const applyCoupon = () => {
    const coupon = validCoupons.find(c => c.code.toLowerCase() === couponCode.toLowerCase());
    if (coupon) {
      setAppliedCoupon(coupon);
      setCouponError('');
    } else {
      setCouponError('كود الخصم غير صحيح');
      setAppliedCoupon(null);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  const calculatePrices = () => {
    const subtotal = course.price;
    const originalDiscount = course.originalPrice - course.price;
    const couponDiscount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0;
    const totalDiscount = originalDiscount + couponDiscount;
    const total = subtotal - couponDiscount;
    
    return { subtotal, originalDiscount, couponDiscount, totalDiscount, total };
  };

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert('يرجى اختيار طريقة الدفع');
      return;
    }
    
    const prices = calculatePrices();
    console.log('Payment processing:', {
      course: course.title,
      paymentMethod: selectedPaymentMethod,
      total: prices.total,
      coupon: appliedCoupon
    });
    
    // Redirect to thank you page with purchase details
    const params = new URLSearchParams({
      orderId: '#ORD-' + Date.now(),
      courseId: course.id.toString(),
      paymentMethod: selectedPaymentMethod,
      total: prices.total.toFixed(2),
      ...(appliedCoupon && { coupon: appliedCoupon.code })
    });
    
    navigate(`/thank-you?${params.toString()}`);
  };

  // Loading component
  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-8 rounded mb-4 w-3/4"></div>
      <div className="bg-gray-300 h-4 rounded mb-2 w-1/2"></div>
      <div className="bg-gray-300 h-4 rounded mb-6 w-1/3"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div className="bg-gray-300 h-4 rounded mb-2 w-16"></div>
            <div className="bg-gray-300 h-4 rounded w-20"></div>
          </div>
        ))}
      </div>
      <div className="bg-gray-300 h-32 rounded mb-6"></div>
      <div className="bg-gray-300 h-24 rounded mb-6"></div>
      <div className="bg-gray-300 h-40 rounded"></div>
    </div>
  );

  const SidebarSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
      <div className="bg-gray-300 h-12 rounded mb-4"></div>
      <div className="bg-gray-300 h-8 rounded mb-2"></div>
      <div className="bg-gray-300 h-8 rounded mb-2"></div>
      <div className="bg-gray-300 h-8 rounded mb-4"></div>
      <div className="bg-gray-300 h-20 rounded"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 space-x-reverse">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="ml-2 text-gray-400">/</span>}
                  <Link
                    to={item.path}
                    className={`text-sm ${
                      index === breadcrumb.length - 1
                        ? 'text-gray-500 cursor-default'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <>
                {/* Course Header */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                  
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                    <div className="flex items-center">
                      <FiStar className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="mr-1 text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">الفئة</h3>
                      <p className="text-sm text-gray-900">{course.category}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">المستوى</h3>
                      <p className="text-sm text-gray-900">{course.level}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">الطلاب</h3>
                      <p className="text-sm text-gray-900">{course.students}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">اللغة</h3>
                      <p className="text-sm text-gray-900">{course.language}</p>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">نظرة عامة</h2>
                  <p className="text-gray-600 leading-relaxed">{course.overview}</p>
                </div>

                {/* What You Will Learn */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ماذا ستتعلم</h2>
                  <div className="space-y-3">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 space-x-reverse">
                        <div className="bg-blue-100 p-1 rounded">
                          <FiCheck className="h-4 w-4 text-blue-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">المتطلبات</h2>
                  <div className="space-y-3">
                    {course.requirements.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 space-x-reverse">
                        <div className="bg-gray-100 p-1 rounded">
                          <FiCheck className="h-4 w-4 text-gray-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Structure */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">هيكل الدورة</h2>
                  <p className="text-gray-600 mb-6">
                    {course.totalChapters} فصول · {course.totalLectures} محاضرات · {course.totalDuration}
                  </p>
                  
                  <div className="space-y-4">
                    {course.curriculum.map((module) => (
                      <div key={module.id} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleModule(module.id)}
                          className="w-full flex items-center justify-between p-4 text-right hover:bg-gray-50"
                        >
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              الفصل {module.id}: {module.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {module.lectures} محاضرات · {module.duration}
                            </p>
                          </div>
                          {expandedModule === module.id ? (
                            <FiChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <FiChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                        
                        {expandedModule === module.id && (
                          <div className="border-t border-gray-200 bg-blue-50">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                  <FiPlay className="h-4 w-4 text-gray-400" />
                                  <span className="text-gray-700">{lesson.title}</span>
                                  {lesson.isPreview && (
                                    <button 
                                      onClick={() => setShowVideoModal(true)}
                                      className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
                                    >
                                      معاينة
                                    </button>
                                  )}
                                </div>
                                <span className="text-gray-500 text-sm">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">التقييمات</h2>
                  <p className="text-gray-600">ما يقوله طلابنا عن هذه الدورة</p>
                  <div className="text-center py-12">
                    <p className="text-gray-500">لا توجد تقييمات حتى الآن</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {isLoading ? (
                <SidebarSkeleton />
              ) : (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => setShowVideoModal(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all"
                    >
                      <div className="bg-white rounded-full p-4">
                        <FiPlay className="h-8 w-8 text-blue-600" />
                      </div>
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <span className="text-3xl font-bold text-blue-600">${course.price}</span>
                        <span className="text-lg text-gray-400 line-through">${course.originalPrice}</span>
                      </div>
                      <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        خصم 50%
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setShowPaymentForm(!showPaymentForm)}
                      className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold mb-4"
                    >
                      {showPaymentForm ? 'إخفاء نموذج الدفع' : 'التسجيل الآن'}
                    </button>

                    {/* Payment Form */}
                    {showPaymentForm && (
                      <div className="border-t border-gray-200 pt-6 mt-6">
                        {/* Price Breakdown */}
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">السعر الفرعي</span>
                            <span className="font-medium">${calculatePrices().subtotal}</span>
                          </div>
                          
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">خصم الدورة</span>
                            <span className="text-green-600">-${calculatePrices().originalDiscount}</span>
                          </div>
                          
                          {appliedCoupon && (
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-600">خصم الكوبون ({appliedCoupon.discount}%)</span>
                              <span className="text-green-600">-${calculatePrices().couponDiscount.toFixed(2)}</span>
                            </div>
                          )}
                          
                          <div className="border-t border-gray-200 pt-2 mt-2">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-semibold">الإجمالي</span>
                              <span className="text-lg font-bold text-blue-600">${calculatePrices().total.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Coupon Code */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            كود الخصم
                          </label>
                          {appliedCoupon ? (
                            <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <FiCheck className="h-5 w-5 text-green-600" />
                                <span className="text-green-700 font-medium">{appliedCoupon.code}</span>
                                <span className="text-green-600">({appliedCoupon.discount}% خصم)</span>
                              </div>
                              <button
                                onClick={removeCoupon}
                                className="text-red-600 hover:text-red-700 text-sm"
                              >
                                إزالة
                              </button>
                            </div>
                          ) : (
                            <div className="flex space-x-2 space-x-reverse">
                              <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="أدخل كود الخصم"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                              <button
                                onClick={applyCoupon}
                                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                              >
                                تطبيق
                              </button>
                            </div>
                          )}
                          {couponError && (
                            <p className="text-red-600 text-sm mt-1">{couponError}</p>
                          )}
                        </div>

                        {/* Payment Methods */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            طريقة الدفع
                          </label>
                          <div className="space-y-3">
                            <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="cash"
                                checked={selectedPaymentMethod === 'cash'}
                                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="mr-3 text-gray-700">الدفع عند الاستلام</span>
                            </label>
                            
                            <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="gold"
                                checked={selectedPaymentMethod === 'gold'}
                                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="mr-3 text-gray-700">البطاقة الذهبية</span>
                            </label>
                            
                            <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="cib"
                                checked={selectedPaymentMethod === 'cib'}
                                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="mr-3 text-gray-700">بطاقة CIB</span>
                            </label>
                          </div>
                        </div>

                        {/* Payment Button */}
                        <button
                          onClick={handlePayment}
                          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                          اشترك الآن
                        </button>
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">تشمل هذه الدورة</h3>
                      {course.includes.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 space-x-reverse">
                          <FiCheck className="h-4 w-4 text-green-600" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">ما هو HTML؟</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <FiPlay className="h-16 w-16 mx-auto mb-4" />
                  <p>معاينة الفيديو</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;