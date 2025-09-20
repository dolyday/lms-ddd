import React, { useState } from 'react';
import { FiPlus, FiMinus, FiSearch } from 'react-icons/fi';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'عام',
      faqs: [
        {
          question: 'ما هي منصة التعلم؟',
          answer: 'منصة التعلم هي منصة تعليمية إلكترونية تقدم دورات متخصصة في مجال التكنولوجيا والبرمجة وتطوير الويب والتطبيقات. نهدف إلى تمكين المتعلمين من اكتساب المهارات التقنية المطلوبة في سوق العمل.'
        },
        {
          question: 'كيف يمكنني التسجيل في المنصة؟',
          answer: 'يمكنك التسجيل بسهولة من خلال النقر على زر "تسجيل الدخول" في أعلى الصفحة، ثم اختيار "إنشاء حساب جديد". ستحتاج إلى بريد إلكتروني صالح لتأكيد حسابك.'
        },
        {
          question: 'هل الدورات باللغة العربية؟',
          answer: 'نعم، معظم دوراتنا متوفرة باللغة العربية مع ترجمة احترافية. كما نوفر بعض الدورات باللغة الإنجليزية للمتعلمين الذين يفضلون ذلك.'
        }
      ]
    },
    {
      title: 'الدورات والمحتوى',
      faqs: [
        {
          question: 'كم عدد الدورات المتاحة في المنصة؟',
          answer: 'لدينا أكثر من 50 دورة متخصصة في مختلف المجالات التقنية، ونضيف دورات جديدة باستمرار حسب احتياجات السوق ومتطلبات المتعلمين.'
        },
        {
          question: 'هل يمكنني الوصول للدورات مدى الحياة؟',
          answer: 'نعم، بمجرد شرائك لأي دورة، ستحصل على وصول مدى الحياة للمحتوى، بما يشمل جميع التحديثات المستقبلية للدورة.'
        },
        {
          question: 'هل توجد دورات مجانية؟',
          answer: 'نعم، نوفر عدة دورات مجانية للمبتدئين، بالإضافة إلى عروض تجريبية مجانية لمعظم دوراتنا المدفوعة.'
        },
        {
          question: 'كيف يتم تحديث المحتوى؟',
          answer: 'نحدث محتوى الدورات بانتظام لضمان مواكبة أحدث التطورات التقنية. المتعلمون المسجلون يحصلون على التحديثات تلقائياً دون رسوم إضافية.'
        }
      ]
    },
    {
      title: 'الدفع والتسعير',
      faqs: [
        {
          question: 'ما هي طرق الدفع المقبولة؟',
          answer: 'نقبل جميع البطاقات الائتمانية الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، والدفع عبر PayPal، وبعض المحافظ الإلكترونية المحلية.'
        },
        {
          question: 'هل يمكنني استرداد المبلغ؟',
          answer: 'نعم، نوفر ضمان استرداد المبلغ خلال 30 يوم من تاريخ الشراء إذا لم تكن راضياً عن الدورة، دون طرح أي أسئلة.'
        },
        {
          question: 'هل توجد خصومات للطلاب؟',
          answer: 'نعم، نوفر خصومات خاصة للطلاب والخريجين الجدد. كما نقدم عروض موسمية وخصومات على الحزم التعليمية.'
        },
        {
          question: 'هل يمكنني شراء أكثر من دورة بسعر مخفض؟',
          answer: 'نعم، نوفر حزم تعليمية بأسعار مخفضة عند شراء عدة دورات معاً. كلما زاد عدد الدورات، زاد الخصم.'
        }
      ]
    },
    {
      title: 'التقنية والدعم',
      faqs: [
        {
          question: 'ما هي متطلبات النظام لمشاهدة الدورات؟',
          answer: 'تحتاج إلى متصفح ويب حديث واتصال إنترنت مستقر. الدورات متوافقة مع جميع الأجهزة: الكمبيوتر، اللوحي، والهواتف الذكية.'
        },
        {
          question: 'هل يمكنني تحميل الدورات للمشاهدة بدون إنترنت؟',
          answer: 'نعم، توفر منصتنا خاصية التحميل للمشاهدة بدون إنترنت من خلال تطبيق الهاتف المحمول للمشتركين المدفوعين.'
        },
        {
          question: 'كيف يمكنني الحصول على الدعم التقني؟',
          answer: 'يمكنك التواصل مع فريق الدعم التقني عبر البريد الإلكتروني أو نظام التذاكر داخل المنصة. نحن متاحون 24/7 للمساعدة.'
        },
        {
          question: 'ماذا أفعل إذا واجهت مشاكل في تشغيل الفيديوهات؟',
          answer: 'أولاً تأكد من استقرار اتصال الإنترنت وحدث متصفحك. إذا استمرت المشكلة، تواصل مع الدعم التقني مع تفاصيل المشكلة ونوع المتصفح.'
        }
      ]
    },
    {
      title: 'الشهادات والإنجاز',
      faqs: [
        {
          question: 'هل أحصل على شهادة بعد إنهاء الدورة؟',
          answer: 'نعم، تحصل على شهادة إنجاز رسمية بعد إكمال الدورة بنجاح واجتياز جميع التقييمات المطلوبة.'
        },
        {
          question: 'هل الشهادات معترف بها؟',
          answer: 'شهاداتنا معترف بها في العديد من الشركات والمؤسسات في المنطقة. كما أنها تضيف قيمة كبيرة لسيرتك الذاتية وملفك المهني.'
        },
        {
          question: 'كيف يمكنني مشاركة شهادتي؟',
          answer: 'يمكنك تحميل الشهادة بصيغة PDF أو مشاركتها مباشرة على LinkedIn وشبكات التواصل المهني الأخرى.'
        }
      ]
    }
  ];

  // Filter FAQs based on search term
  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">الأسئلة الشائعة</h1>
          <p className="text-xl text-blue-100 mb-8">
            تجد هنا إجابات لأكثر الأسئلة شيوعاً حول منصتنا وخدماتنا
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث في الأسئلة الشائعة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = faqCategories.findIndex(cat => cat.title === category.title) * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                        {isOpen ? (
                          <FiMinus className="h-5 w-5 text-blue-600 flex-shrink-0 ml-4" />
                        ) : (
                          <FiPlus className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                لم يتم العثور على أسئلة مطابقة لبحثك "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                إعادة تعيين البحث
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">لم تجد إجابة لسؤالك؟</h2>
          <p className="text-lg text-gray-600 mb-8">
            فريقنا جاهز لمساعدتك! تواصل معنا وسنرد عليك في أقرب وقت ممكن
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            تواصل معنا
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;