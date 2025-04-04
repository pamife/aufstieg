import { useState } from "react";
import { programCategories } from "@/lib/constants";
import FullProgramAccordion from "./full-program-accordion";

export default function Program() {
  const [activeTab, setActiveTab] = useState("bildung");
  const [showFullProgram, setShowFullProgram] = useState(false);

  return (
    <section id="programm" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
            Unser Programm
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Die DAP hat klare Positionen zu den wichtigsten Themen unserer Zeit. Wir stehen für eine Politik der Vernunft und des Fortschritts.
          </p>
        </div>
        
        {/* Programmübersicht mit Tabs */}
        {!showFullProgram && (
          <div className="flex flex-wrap">
            {/* Program categories tabs */}
            <div className="w-full">
              <ul className="flex flex-wrap border-b border-neutral-300 mb-6">
                {programCategories.map((category) => (
                  <li key={category.id} className="mr-2">
                    <button 
                      className={`inline-block px-4 py-2 font-semibold border-b-2 transition-colors ${
                        activeTab === category.id 
                          ? 'text-[#0B3D91] border-[#0B3D91]' 
                          : 'text-neutral-600 hover:text-[#0B3D91] border-transparent'
                      }`}
                      onClick={() => setActiveTab(category.id)}
                    >
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Program content */}
            <div className="w-full">
              {programCategories.map((category) => (
                <div 
                  key={category.id}
                  id={category.id} 
                  className={`${activeTab === category.id ? 'block' : 'hidden'} bg-white p-6 rounded-lg shadow-md`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-1 flex flex-col justify-center items-center md:border-r border-neutral-200 p-4">
                      <i className={`${category.icon} text-5xl text-[#0B3D91] mb-4`}></i>
                      <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-center mb-2">
                        {category.title}
                      </h3>
                      <p className="text-center text-neutral-600">{category.subtitle}</p>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <ul className="space-y-4">
                        {category.points.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-check text-[#FFD700] mt-1 mr-3"></i>
                            <div>
                              <h4 className="font-bold">{point.title}</h4>
                              <p className="text-neutral-700">{point.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Vollständiges Parteiprogramm */}
        {showFullProgram && <FullProgramAccordion />}
        
        {/* Buttons für Programmansicht wechseln */}
        <div className="mt-10 text-center">
          <button 
            onClick={() => setShowFullProgram(!showFullProgram)}
            className="inline-block bg-[#0B3D91] hover:bg-[#072A66] text-white font-bold px-6 py-3 rounded-md transition-colors"
          >
            {showFullProgram 
              ? "Zurück zur Programmübersicht" 
              : "Vollständiges Parteiprogramm anzeigen"}
          </button>
        </div>
      </div>
    </section>
  );
}
