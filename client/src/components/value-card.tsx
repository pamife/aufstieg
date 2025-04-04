import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  list?: string[];
}

export default function ValueCard({ icon, title, description, list }: ValueCardProps) {
  return (
    <div className="card-hover bg-neutral-100 p-6 rounded-lg border-l-4 border-[#0B3D91] transition-transform hover:translate-y-[-5px] hover:shadow-lg">
      <div className="text-[#0B3D91] mb-4">
        <i className={`${icon} text-3xl`}></i>
      </div>
      <h3 className="font-['Playfair_Display',serif] text-xl font-bold mb-2">{title}</h3>
      {list ? (
        <ul className="text-neutral-700 list-disc pl-5 space-y-1">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-neutral-700">{description}</p>
      )}
    </div>
  );
}
