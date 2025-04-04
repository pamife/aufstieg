import logoImage from "../assets/logo.jpeg";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
        <img src={logoImage} alt="DAP Logo" className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="font-['Playfair_Display',serif] font-bold text-xl text-[#0B3D91]">Die Aufstiegspartei</div>
        <div className="text-xs text-neutral-600 italic">"Der Weg nach oben!"</div>
      </div>
    </div>
  );
}
