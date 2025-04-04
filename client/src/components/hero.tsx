export default function Hero() {
  return (
    <section id="home" className="text-white py-16 md:py-28 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-['Playfair_Display',serif] text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              DAP – Die Aufstiegspartei
            </h1>
            <h2 className="text-[#FFD700] text-xl md:text-2xl lg:text-3xl italic font-semibold mb-6">
              "Der Weg nach oben!"
            </h2>
            <p className="text-lg mb-8">
              Für ein starkes, souveränes Deutschland mit Fokus auf nationale Sicherheit, wirtschaftliche Stärke und traditionelle Werte.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#programm" 
                className="bg-[#FFD700] text-[#0B3D91] font-bold px-6 py-3 rounded-md text-center hover:bg-[#FFDF33] transition-colors"
              >
                Unser Programm
              </a>
              <a 
                href="#ueber-uns" 
                className="bg-white text-[#0B3D91] font-bold px-6 py-3 rounded-md text-center hover:bg-neutral-100 transition-colors"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFD700]/20 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFD700]/20 rounded-full"></div>
              <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-['Playfair_Display',serif] text-[#0B3D91] text-2xl font-bold mb-4">
                  Unsere Versprechen:
                </h3>
                <ul className="space-y-4 text-neutral-800">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#FFD700] mr-2 mt-1"></i>
                    <span>Energie für Deutschland: Wiedereinstieg in die Kernenergie</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#FFD700] mr-2 mt-1"></i>
                    <span>Schutz der Grenzen: Konsequente Regulierung der Migration</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#FFD700] mr-2 mt-1"></i>
                    <span>Leistung muss sich lohnen: Bürgergeld reformieren, Arbeitsanreize schaffen</span>
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
