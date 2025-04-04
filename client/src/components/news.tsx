import { newsItems } from "@/lib/constants";

export default function News() {
  return (
    <section id="aktuelles" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
            Aktuelles
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Informieren Sie sich über die neuesten Entwicklungen und Veranstaltungen der DAP.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="card-hover bg-neutral-100 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <i className={`${item.iconClass} text-6xl text-gray-400`}></i>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className={`${item.type === 'Veranstaltung' ? 'bg-[#0B3D91]' : 'bg-[#8B0000]'} text-white text-xs px-2 py-1 rounded`}>
                    {item.type}
                  </span>
                  <span className="text-neutral-500 text-sm">{item.date}</span>
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-700 mb-4">{item.description}</p>
                <a href="#" className="text-[#0B3D91] hover:text-[#072A66] font-semibold">Weiterlesen →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-block border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white font-bold px-6 py-3 rounded-md transition-colors"
          >
            Alle Neuigkeiten
          </a>
        </div>
      </div>
    </section>
  );
}
