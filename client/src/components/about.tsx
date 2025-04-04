import ValueCard from "./value-card";
import { values } from "@/lib/constants";

export default function About() {
  return (
    <section id="ueber-uns" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B3D91]/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0B3D91]/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title relative inline-block">
            Unsere Vision & Grundwerte
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FFD700]"></span>
          </h2>
          <p className="section-subtitle mt-6">
            Die DAP steht für eine Politik, die Deutschland wieder nach vorne bringt und die Interessen der Bürger in den Mittelpunkt stellt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="transform transition-all duration-300 hover:translate-y-[-8px] hover:scale-[1.02]" 
                data-aos="fade-up" data-aos-delay={index * 100}>
              <ValueCard 
                icon={value.icon} 
                title={value.title} 
                description={value.description}
                list={value.list}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#programm" className="btn-outline inline-flex items-center">
            <span>Unser vollständiges Programm</span>
            <i className="fas fa-chevron-down ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
