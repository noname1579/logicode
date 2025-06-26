import { Award, Shield, Users, Zap } from "lucide-react"

const About = () => {
  return (  
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                О компании LogiCode
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мы — команда опытных разработчиков и дизайнеров, которые создают 
                цифровые продукты мирового уровня. Наша миссия — помочь бизнесу 
                адаптироваться к цифровой трансформации и достичь новых высот.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Надежность</h4>
                    <p className="text-gray-600 text-sm">Гарантируем качество и соблюдение сроков</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Инновации</h4>
                    <p className="text-gray-600 text-sm">Используем передовые технологии</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Команда</h4>
                    <p className="text-gray-600 text-sm">Профессиональные эксперты</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Качество</h4>
                    <p className="text-gray-600 text-sm">Высокие стандарты разработки</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
                    5+
                  </div>
                  <p className="text-2xl font-semibold text-gray-900 mb-2">лет опыта</p>
                  <p className="text-gray-600">в создании цифровых решений</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
 
export default About