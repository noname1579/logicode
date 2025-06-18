import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const Testimonials = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(p => (p + 1) % testimonials.length)
    }, 5000)
  
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор, ТехноИнновации',
      content: 'LogiCode превзошла все наши ожидания. Команда профессиональная, сроки соблюдены, результат превосходный.',
      rating: 5
    },
    {
      name: 'Михаил Волков',
      position: 'IT-директор, Цифровые решения',
      content: 'Сотрудничество с LogiCode стало поворотным моментом для нашего бизнеса. Качество и инновационный подход на высшем уровне.',
      rating: 5
    },
    {
      name: 'Елена Сидорова',
      position: 'Основатель, StartupHub',
      content: 'Благодаря LogiCode мы смогли быстро вывести продукт на рынок. Их экспертиза в области современных технологий неоценима.',
      rating: 5
    }
  ]

  return ( 
      <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-xl text-gray-600">
              Отзывы наших довольных партнеров
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <h1 className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </h1>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
 
export default Testimonials