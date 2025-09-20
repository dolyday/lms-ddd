import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiArrowLeft } from 'react-icons/fi';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <FiShield className="h-12 w-12 text-green-200 ml-4" />
            <h1 className="text-4xl md:text-5xl font-bold">سياسة الخصوصية</h1>
          </div>
          <p className="text-xl text-green-100">
            نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية
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
                تصف سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها 
                عند استخدام منصة التعلم. نحن ملتزمون بحماية خصوصيتك وضمان أمان بياناتك.
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. المعلومات التي نجمعها</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-lg font-semibold text-gray-800">المعلومات الشخصية</h3>
                  <p>
                    عند التسجيل في منصتنا، قد نطلب منك تقديم معلومات شخصية مثل:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>الاسم الكامل</li>
                    <li>عنوان البريد الإلكتروني</li>
                    <li>رقم الهاتف</li>
                    <li>تاريخ الميلاد</li>
                    <li>معلومات الدفع (عند الشراء)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mt-6">المعلومات التقنية</h3>
                  <p>
                    نجمع تلقائياً معلومات تقنية عند استخدامك للمنصة، مثل:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>عنوان IP الخاص بك</li>
                    <li>نوع المتصفح والجهاز</li>
                    <li>نظام التشغيل</li>
                    <li>صفحات الويب التي تزورها</li>
                    <li>وقت ومدة الزيارة</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. كيفية استخدام المعلومات</h2>
                <div className="space-y-4 text-gray-700">
                  <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>تقديم وتحسين خدماتنا التعليمية</li>
                    <li>إنشاء وإدارة حسابك</li>
                    <li>معالجة المدفوعات والمعاملات</li>
                    <li>إرسال إشعارات مهمة حول حسابك</li>
                    <li>تقديم الدعم الفني والعملاء</li>
                    <li>تحليل استخدام المنصة لتحسين التجربة</li>
                    <li>إرسال رسائل تسويقية (بموافقتك)</li>
                    <li>الامتثال للمتطلبات القانونية</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. مشاركة المعلومات</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    نحن لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك 
                    في الحالات التالية فقط:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل المنصة</li>
                    <li>عند الحاجة للامتثال للقوانين أو الأوامر القضائية</li>
                    <li>لحماية حقوقنا أو سلامة المستخدمين</li>
                    <li>في حالة بيع أو نقل أعمالنا (بعد إشعارك)</li>
                    <li>بموافقتك الصريحة</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. أمان البيانات</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    نتخذ تدابير أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به 
                    أو الاستخدام أو الكشف أو التدمير:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>تشفير البيانات أثناء النقل والتخزين</li>
                    <li>استخدام جدران حماية متقدمة</li>
                    <li>مراقبة الأنظمة على مدار الساعة</li>
                    <li>تحديث الأنظمة الأمنية بانتظام</li>
                    <li>تدريب الموظفين على أفضل ممارسات الأمان</li>
                    <li>الوصول المحدود للبيانات حسب الحاجة فقط</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. ملفات تعريف الارتباط (Cookies)</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    نستخدم ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربتك على منصتنا:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>ملفات تعريف الارتباط الأساسية: ضرورية لتشغيل المنصة</li>
                    <li>ملفات تعريف الارتباط التحليلية: لفهم كيفية استخدام المنصة</li>
                    <li>ملفات تعريف الارتباط الوظيفية: لحفظ تفضيلاتك</li>
                    <li>ملفات تعريف الارتباط التسويقية: لعرض إعلانات مخصصة</li>
                  </ul>
                  <p>
                    يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك، لكن تعطيلها 
                    قد يؤثر على وظائف المنصة.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. حقوقك</h2>
                <div className="space-y-4 text-gray-700">
                  <p>لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>الحق في الوصول إلى بياناتك الشخصية</li>
                    <li>الحق في تصحيح البيانات غير الصحيحة</li>
                    <li>الحق في حذف بياناتك (في ظروف معينة)</li>
                    <li>الحق في تقييد معالجة بياناتك</li>
                    <li>الحق في نقل بياناتك</li>
                    <li>الحق في الاعتراض على معالجة بياناتك</li>
                    <li>الحق في سحب الموافقة في أي وقت</li>
                  </ul>
                  <p>
                    لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني: 
                    privacy@learningplatform.com
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. الاحتفاظ بالبيانات</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتقديم خدماتنا أو للامتثال 
                    للمتطلبات القانونية. عند عدم الحاجة لبياناتك، سنحذفها بشكل آمن.
                  </p>
                  <p>
                    فترات الاحتفاظ النموذجية:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>بيانات الحساب: طالما كان الحساب نشطاً + 3 سنوات</li>
                    <li>سجلات المعاملات: 7 سنوات للامتثال الضريبي</li>
                    <li>سجلات الدعم: 3 سنوات</li>
                    <li>البيانات التحليلية: سنتان</li>
                  </ul>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. خصوصية الأطفال</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    منصتنا غير مخصصة للأطفال دون سن 13 عاماً. نحن لا نجمع عمداً معلومات شخصية 
                    من الأطفال دون هذا السن. إذا علمنا أننا جمعنا معلومات من طفل دون سن 13، 
                    سنحذف هذه المعلومات فوراً.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. التحديثات على السياسة</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    قد نحدث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر 
                    البريد الإلكتروني أو من خلال إشعار على منصتنا. استمرارك في استخدام المنصة 
                    بعد التحديثات يعني موافقتك على السياسة المحدثة.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. التواصل معنا</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    إذا كان لديك أي أسئلة أو مخاوف حول سياسة الخصوصية هذه أو ممارسات البيانات 
                    الخاصة بنا، يرجى التواصل معنا:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li><strong>البريد الإلكتروني:</strong> privacy@learningplatform.com</li>
                      <li><strong>الهاتف:</strong> +966 11 123 4567</li>
                      <li><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</li>
                      <li><strong>ساعات العمل:</strong> الأحد - الخميس، 8:00 ص - 6:00 م</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <Link
                to="/"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
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

export default Privacy;