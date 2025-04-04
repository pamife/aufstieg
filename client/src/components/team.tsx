import { teamMembers } from "@/lib/constants";
import colinMarvinImage from "../assets/colin_marvin.png";
import jermaineImage from "../assets/jermaine.png";

export default function Team() {
  return (
    <section id="team" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
            Unser Team
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Die DAP wird von einem engagierten Team geführt, das sich für die Interessen Deutschlands einsetzt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card-hover bg-white rounded-lg overflow-hidden shadow text-center">
              <div className="bg-[#0B3D91] h-24 relative">
                <div className="w-24 h-24 rounded-full bg-white p-1 absolute left-1/2 transform -translate-x-1/2 -bottom-12">
                  {member.name === "Colin & Marvin" ? (
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={colinMarvinImage} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : member.name === "Jermaine" ? (
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={jermaineImage} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-full bg-neutral-200 flex items-center justify-center">
                      <span className="text-[#0B3D91] text-2xl font-bold">{member.initials}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-16 px-6 pb-6">
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#0B3D91] mb-4">{member.position}</p>
                <p className="text-neutral-700 mb-4">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-neutral-600 hover:text-[#0B3D91] transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-[#0B3D91] transition-colors">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-neutral-600 hover:text-[#0B3D91] transition-colors">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
