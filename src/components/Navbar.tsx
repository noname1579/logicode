import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return ( 
    <nav className="fixed w-full z-50 transition-all bg-white duration-300 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <a href='#' className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg flex items-center justify-center">
                <img src="../../public/logo.png" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                LogiCode
              </span>
            </a>

            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>О нас</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2 text-blue-600 hover:text-blue-700 transition-colors">
                Войти
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all">
                Начать проект
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Меню (телефоны) */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
            <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
              <div className="flex justify-between items-center p-6 border-b">
                <span className="text-xl font-bold">Меню</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <a href="#services" className="block text-lg hover:text-blue-600 transition-colors">Услуги</a>
                <a href="#about" className="block text-lg hover:text-blue-600 transition-colors">О нас</a>
                <a href="#testimonials" className="block text-lg hover:text-blue-600 transition-colors">Отзывы</a>
                <a href="#contact" className="block text-lg hover:text-blue-600 transition-colors">Контакты</a>
                <div className="pt-6 border-t space-y-4">
                  <button className="w-full px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Войти
                  </button>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all">
                    Начать проект
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </nav>
  )
}
 
export default Navbar