import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-2">
                <span className="text-[#0B3D91] font-bold">DAP</span>
              </div>
              <span className="font-['Playfair_Display',serif] font-bold text-lg">Die Aufstiegspartei</span>
            </div>
            <p className="text-neutral-400 mb-4">"Der Weg nach oben!"</p>
            <p className="text-neutral-400">Für ein starkes, souveränes Deutschland mit Sicherheit, Wohlstand und traditionellen Werten.</p>
          </div>
          
          <div>
            <h4 className="font-['Playfair_Display',serif] font-bold text-lg mb-4">Quicklinks</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-400 hover:text-white transition-colors">Startseite</a></li>
              <li><a href="#ueber-uns" className="text-neutral-400 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#programm" className="text-neutral-400 hover:text-white transition-colors">Programm</a></li>
              <li><a href="#aktuelles" className="text-neutral-400 hover:text-white transition-colors">Aktuelles</a></li>
              <li><a href="#team" className="text-neutral-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#kontakt" className="text-neutral-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Playfair_Display',serif] font-bold text-lg mb-4">Kernthemen</h4>
            <ul className="space-y-2">
              <li><a href="#bildung" className="text-neutral-400 hover:text-white transition-colors">Bildung & Jugend</a></li>
              <li><a href="#umwelt" className="text-neutral-400 hover:text-white transition-colors">Umwelt & Klimaschutz</a></li>
              <li><a href="#soziales" className="text-neutral-400 hover:text-white transition-colors">Soziale Gerechtigkeit & Wirtschaft</a></li>
              <li><a href="#digitalisierung" className="text-neutral-400 hover:text-white transition-colors">Digitalisierung</a></li>
              <li><a href="#gesellschaft" className="text-neutral-400 hover:text-white transition-colors">Gesellschaft & Demokratie</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Playfair_Display',serif] font-bold text-lg mb-4">Unterstützen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Mitglied werden</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Spenden</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Newsletter abonnieren</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Veranstaltungen</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Merchandise</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-neutral-400 text-sm">&copy; {new Date().getFullYear()} DAP – Die Aufstiegspartei. Alle Rechte vorbehalten.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Impressum</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Datenschutz</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Cookies</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Rechtliches</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
