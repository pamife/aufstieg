export default function Hero() {
  return (
    <section id="home" className="text-white py-20 md:py-32 hero-pattern relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8">
            <h1 className="font-['Playfair_Display',serif] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
              DAP – Die Aufstiegspartei
            </h1>
            <h2 className="text-[#FFD700] text-xl md:text-2xl lg:text-3xl italic font-semibold mb-6 tracking-wide">
              "Der Weg nach oben!"
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-xl leading-relaxed">
              Für ein starkes, souveränes Deutschland mit Fokus auf nationale Sicherheit, wirtschaftliche Stärke und traditionelle Werte.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#programm" 
                className="btn-secondary group"
              >
                <span>Unser Programm</span>
                <i className="fas fa-arrow-right ml-2 transform transition-transform group-hover:translate-x-1"></i>
              </a>
              <a 
                href="#ueber-uns" 
                className="bg-white text-[#0B3D91] font-semibold px-6 py-3 rounded-md text-center hover:bg-neutral-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFD700]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFD700]/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                <h3 className="font-['Playfair_Display',serif] text-[#0B3D91] text-2xl font-bold mb-4">
                  Unsere Versprechen:
                </h3>
                <ul className="space-y-4 text-neutral-800">
                  <li className="flex items-start group">
                    <i className="fas fa-check-circle text-[#FFD700] mr-3 mt-1 group-hover:text-[#0B3D91] transition-colors duration-300"></i>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Energie für Deutschland: Wiedereinstieg in die Kernenergie</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="fas fa-check-circle text-[#FFD700] mr-3 mt-1 group-hover:text-[#0B3D91] transition-colors duration-300"></i>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Schutz der Grenzen: Konsequente Regulierung der Migration</span>
                  </li>
                  <li className="flex items-start group">
                    <i className="fas fa-check-circle text-[#FFD700] mr-3 mt-1 group-hover:text-[#0B3D91] transition-colors duration-300"></i>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Leistung muss sich lohnen: Bürgergeld reformieren, Arbeitsanreize schaffen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
