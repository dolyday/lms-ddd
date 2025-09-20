import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlay, FiClock, FiBookOpen, FiUser, FiShoppingBag, FiCreditCard, FiCalendar, FiTrendingUp, FiEye, FiDownload } from 'react-icons/fi';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data - in real app, this would come from API
  const userStats = {
    totalCourses: 5,
    completedCourses: 2,
    totalHours: 45,
    completedHours: 18
  };

  const lastWatchedCourse = {
    id: 1,
    title: 'تطوير المواقع للمبتدئين',
    progress: 65,
    lastLesson: 'إنشاء النماذج في HTML',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
    totalLessons: 24,
    completedLessons: 16
  };

  const upcomingSubscription = {
    courseName: 'تصميم واجهات المستخدم',
    expiryDate: '2024-12-15',
    daysLeft: 45
  };

  const myCourses = [
    {
      id: 1,
      title: 'تطوير المواقع للمبتدئين',
      progress: 65,
      enrollDate: '2024-01-15',
      status: 'جاري',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=200',
      instructor: 'د. محمد أحمد'
    },
    {
      id: 2,
      title: 'تصميم واجهات المستخدم',
      progress: 100,
      enrollDate: '2024-02-01',
      status: 'مكتمل',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200',
      instructor: 'سارة محمود'
    },
    {
      id: 3,
      title: 'برمجة التطبيقات المحمولة',
      progress: 30,
      enrollDate: '2024-03-10',
      status: 'جاري',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=200',
      instructor: 'أحمد علي'
    }
  ];

  const myOrders = [
    {
      id: '#ORD-001',
      date: '2024-01-15',
      course: 'تطوير المواقع للمبتدئين',
      amount: 250,
      status: 'مكتمل',
      paymentMethod: 'بطاقة ائتمانية'
    },
    {
      id: '#ORD-002',
      date: '2024-02-01',
      course: 'تصميم واجهات المستخدم',
      amount: 200,
      status: 'مكتمل',
      paymentMethod: 'PayPal'
    },
    {
      id: '#ORD-003',
      date: '2024-03-10',
      course: 'برمجة التطبيقات المحمولة',
      amount: 300,
      status: 'معلق',
      paymentMethod: 'بطاقة ائتمانية'
    }
  ];

  const mySubscriptions = [
    {
      id: 'SUB-001',
      plan: 'الخطة الشهرية',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'نشط',
      amount: 99,
      autoRenewal: true
    },
    {
      id: 'SUB-002',
      plan: 'خطة الطلاب',
      startDate: '2024-02-15',
      endDate: '2024-08-15',
      status: 'منتهي',
      amount: 49,
      autoRenewal: false
    }
  ];

  const tabs = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: FiTrendingUp },
    { id: 'courses', label: 'دوراتي', icon: FiBookOpen },
    { id: 'orders', label: 'طلباتي', icon: FiShoppingBag },
    { id: 'subscriptions', label: 'اشتراكاتي', icon: FiCreditCard }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'مكتمل':
      case 'نشط':
        return 'bg-green-100 text-green-800';
      case 'جاري':
      case 'معلق':
        return 'bg-yellow-100 text-yellow-800';
      case 'منتهي':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
          <p className="text-gray-600">مرحباً بك في لوحة التحكم الخاصة بك</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 space-x-reverse px-6">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 space-x-reverse transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="flex items-center">
                      <div className="bg-blue-600 p-3 rounded-full">
                        <FiBookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div className="mr-4">
                        <p className="text-sm font-medium text-blue-600">إجمالي الدورات</p>
                        <p className="text-2xl font-bold text-blue-900">{userStats.totalCourses}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="flex items-center">
                      <div className="bg-green-600 p-3 rounded-full">
                        <FiTrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div className="mr-4">
                        <p className="text-sm font-medium text-green-600">الدورات المكتملة</p>
                        <p className="text-2xl font-bold text-green-900">{userStats.completedCourses}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <div className="flex items-center">
                      <div className="bg-purple-600 p-3 rounded-full">
                        <FiClock className="h-6 w-6 text-white" />
                      </div>
                      <div className="mr-4">
                        <p className="text-sm font-medium text-purple-600">إجمالي الساعات</p>
                        <p className="text-2xl font-bold text-purple-900">{userStats.totalHours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl">
                    <div className="flex items-center">
                      <div className="bg-orange-600 p-3 rounded-full">
                        <FiPlay className="h-6 w-6 text-white" />
                      </div>
                      <div className="mr-4">
                        <p className="text-sm font-medium text-orange-600">الساعات المكتملة</p>
                        <p className="text-2xl font-bold text-orange-900">{userStats.completedHours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Last Watched Course */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">آخر دورة شاهدتها</h3>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <img
                      src={lastWatchedCourse.image}
                      alt={lastWatchedCourse.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{lastWatchedCourse.title}</h4>
                      <p className="text-gray-600 mb-2">آخر درس: {lastWatchedCourse.lastLesson}</p>
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>التقدم</span>
                            <span>{lastWatchedCourse.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${lastWatchedCourse.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <Link
                          to={`/course-preview/${lastWatchedCourse.id}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 space-x-reverse"
                        >
                          <FiPlay className="h-4 w-4" />
                          <span>متابعة</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Subscription Expiry */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">تذكير الاشتراك</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-700 mb-1">
                        اشتراكك في دورة <strong>{upcomingSubscription.courseName}</strong> سينتهي قريباً
                      </p>
                      <p className="text-sm text-gray-600">
                        تاريخ الانتهاء: {upcomingSubscription.expiryDate} ({upcomingSubscription.daysLeft} يوم متبقي)
                      </p>
                    </div>
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                      تجديد الاشتراك
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* My Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">دوراتي</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الدورة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          المدرب
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          التقدم
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          تاريخ التسجيل
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الحالة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الإجراءات
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {myCourses.map((course) => (
                        <tr key={course.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="h-12 w-12 rounded-lg object-cover"
                              />
                              <div className="mr-4">
                                <div className="text-sm font-medium text-gray-900">{course.title}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {course.instructor}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-1 ml-4">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                              <span className="text-sm text-gray-600">{course.progress}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {course.enrollDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(course.status)}`}>
                              {course.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Link
                              to={`/course-preview/${course.id}`}
                              className="text-blue-600 hover:text-blue-900 ml-4"
                            >
                              <FiEye className="h-4 w-4 inline" />
                            </Link>
                            <button className="text-green-600 hover:text-green-900">
                              <FiDownload className="h-4 w-4 inline" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* My Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">طلباتي</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          رقم الطلب
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          التاريخ
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الدورة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          المبلغ
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          طريقة الدفع
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الحالة
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {myOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {order.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {order.course}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${order.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {order.paymentMethod}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* My Subscriptions Tab */}
            {activeTab === 'subscriptions' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">اشتراكاتي</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          رقم الاشتراك
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الخطة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          تاريخ البداية
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          تاريخ الانتهاء
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          المبلغ
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          التجديد التلقائي
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الحالة
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mySubscriptions.map((subscription) => (
                        <tr key={subscription.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {subscription.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {subscription.plan}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {subscription.startDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {subscription.endDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${subscription.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {subscription.autoRenewal ? 'نعم' : 'لا'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(subscription.status)}`}>
                              {subscription.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;