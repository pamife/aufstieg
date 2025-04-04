export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-[#0B3D91] flex items-center justify-center mr-3">
        <span className="text-white font-bold text-xl">DAP</span>
      </div>
      <div>
        <div className="font-['Playfair_Display',serif] font-bold text-xl text-[#0B3D91]">Die Aufstiegspartei</div>
        <div className="text-xs text-neutral-600 italic">"Der Weg nach oben!"</div>
      </div>
    </div>
  );
}
