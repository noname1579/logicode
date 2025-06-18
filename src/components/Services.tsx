import { CheckCircle, ChevronRight, Code, Smartphone, Globe, BarChart3 } from "lucide-react"

const Services = () => {

  const services = [
    {
      icon: Code,
      title: 'Веб-разработка',
      description: 'Создаем современные веб-приложения с использованием передовых технологий React, Node.js и TypeScript.',
      features: ['Адаптивный дизайн', 'SEO оптимизация', 'Высокая производительность']
    },
    {
      icon: Smartphone,
      title: 'Мобильные приложения',
      description: 'Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android.',
      features: ['React Native', 'Flutter', 'Нативная разработка']
    },
    {
      icon: Globe,
      title: 'Цифровые решения',
      description: 'Комплексные цифровые решения для автоматизации бизнес-процессов и повышения эффективности.',
      features: ['Интеграция API', 'Облачные технологии', 'Микросервисная архитектура']
    },
    {
      icon: BarChart3,
      title: 'Аналитика данных',
      description: 'Системы аналитики и визуализации данных для принятия обоснованных бизнес-решений.',
      features: ['Big Data', 'Machine Learning', 'Интерактивные дашборды']
    }
  ]

  return (  
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по разработке и внедрению современных цифровых решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-blue-600 font-medium hover:text-blue-700 transition-colors group">
                  Узнать больше
                  <ChevronRight className="inline-block ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
 
export default Services