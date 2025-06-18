import { 
  ArrowRight,
  ChevronDown
} from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {

  const stats = [
    { value: '199+', label: 'Завершенных проектов' },
    { value: '98%', label: 'Довольных клиентов' },
    { value: '5+', label: 'Лет на рынке' },
    { value: '24/7', label: 'Техническая поддержка' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигация */}
      <Navbar />

      {/* Главная */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mt-16 text-5xl md:text-7xl font-bold text-white md:mb-16 leading-tight">
            Цифровые решения
            <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            будущего
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-blue-100 my-8 max-w-3xl mx-auto leading-relaxed">
            Мы создаем инновационные технологические решения, которые трансформируют ваш бизнес 
            и выводят его на новый уровень в цифровой эпохе.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href='#contact' className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg text-md md:text-lg font-medium hover:shadow-2xl transition-all duration-300">
              Начать сотрудничество
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg text-lg font-medium border border-white/20 hover:bg-white/20 transition-all duration-300">
              Посмотреть наши работы
            </button>
          </div>

        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* Услуги */}
      <Services />

      {/* О нас */}
      <About />

      {/* Отзывы */}
      <Testimonials />

      {/* Контакты */}
      <Contact />

      {/* Футер */}
      <Footer />
    </div>
  )
}

export default App