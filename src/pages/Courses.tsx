import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiUsers, FiFilter, FiSearch, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const Courses = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [selectedPriceType, setPriceType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const coursesPerPage = 6;

  const categories = [
    { id: 'all', name: 'جميع الفئات' },
    { id: 'web-dev', name: 'تطوير الويب' },
    { id: 'mobile-dev', name: 'تطوير التطبيقات' },
    { id: 'design', name: 'التصميم' },
    { id: 'data-science', name: 'علم البيانات' },
    { id: 'marketing', name: 'التسويق الرقمي' }
  ];

  const courses = [
    {
      id: 1,
      title: 'تطوير المواقع للمبتدئين',
      price: 250,
      originalPrice: 350,
      rating: 4.8,
      students: 1250,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web-dev',
      categoryName: 'تطوير الويب',
      instructor: 'د. محمد أحمد',
      duration: '12 ساعة',
      isPaid: true,
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
      category: 'design',
      categoryName: 'التصميم',
      instructor: 'سارة محمود',
      duration: '8 ساعات',
      isPaid: true,
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
      category: 'mobile-dev',
      categoryName: 'تطوير التطبيقات',
      instructor: 'أحمد علي',
      duration: '15 ساعة',
      isPaid: true,
      isPopular: true
    },
    {
      id: 4,
      title: 'مقدمة في HTML و CSS',
      price: 0,
      originalPrice: 0,
      rating: 4.5,
      students: 2340,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web-dev',
      categoryName: 'تطوير الويب',
      instructor: 'فاطمة خالد',
      duration: '6 ساعات',
      isPaid: false,
      isPopular: false
    },
    {
      id: 5,
      title: 'علم البيانات والذكاء الاصطناعي',
      price: 450,
      originalPrice: 600,
      rating: 4.8,
      students: 543,
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'data-science',
      categoryName: 'علم البيانات',
      instructor: 'د. يوسف محمد',
      duration: '20 ساعة',
      isPaid: true,
      isPopular: true
    },
    {
      id: 6,
      title: 'التسويق الرقمي المتقدم',
      price: 180,
      originalPrice: 220,
      rating: 4.6,
      students: 890,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'marketing',
      categoryName: 'التسويق الرقمي',
      instructor: 'نور الدين',
      duration: '10 ساعات',
      isPaid: true,
      isPopular: false
    }
  ];

  // Simulate loading effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle filter changes with loading
  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true);
    setCurrentPage(1);
    
    if (categoryId === 'all') {
      setSelectedCategories(['all']);
    } else {
      setSelectedCategories(prev => {
        const newCategories = prev.filter(cat => cat !== 'all');
        if (newCategories.includes(categoryId)) {
          const filtered = newCategories.filter(cat => cat !== categoryId);
          return filtered.length === 0 ? ['all'] : filtered;
        } else {
          return [...newCategories, categoryId];
        }
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const handlePriceTypeChange = (value: string) => {
    setIsLoading(true);
    setCurrentPage(1);
      setPriceType(value);

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  // Handle search with loading
  const handleSearch = (term: string) => {
    setIsLoading(true);
    setCurrentPage(1);
    setSearchTerm(term);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategories.includes('all') || selectedCategories.includes(course.category);
    const matchesPriceType = selectedPriceType === 'all' || 
      (selectedPriceType === 'free' && !course.isPaid) ||
      (selectedPriceType === 'paid' && course.isPaid);
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesPriceType && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  const CourseSkeleton = () => (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg animate-pulse">
      <div className="bg-gray-300 h-48 w-full"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-300 rounded mb-3"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
        <div className="flex justify-between items-center mb-4">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">جميع الدورات</h1>
              <p className="text-lg text-gray-600">اكتشف مجموعة واسعة من الدورات التعليمية المتخصصة</p>
            </div>
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowSidebar(true)}
              className="lg:hidden bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 space-x-reverse"
            >
              <FiFilter className="h-5 w-5" />
              <span>تصفية</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${showSidebar ? 'block' : 'hidden lg:block'}`}>
            {/* Mobile Sidebar Overlay */}
            {showSidebar && (
              <div 
                className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setShowSidebar(false)}
              />
            )}
            
            <div className={`bg-white p-6 rounded-xl shadow-lg lg:sticky lg:top-24 ${
              showSidebar 
                ? 'fixed top-0 right-0 h-full w-80 z-50 overflow-y-auto lg:relative lg:h-auto lg:w-auto lg:z-auto' 
                : ''
            }`}>
              {/* Mobile Close Button */}
              {showSidebar && (
                <div className="lg:hidden flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">تصفية النتائج</h3>
                  <button
                    onClick={() => setShowSidebar(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <FiX className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              )}
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FiFilter className="ml-2 h-5 w-5" />
                <span className="hidden lg:block">تصفية النتائج</span>
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">البحث</label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="ابحث عن دورة..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">الفئات</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCategoryChange(category.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700 flex-1">{category.name}</span>
                      <span className="text-xs text-gray-500">
                        ({courses.filter(course => category.id === 'all' || course.category === category.id).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">نوع الدورة</label>
                <div className="space-y-2">
                  <button
                    onClick={() => handlePriceTypeChange('all')}
                    className={`w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedPriceType === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    جميع الدورات
                  </button>
                  <button
                    onClick={() => handlePriceTypeChange('free')}
                    className={`w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedPriceType === 'free'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    دورات مجانية
                  </button>
                  <button
                    onClick={() => handlePriceTypeChange('paid')}
                    className={`w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedPriceType === 'paid'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    دورات مدفوعة
                  </button>
                </div>
              </div>
              
              {/* Clear Filters Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setSelectedCategories(['all']);
                    setPriceType('all');
                    setSearchTerm('');
                    setCurrentPage(1);
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  مسح جميع الفلاتر
                </button>
              </div>
              
              {/* Mobile Apply Button */}
              {showSidebar && (
                <div className="lg:hidden pt-4 border-t border-gray-200 mt-6">
                  <button
                    onClick={() => setShowSidebar(false)}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    تطبيق الفلاتر
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
                <p className="text-gray-600">
                  تم العثور على {filteredCourses.length} دورة - الصفحة {currentPage} من {totalPages}
                </p>
                
                {/* Active Filters Display */}
                {(selectedCategories.length > 1 || !selectedCategories.includes('all') || selectedPriceType !== 'all' || searchTerm) && (
                  <div className="flex flex-wrap gap-2">
                    {selectedCategories.filter(cat => cat !== 'all').map(categoryId => {
                      const category = categories.find(cat => cat.id === categoryId);
                      return category ? (
                        <span
                          key={categoryId}
                          className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {category.name}
                          <button
                            onClick={() => handleCategoryChange(categoryId)}
                            className="mr-1 hover:bg-blue-200 rounded-full p-0.5"
                          >
                            <FiX className="h-3 w-3" />
                          </button>
                        </span>
                      ) : null;
                    })}
                    
                    {selectedPriceType !== 'all' && (
                      <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {selectedPriceType === 'free' ? 'مجاني' : 'مدفوع'}
                        <button
                          onClick={() => handlePriceTypeChange('all')}
                          className="mr-1 hover:bg-green-200 rounded-full p-0.5"
                        >
                          <FiX className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                    
                    {searchTerm && (
                      <span className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        بحث: {searchTerm}
                        <button
                          onClick={() => handleSearch('')}
                          className="mr-1 hover:bg-purple-200 rounded-full p-0.5"
                        >
                          <FiX className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
                <option>ترتيب حسب: الأحدث</option>
                <option>ترتيب حسب: الأعلى تقييماً</option>
                <option>ترتيب حسب: الأقل سعراً</option>
                <option>ترتيب حسب: الأكثر سعراً</option>
              </select>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[...Array(coursesPerPage)].map((_, index) => (
                  <CourseSkeleton key={index} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {currentCourses.map((course) => (
                    <div key={course.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
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
                          {course.categoryName}
                        </div>
                        {!course.isPaid && (
                          <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            مجاني
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {course.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-3">المدرب: {course.instructor}</p>
                        <p className="text-gray-600 mb-4">المدة: {course.duration}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <FiStar className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-gray-700 font-medium">{course.rating}</span>
                            <span className="text-gray-500 text-sm">({course.students} طالب)</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                          {course.isPaid ? (
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                              {course.originalPrice > course.price && (
                                <>
                                  <span className="text-lg text-gray-400 line-through">${course.originalPrice}</span>
                                  <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                                    خصم {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                                  </div>
                                </>
                              )}
                            </div>
                          ) : (
                            <span className="text-2xl font-bold text-green-600">مجاني</span>
                          )}
                        </div>
                        
                        <Link
                          to={`/course/${course.id}`}
                          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
                        >
                          {course.isPaid ? 'شراء الدورة' : 'ابدأ التعلم'}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg ${
                        currentPage === 1
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <FiChevronRight className="h-5 w-5" />
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`px-4 py-2 rounded-lg font-medium ${
                            currentPage === page
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}

                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg ${
                        currentPage === totalPages
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <FiChevronLeft className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </>
            )}

            {!isLoading && filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <FiSearch className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg mb-2">لم يتم العثور على دورات مطابقة للفلاتر المحددة</p>
                  <p className="text-sm">جرب تغيير معايير البحث أو الفلاتر</p>
                  <button
                    onClick={() => {
                      setSelectedCategories(['all']);
                      setPriceType('all');
                      setSearchTerm('');
                      setCurrentPage(1);
                    }}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    مسح جميع الفلاتر
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;