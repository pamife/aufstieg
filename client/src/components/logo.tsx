import logoImage from "../assets/logo.jpeg";

export default function Logo() {
  return (
    <div className="flex items-center group">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-transparent group-hover:border-[#FFD700] transition-all duration-300 shadow-md">
        <img src={logoImage} alt="DAP Logo" className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="font-['Playfair_Display',serif] font-bold text-xl text-[#0B3D91] group-hover:text-[#072A66] transition-colors duration-300">Die Aufstiegspartei</div>
        <div className="text-xs text-neutral-600 italic group-hover:text-[#0B3D91] transition-colors duration-300">"Der Weg nach oben!"</div>
      </div>
    </div>
  );
}
