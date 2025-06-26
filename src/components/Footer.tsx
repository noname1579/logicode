
const Footer = () => {
  return ( 
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 md:gap-20 gap-8">
            <div>
              <div className="flex">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-2xl font-bold">LogiCode</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Создаем цифровые решения будущего для современного бизнеса. 
                Ваш успех — наша миссия.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Услуги</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Веб-разработка</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Мобильные приложения</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Цифровые решения</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Аналитика данных</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 LogiCode. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
  )
}
 
export default Footer