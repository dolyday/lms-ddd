import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiUpload, FiFile, FiCheck, FiClock, FiBookOpen, FiSend, FiX, FiAlertCircle } from 'react-icons/fi';

interface TextAnswer {
  type: 'text';
  value: string;
}

interface FileAnswer {
  type: 'file';
  file: File | null;
  fileName: string;
}

interface MultipleChoiceAnswer {
  type: 'multiple-choice';
  selectedOptions: string[];
}

type Answer = TextAnswer | FileAnswer | MultipleChoiceAnswer;

interface Question {
  id: string;
  type: 'text' | 'file' | 'multiple-choice';
  question: string;
  required: boolean;
  options?: string[];
  maxFileSize?: number; // in MB
  allowedFileTypes?: string[];
}

interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  questions: Question[];
}

const CourseAssignments = () => {
  const { id } = useParams();
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sample assignments data
  const assignments: Assignment[] = [
    {
      id: 'assignment-1',
      title: 'أساسيات HTML',
      description: 'تطبيق المفاهيم الأساسية لـ HTML وإنشاء صفحة ويب بسيطة',
      dueDate: '2024-02-15',
      questions: [
        {
          id: 'q1',
          type: 'text',
          question: 'اشرح الفرق بين عناصر HTML الدلالية وغير الدلالية مع إعطاء أمثلة.',
          required: true
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'أي من العناصر التالية يُستخدم لإنشاء قائمة مرتبة؟',
          required: true,
          options: ['<ul>', '<ol>', '<li>', '<list>']
        },
        {
          id: 'q3',
          type: 'file',
          question: 'قم برفع ملف HTML يحتوي على صفحة ويب بسيطة تتضمن عنوان، فقرة، وصورة.',
          required: true,
          maxFileSize: 5,
          allowedFileTypes: ['.html', '.htm']
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'أي من الخصائص التالية تُستخدم لتحديد النص البديل للصورة؟ (يمكن اختيار أكثر من إجابة)',
          required: false,
          options: ['alt', 'title', 'src', 'description']
        }
      ]
    },
    {
      id: 'assignment-2',
      title: 'تنسيق CSS المتقدم',
      description: 'تطبيق تقنيات CSS المتقدمة لتصميم واجهات جذابة',
      dueDate: '2024-02-22',
      questions: [
        {
          id: 'q5',
          type: 'text',
          question: 'اشرح مفهوم CSS Grid وكيف يختلف عن Flexbox.',
          required: true
        },
        {
          id: 'q6',
          type: 'multiple-choice',
          question: 'أي من الخصائص التالية تُستخدم لإنشاء انتقالات سلسة؟',
          required: true,
          options: ['transition', 'transform', 'animation', 'keyframes']
        },
        {
          id: 'q7',
          type: 'file',
          question: 'قم برفع ملف CSS يحتوي على تصميم responsive لصفحة ويب.',
          required: true,
          maxFileSize: 10,
          allowedFileTypes: ['.css']
        }
      ]
    },
    {
      id: 'assignment-3',
      title: 'JavaScript التفاعلي',
      description: 'إنشاء تطبيقات تفاعلية باستخدام JavaScript',
      dueDate: '2024-03-01',
      questions: [
        {
          id: 'q8',
          type: 'text',
          question: 'اشرح الفرق بين var، let، و const في JavaScript.',
          required: true
        },
        {
          id: 'q9',
          type: 'multiple-choice',
          question: 'أي من الطرق التالية تُستخدم لإضافة event listener؟',
          required: true,
          options: ['addEventListener()', 'onClick()', 'attachEvent()', 'bindEvent()']
        },
        {
          id: 'q10',
          type: 'file',
          question: 'قم برفع ملف JavaScript يحتوي على تطبيق تفاعلي بسيط.',
          required: false,
          maxFileSize: 15,
          allowedFileTypes: ['.js', '.html']
        }
      ]
    }
  ];

  const handleTextAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { type: 'text', value }
    }));
    
    // Clear error if exists
    if (errors[questionId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  const handleFileUpload = (questionId: string, file: File | null) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { 
        type: 'file', 
        file, 
        fileName: file ? file.name : '' 
      }
    }));
    
    // Clear error if exists
    if (errors[questionId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  const handleMultipleChoice = (questionId: string, option: string) => {
    setAnswers(prev => {
      const currentAnswer = prev[questionId] as MultipleChoiceAnswer;
      const currentOptions = currentAnswer?.selectedOptions || [];
      
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter(opt => opt !== option)
        : [...currentOptions, option];
      
      return {
        ...prev,
        [questionId]: { 
          type: 'multiple-choice', 
          selectedOptions: newOptions 
        }
      };
    });
    
    // Clear error if exists
    if (errors[questionId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  const validateAnswers = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    assignments.forEach(assignment => {
      assignment.questions.forEach(question => {
        if (question.required) {
          const answer = answers[question.id];
          
          if (!answer) {
            newErrors[question.id] = 'هذا السؤال مطلوب';
          } else {
            switch (question.type) {
              case 'text':
                if (!(answer as TextAnswer).value.trim()) {
                  newErrors[question.id] = 'يرجى كتابة إجابة';
                }
                break;
              case 'file':
                if (!(answer as FileAnswer).file) {
                  newErrors[question.id] = 'يرجى رفع ملف';
                }
                break;
              case 'multiple-choice':
                if ((answer as MultipleChoiceAnswer).selectedOptions.length === 0) {
                  newErrors[question.id] = 'يرجى اختيار إجابة واحدة على الأقل';
                }
                break;
            }
          }
        }
      });
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateAnswers()) {
      // Scroll to first error
      const firstErrorElement = document.querySelector('.error-field');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Submitting answers:', answers);
      alert('تم إرسال الواجبات بنجاح!');
      
      // Reset form
      setAnswers({});
      setErrors({});
    } catch (error) {
      alert('حدث خطأ أثناء إرسال الواجبات. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const isFileValid = (file: File, question: Question): boolean => {
    if (question.maxFileSize && file.size > question.maxFileSize * 1024 * 1024) {
      return false;
    }
    
    if (question.allowedFileTypes) {
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      return question.allowedFileTypes.includes(fileExtension);
    }
    
    return true;
  };

  const getTotalQuestions = () => {
    return assignments.reduce((total, assignment) => total + assignment.questions.length, 0);
  };

  const getAnsweredQuestions = () => {
    return Object.keys(answers).length;
  };

  const getProgress = () => {
    const total = getTotalQuestions();
    const answered = getAnsweredQuestions();
    return total > 0 ? Math.round((answered / total) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 space-x-reverse mb-4">
            <Link
              to={`/course-preview/${id}`}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← العودة للدورة
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">واجبات الدورة</h1>
          <p className="text-lg text-gray-600 mb-6">
            أكمل جميع الواجبات المطلوبة لإنهاء الدورة والحصول على الشهادة
          </p>

          {/* Progress Bar */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">تقدم الواجبات</h3>
              <span className="text-sm text-gray-600">
                {getAnsweredQuestions()} من {getTotalQuestions()} أسئلة
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${getProgress()}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600">
              <span>{getProgress()}% مكتمل</span>
              <span>{getTotalQuestions() - getAnsweredQuestions()} أسئلة متبقية</span>
            </div>
          </div>
        </div>

        {/* Assignments */}
        <div className="space-y-8">
          {assignments.map((assignment, assignmentIndex) => (
            <div key={assignment.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Assignment Header */}
              <div className="bg-blue-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      الواجب {assignmentIndex + 1}: {assignment.title}
                    </h2>
                    <p className="text-blue-100 mb-2">{assignment.description}</p>
                    <div className="flex items-center space-x-4 space-x-reverse text-blue-100">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <FiClock className="h-4 w-4" />
                        <span>تاريخ التسليم: {assignment.dueDate}</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <FiBookOpen className="h-4 w-4" />
                        <span>{assignment.questions.length} أسئلة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="p-6 space-y-8">
                {assignment.questions.map((question, questionIndex) => (
                  <div 
                    key={question.id} 
                    className={`${errors[question.id] ? 'error-field' : ''}`}
                  >
                    <div className="mb-4">
                      <div className="flex items-start space-x-3 space-x-reverse mb-3">
                        <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                          {questionIndex + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {question.question}
                            {question.required && (
                              <span className="text-red-500 mr-1">*</span>
                            )}
                          </h3>
                          
                          {/* Question Type Indicator */}
                          <div className="flex items-center space-x-2 space-x-reverse mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              question.type === 'text' ? 'bg-green-100 text-green-800' :
                              question.type === 'file' ? 'bg-purple-100 text-purple-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {question.type === 'text' ? 'سؤال نصي' :
                               question.type === 'file' ? 'رفع ملف' :
                               'اختيار متعدد'}
                            </span>
                            {!question.required && (
                              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                اختياري
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Answer Input */}
                      <div className="mr-11">
                        {question.type === 'text' && (
                          <div>
                            <textarea
                              value={(answers[question.id] as TextAnswer)?.value || ''}
                              onChange={(e) => handleTextAnswer(question.id, e.target.value)}
                              placeholder="اكتب إجابتك هنا..."
                              rows={4}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                                errors[question.id] ? 'border-red-500' : 'border-gray-300'
                              }`}
                            />
                            {errors[question.id] && (
                              <div className="flex items-center space-x-2 space-x-reverse mt-2 text-red-600">
                                <FiAlertCircle className="h-4 w-4" />
                                <span className="text-sm">{errors[question.id]}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {question.type === 'file' && (
                          <div>
                            <div className={`border-2 border-dashed rounded-lg p-6 text-center ${
                              errors[question.id] ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                            }`}>
                              {(answers[question.id] as FileAnswer)?.file ? (
                                <div className="space-y-4">
                                  <div className="flex items-center justify-center space-x-3 space-x-reverse">
                                    <FiFile className="h-8 w-8 text-blue-600" />
                                    <div>
                                      <p className="font-medium text-gray-900">
                                        {(answers[question.id] as FileAnswer).fileName}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {formatFileSize((answers[question.id] as FileAnswer).file?.size || 0)}
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => handleFileUpload(question.id, null)}
                                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                                  >
                                    إزالة الملف
                                  </button>
                                </div>
                              ) : (
                                <div>
                                  <FiUpload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                  <p className="text-gray-600 mb-2">اسحب الملف هنا أو انقر للاختيار</p>
                                  <input
                                    type="file"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0] || null;
                                      if (file && !isFileValid(file, question)) {
                                        alert(`الملف غير صالح. الحد الأقصى: ${question.maxFileSize}MB، الأنواع المسموحة: ${question.allowedFileTypes?.join(', ')}`);
                                        return;
                                      }
                                      handleFileUpload(question.id, file);
                                    }}
                                    accept={question.allowedFileTypes?.join(',')}
                                    className="hidden"
                                    id={`file-${question.id}`}
                                  />
                                  <label
                                    htmlFor={`file-${question.id}`}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer inline-block"
                                  >
                                    اختيار ملف
                                  </label>
                                  {question.maxFileSize && (
                                    <p className="text-xs text-gray-500 mt-2">
                                      الحد الأقصى: {question.maxFileSize}MB
                                      {question.allowedFileTypes && (
                                        <span> • الأنواع المسموحة: {question.allowedFileTypes.join(', ')}</span>
                                      )}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                            {errors[question.id] && (
                              <div className="flex items-center space-x-2 space-x-reverse mt-2 text-red-600">
                                <FiAlertCircle className="h-4 w-4" />
                                <span className="text-sm">{errors[question.id]}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {question.type === 'multiple-choice' && (
                          <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {question.options?.map((option, optionIndex) => {
                                const isSelected = (answers[question.id] as MultipleChoiceAnswer)?.selectedOptions?.includes(option) || false;
                                return (
                                  <button
                                    key={optionIndex}
                                    onClick={() => handleMultipleChoice(question.id, option)}
                                    className={`p-4 rounded-lg border-2 text-right transition-all duration-200 ${
                                      isSelected
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                    }`}
                                  >
                                    <div className="flex items-center space-x-3 space-x-reverse">
                                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                        isSelected
                                          ? 'border-blue-500 bg-blue-500'
                                          : 'border-gray-300'
                                      }`}>
                                        {isSelected && (
                                          <FiCheck className="h-3 w-3 text-white" />
                                        )}
                                      </div>
                                      <span className="font-medium">{option}</span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                            {errors[question.id] && (
                              <div className="flex items-center space-x-2 space-x-reverse mt-3 text-red-600">
                                <FiAlertCircle className="h-4 w-4" />
                                <span className="text-sm">{errors[question.id]}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">هل أنت مستعد للإرسال؟</h3>
            <p className="text-gray-600 mb-6">
              تأكد من مراجعة جميع إجاباتك قبل الإرسال. لن تتمكن من تعديل الإجابات بعد الإرسال.
            </p>
            
            <div className="flex items-center justify-center space-x-4 space-x-reverse">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors font-semibold flex items-center space-x-2 space-x-reverse"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>جاري الإرسال...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="h-5 w-5" />
                    <span>إرسال جميع الواجبات</span>
                  </>
                )}
              </button>
              
              <button
                onClick={() => {
                  if (confirm('هل أنت متأكد من أنك تريد مسح جميع الإجابات؟')) {
                    setAnswers({});
                    setErrors({});
                  }
                }}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
              >
                مسح الإجابات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAssignments;