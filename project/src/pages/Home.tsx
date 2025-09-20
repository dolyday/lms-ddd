import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiUsers, FiPlay, FiArrowLeft, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const bestCourses = [
    {
      id: 1,
      title: 'تطوير المواقع للمبتدئين',
      price: 250,
      originalPrice: 350,
      rating: 4.8,
      students: 1250,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطوير الويب',
      isPopular: true
    },
    {
      id: 2,
      title: 'تصميم واجهات المستخدم',
      price: 200,
      originalPrice: 280,
      rating: 4.9,
      students: 980,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تصميم',
      isPopular: false
    },
    {
      id: 3,
      title: 'برمجة التطبيقات المحمولة',
      price: 300,
      originalPrice: 400,
      rating: 4.7,
      students: 756,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'برمجة التطبيقات',
      isPopular: true
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'مطور ويب',
      content: 'منصة ممتازة ساعدتني في تطوير مهاراتي في البرمجة بشكل كبير. المحتوى عالي الجودة والشرح واضح ومفصل.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'فاطمة علي',
      role: 'مصممة UI/UX',
      content: 'تجربة تعلم رائعة مع دورات متنوعة ومحدثة. المنصة سهلة الاستخدام والدعم الفني ممتاز.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'محمد خالد',
      role: 'مطور تطبيقات',
      content: 'استطعت تعلم تطوير التطبيقات المحمولة من الصفر حتى الاحتراف. أنصح بالمنصة بشدة.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                طور مهاراتك مع أفضل
                <span className="text-yellow-300"> الدورات التعليمية</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                انضم إلى آلاف الطلاب الذين طوروا حياتهم المهنية من خلال دوراتنا المتخصصة في التكنولوجيا والبرمجة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  استكشف الدورات
                  <FiArrowLeft className="mr-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors flex items-center justify-center">
                  <FiPlay className="ml-2 h-5 w-5" />
                  شاهد العرض التوضيحي
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Online Learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FiUsers className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+5000 طالب</p>
                    <p className="text-sm text-gray-500">انضم إليهم اليوم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">أفضل الدورات</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اكتشف أشهر الدورات المختارة بعناية لتطوير مهاراتك المهنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestCourses.map((course) => (
              <div key={course.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {course.isPopular && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      الأكثر شعبية
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {course.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <FiStar className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-gray-700 font-medium">{course.rating}</span>
                      <span className="text-gray-500">({course.students} طالب)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                      <span className="text-lg text-gray-400 line-through">${course.originalPrice}</span>
                    </div>
                    <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                      خصم {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                    </div>
                  </div>
                  
                  <Link
                    to={`/course/${course.id}`}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
                  >
                    شراء الدورة
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold inline-flex items-center"
            >
              عرض جميع الدورات
              <FiArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ماذا يقول طلابنا</h2>
            <p className="text-xl text-gray-600">
              اقرأ تجارب الطلاب الذين حققوا نجاحاً مميزاً معنا
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white p-8 md:p-12 mx-4 rounded-xl shadow-lg text-center">
                      <div className="flex items-center justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FiStar key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full ml-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-50"
              aria-label="الشهادة السابقة"
            >
              <FiChevronRight className="h-6 w-6 text-blue-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-50"
              aria-label="الشهادة التالية"
            >
              <FiChevronLeft className="h-6 w-6 text-blue-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`الانتقال إلى الشهادة ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center"
            >
              ابدأ رحلتك التعليمية
              <FiArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;