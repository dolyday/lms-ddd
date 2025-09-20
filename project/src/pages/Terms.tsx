import React from 'react';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiArrowLeft } from 'react-icons/fi';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">شروط الاستخدام</h1>
          <p className="text-xl text-blue-100">
            يرجى قراءة هذه الشروط بعناية قبل استخدام منصتنا
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                مرحباً بك في منصة التعلم. هذه الشروط والأحكام تحكم استخدامك لموقعنا الإلكتروني وخدماتنا. 
                باستخدام منصتنا، فإنك توافق على الالتزام بهذه الشروط.
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. قبول الشروط</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    بالوصول إلى منصة التعلم واستخدامها، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام 
                    بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام منصتنا.
                  </p>
                  <p>
                    نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق. استمرارك في استخدام 
                    المنصة بعد أي تعديلات يعني موافقتك على الشروط المحدثة.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. وصف الخدمة</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    منصة التعلم هي منصة تعليمية إلكترونية تقدم دورات تدريبية في مختلف المجالات التقنية. 
                    نوفر محتوى تعليمي عالي الجودة من خلال فيديوهات، مواد قراءة، واختبارات تفاعلية.
                  </p>
                  <p>
                    نحتفظ بالحق في تعديل أو إيقاف أي جزء من خدماتنا في أي وقت دون إشعار مسبق. 
                    كما نحتفظ بالحق في رفض الخدمة لأي شخص لأي سبب في أي وقت.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. التسجيل والحساب</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    لاستخدام بعض ميزات منصتنا، يجب عليك إنشاء حساب. أنت مسؤول عن الحفاظ على سرية 
                    معلومات حسابك وكلمة المرور الخاصة بك.
                  </p>
                  <p>
                    يجب أن تكون جميع المعلومات التي تقدمها عند التسجيل صحيحة ومحدثة. أنت مسؤول عن 
                    جميع الأنشطة التي تحدث تحت حسابك.
                  </p>
                  <p>
                    نحتفظ بالحق في إنهاء حسابك إذا انتهكت هذه الشروط أو إذا كانت المعلومات المقدمة 
                    غير صحيحة أو مضللة.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. الدفع والاسترداد</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    جميع الأسعار معروضة بالدولار الأمريكي وتشمل الضرائب المطبقة. الدفع مطلوب مقدماً 
                    للوصول إلى الدورات المدفوعة.
                  </p>
                  <p>
                    نوفر ضمان استرداد المبلغ خلال 30 يوماً من تاريخ الشراء إذا لم تكن راضياً عن الدورة. 
                    لطلب الاسترداد، يرجى التواصل مع فريق الدعم.
                  </p>
                  <p>
                    لا يحق لك استرداد المبلغ إذا أكملت أكثر من 50% من محتوى الدورة أو إذا انتهكت 
                    شروط الاستخدام.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. الملكية الفكرية</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    جميع المحتويات المتاحة على منصة التعلم، بما في ذلك النصوص والفيديوهات والصور 
                    والتصاميم، محمية بحقوق الطبع والنشر وقوانين الملكية الفكرية.
                  </p>
                  <p>
                    يُمنح لك ترخيص محدود وغير حصري وغير قابل للتحويل لاستخدام المحتوى لأغراض التعلم 
                    الشخصي فقط. لا يحق لك نسخ أو توزيع أو بيع أي محتوى من المنصة.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. السلوك المقبول</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    يجب عليك استخدام منصتنا بطريقة قانونية ومسؤولة. يُمنع عليك:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>انتهاك أي قوانين محلية أو دولية</li>
                    <li>نشر محتوى مسيء أو غير لائق</li>
                    <li>محاولة اختراق أو إلحاق الضرر بالمنصة</li>
                    <li>انتحال شخصية الآخرين</li>
                    <li>مشاركة معلومات تسجيل الدخول مع الآخرين</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. إخلاء المسؤولية</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    تُقدم منصة التعلم "كما هي" دون أي ضمانات صريحة أو ضمنية. لا نضمن أن الخدمة 
                    ستكون متاحة دون انقطاع أو خالية من الأخطاء.
                  </p>
                  <p>
                    لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنتج عن استخدام منصتنا 
                    أو عدم القدرة على استخدامها.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. القانون المطبق</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية. أي نزاع ينشأ عن 
                    استخدام منصتنا سيتم حله وفقاً للقوانين السعودية.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. التواصل</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا عبر:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>البريد الإلكتروني: legal@learningplatform.com</li>
                    <li>الهاتف: +966 11 123 4567</li>
                    <li>العنوان: الرياض، المملكة العربية السعودية</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <FiArrowLeft className="ml-2 h-5 w-5" />
                العودة للرئيسية
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;