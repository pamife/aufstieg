import ValueCard from "./value-card";
import { values } from "@/lib/constants";

export default function About() {
  return (
    <section id="ueber-uns" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
            Unsere Vision & Grundwerte
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Die DAP steht für eine Politik, die Deutschland wieder nach vorne bringt und die Interessen der Bürger in den Mittelpunkt stellt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon} 
              title={value.title} 
              description={value.description}
              list={value.list}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
