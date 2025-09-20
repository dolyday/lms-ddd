import React from 'react';
import { FiTarget, FiEye, FiAward, FiUsers } from 'react-icons/fi';

const AboutUs = () => {
  const stats = [
    { icon: FiUsers, label: 'الطلاب', value: '5000+' },
    { icon: FiAward, label: 'الدورات', value: '50+' },
    { icon: FiTarget, label: 'المدربين', value: '25+' },
    { icon: FiEye, label: 'سنوات الخبرة', value: '10+' }
  ];

  const team = [
    {
      name: 'د. محمد أحمد',
      role: 'المؤسس والمدير التنفيذي',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'خبير في تطوير الويب مع أكثر من 15 عام من الخبرة'
    },
    {
      name: 'سارة محمود',
      role: 'مديرة المحتوى التعليمي',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'متخصصة في تصميم المناهج التعليمية والتجربة التعليمية'
    },
    {
      name: 'أحمد علي',
      role: 'مطور التطبيقات المحمولة',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'خبير في تطوير تطبيقات iOS و Android'
    },
    {
      name: 'فاطمة خالد',
      role: 'مصممة واجهات المستخدم',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'متخصصة في تصميم تجربة وواجهة المستخدم'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            نحن منصة تعليمية رائدة تهدف إلى تمكين الأفراد من تطوير مهاراتهم في عالم التكنولوجيا المتطور
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                بدأت منصة التعلم في عام 2014 برؤية بسيطة: جعل التعليم التقني عالي الجودة متاحاً للجميع. 
                منذ ذلك الحين، نمت منصتنا لتصبح واحدة من أكبر المنصات التعليمية في المنطقة العربية.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                نحن نؤمن أن التعلم يجب أن يكون ممتعاً وعملياً ومتاحاً. لذلك، نعمل باستمرار على تطوير 
                محتوى تعليمي متقدم يواكب أحدث التطورات التقنية في العالم.
              </p>
              <p className="text-gray-600 leading-relaxed">
                فريقنا مكون من خبراء ومتخصصين في مختلف المجالات التقنية، وكلهم متحمسون لمشاركة معرفتهم 
                وخبرتهم مع المتعلمين الطموحين.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <FiTarget className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                تمكين الأفراد في المنطقة العربية من اكتساب المهارات التقنية اللازمة لبناء مستقبل مهني 
                ناجح من خلال توفير تعليم عالي الجودة ومحدث باستمرار.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <FiEye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون المنصة التعليمية الرائدة في المنطقة العربية في مجال التكنولوجيا، ونساهم في 
                بناء جيل من المطورين والمصممين المبدعين القادرين على المنافسة عالمياً.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">فريق العمل</h2>
            <p className="text-xl text-gray-600">تعرف على الخبراء الذين يقفون خلف منصتنا</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قيمنا</h2>
            <p className="text-xl text-gray-600">المبادئ التي توجه عملنا يومياً</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">الجودة</h3>
              <p className="text-gray-600">
                نلتزم بتقديم محتوى تعليمي عالي الجودة يلبي أعلى المعايير الأكاديمية والمهنية
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">المجتمع</h3>
              <p className="text-gray-600">
                نبني مجتمعاً تعليمياً متفاعلاً يشجع على التعلم المستمر وتبادل المعرفة
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTarget className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">الابتكار</h3>
              <p className="text-gray-600">
                نسعى دائماً لتطوير طرق تعليمية جديدة ومبتكرة تجعل التعلم أكثر فعالية ومتعة
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;