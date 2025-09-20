import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiX, FiPlay, FiCheck, FiUsers, FiMessageSquare, FiVideo, FiChevronDown, FiChevronUp, FiAward } from 'react-icons/fi';

const CoursePreview = () => {
  const { id } = useParams();
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);
  const [currentLesson, setCurrentLesson] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);

  // Sample course data - in real app, this would come from API
  const course = {
    id: 1,
    title: 'الدورة 1',
    progress: 0,
    totalLessons: 1,
    completedLessons: 0,
    chapters: [
      {
        id: 1,
        title: 'الفصل 1',
        totalLessons: 1,
        lessons: [
          {
            id: 1,
            title: 'الدورة 1',
            duration: '77',
            isCompleted: false,
            type: 'video'
          }
        ]
      }
    ]
  };

  const currentLessonData = {
    id: 1,
    title: 'الدورة 1',
    duration: '77',
    type: 'Reading Material',
    content: {
      summary: 'في هذا الدرس الشامل، ستتعلم تقنيات التطوير المتقدمة لبناء تطبيقات الويب الحديثة. نغطي أفضل الممارسات وأنماط التصميم واستراتيجيات التنفيذ.',
      keyTopics: [
        'هندسة المكونات وأنماط التصميم',
        'استراتيجيات إدارة الحالة',
        'تقنيات تحسين الأداء',
        'منهجيات الاختبار وأفضل الممارسات',
        'اعتبارات النشر والإنتاج'
      ]
    }
  };

  const toggleChapter = (chapterId: number) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  const markAsCompleted = () => {
    // Handle marking lesson as completed
    console.log('Lesson marked as completed');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      {showSidebar && (
        <div className="w-80 bg-white shadow-lg flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">منهج الدورة</h2>
              <button
                onClick={() => setShowSidebar(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <FiX className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>التقدم</span>
                <span>{course.progress}% مكتمل ({course.completedLessons}/{course.totalLessons})</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Course Curriculum */}
          <div className="flex-1 overflow-y-auto">
            {course.chapters.map((chapter) => (
              <div key={chapter.id} className="border-b border-gray-200">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full p-4 text-right flex items-center justify-between hover:bg-gray-50"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{chapter.title}</h3>
                    <p className="text-sm text-gray-500">{chapter.totalLessons}/1 دروس</p>
                  </div>
                  {expandedChapter === chapter.id ? (
                    <FiChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <FiChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                
                {expandedChapter === chapter.id && (
                  <div className="bg-blue-50">
                    {chapter.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => setCurrentLesson(lesson.id)}
                        className={`w-full p-4 text-right flex items-center space-x-3 space-x-reverse hover:bg-blue-100 ${
                          currentLesson === lesson.id ? 'bg-blue-100 border-r-4 border-blue-600' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            lesson.isCompleted ? 'bg-green-600' : 'bg-blue-600'
                          }`}>
                            {lesson.isCompleted ? (
                              <FiCheck className="h-4 w-4 text-white" />
                            ) : (
                              <FiPlay className="h-3 w-3 text-white" />
                            )}
                          </div>
                          <span className="text-sm text-gray-700">{lesson.title}</span>
                        </div>
                        <span className="text-xs text-gray-500 mr-auto">{lesson.duration}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Community Section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 space-x-reverse text-gray-600 mb-2">
              <FiUsers className="h-5 w-5" />
              <span className="text-sm font-medium">المجتمع</span>
            </div>
            <div className="space-y-2">
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <span className="text-2xl font-bold text-blue-600">77</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <span className="text-2xl font-bold text-blue-600">77</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            {!showSidebar && (
              <button
                onClick={() => setShowSidebar(true)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                </div>
              </button>
            )}
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{course.title}</h1>
              <p className="text-sm text-gray-500">{course.progress}% مكتمل ({course.completedLessons}/{course.totalLessons})</p>
            </div>
          </div>
          
          <Link
            to="/dashboard"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            العودة للوحة التحكم
          </Link>
        </div>

        {/* Video/Content Area */}
        <div className="flex-1 bg-black flex items-center justify-center">
          <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            {/* Simulated coding environment */}
            <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
              <div className="bg-gray-800 p-2 flex items-center space-x-2 space-x-reverse">
                <div className="flex space-x-1 space-x-reverse">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm">test.py</span>
              </div>
              <div className="p-4 text-green-400 font-mono text-sm">
                <div className="mb-2">
                  <span className="text-blue-400">dinosaur_cord</span>[<span className="text-yellow-400">0</span>]=<span className="text-yellow-400">100</span>,
                </div>
                <div className="mb-2">
                  <span className="text-blue-400">dinosaur_cord</span>[<span className="text-yellow-400">1</span>]=<span className="text-yellow-400">30</span>
                </div>
                <div className="mb-2">)</div>
                <div className="mb-2">
                  <span className="text-blue-400">image</span> = <span className="text-blue-400">ImageGrab</span>.<span className="text-yellow-400">grab</span>(<span className="text-blue-400">box</span>)
                </div>
                <div className="mb-2">
                  <span className="text-blue-400">gray_image</span> = <span className="text-blue-400">ImageOps</span>.<span className="text-yellow-400">grayscale</span>(<span className="text-blue-400">image</span>)
                </div>
                <div className="mb-2">
                  <span className="text-blue-400">arr</span> = <span className="text-yellow-400">array</span>(<span className="text-blue-400">gray_image</span>)
                </div>
                <div className="mb-4">
                  <span className="text-purple-400">return</span> <span className="text-blue-400">arr</span>.<span className="text-yellow-400">sum</span>()
                </div>
                
                <div className="mb-2">
                  <span className="text-yellow-400">start</span>()
                </div>
                <div className="mb-2">
                  <span className="text-purple-400">while</span> <span className="text-purple-400">not</span> <span className="text-blue-400">is_pressed</span>(<span className="text-green-400">'q'</span>):
                </div>
                <div className="mb-2 ml-4">
                  <span className="text-blue-400">v</span> = <span className="text-blue-400">get_box</span>()
                </div>
                <div className="mb-2 ml-4">
                  <span className="text-purple-400">if</span> <span className="text-blue-400">v</span> &lt; <span className="text-yellow-400">666900</span>:
                </div>
                <div className="mb-2 ml-8">
                  <span className="text-yellow-400">print</span>(<span className="text-green-400">'Terming...'</span>)
                </div>
                <div className="mb-2 ml-8">
                  <span className="text-blue-400">jump</span>()
                </div>
              </div>
              
              {/* Terminal section */}
              <div className="bg-black p-4 text-green-400 font-mono text-sm">
                <div className="mb-1">Terming...</div>
                <div className="mb-1">Terming...</div>
                <div className="mb-1">Terming...</div>
                <div className="mb-1">Terming...</div>
                <div className="mb-1">Terming...</div>
                <div className="mb-1">Terming...</div>
                <div className="mb-1">Terming...</div>
                <div className="mb-1">Terming...</div>
                <div className="mb-1">Terming...</div>
                <div className="flex items-center">
                  <span className="text-blue-400">PS C:\Users\user\Desktop\gui&gt;</span>
                  <span className="ml-2 bg-white w-2 h-4 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentLessonData.title}</h2>
                <p className="text-gray-600">المدة: {currentLessonData.duration} • النوع: {currentLessonData.type}</p>
              </div>
              <button
                onClick={markAsCompleted}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                تم الإكمال
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 space-x-reverse mb-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 space-x-reverse">
                <span>الملخص</span>
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2 space-x-reverse">
                <FiVideo className="h-5 w-5" />
                <span>الفصل المباشر</span>
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2 space-x-reverse">
                <FiMessageSquare className="h-5 w-5" />
                <span>المنتدى</span>
              </button>
              <Link
                to={`/course/${course.id}/assignments`}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 space-x-reverse"
              >
                <span>الواجبات</span>
              </Link>
              <Link
                to={`/course-certificate/${course.id}`}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 space-x-reverse"
              >
                <FiAward className="h-5 w-5" />
                <span>الشهادة</span>
              </Link>
            </div>

            {/* Lesson Summary */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ملخص الدرس</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {currentLessonData.content.summary}
              </p>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4">المواضيع الرئيسية المغطاة:</h4>
              <ul className="space-y-2">
                {currentLessonData.content.keyTopics.map((topic, index) => (
                  <li key={index} className="flex items-start space-x-3 space-x-reverse">
                    <div className="bg-blue-100 p-1 rounded mt-1">
                      <FiCheck className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;