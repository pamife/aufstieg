import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ValueCardProps {
  icon: string;
  title: string;
  description?: string;
  list?: string[];
}

export default function ValueCard({ icon, title, description, list }: ValueCardProps) {
  return (
    <div className="card h-full bg-neutral-50 p-7 rounded-lg shadow-md hover:shadow-xl border-t-4 border-[#0B3D91] transition-all duration-300">
      <div className="text-[#0B3D91] mb-5">
        <div className="w-14 h-14 bg-[#0B3D91]/10 rounded-full flex items-center justify-center">
          <i className={`${icon} text-3xl`}></i>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#0B3D91]">{title}</h3>
      {list ? (
        <ul className="text-neutral-700 space-y-2">
          {list.map((item, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-angle-right text-[#FFD700] mt-1.5 mr-2"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
