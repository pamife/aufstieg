import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { fullPartyProgram } from "@/lib/constants";

export default function FullProgramAccordion() {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-[#0B3D91] mb-6 font-['Playfair_Display',serif] text-center">
        Vollständiges Parteiprogramm
      </h3>
      
      <Accordion type="multiple" className="w-full">
        {/* Partei-Name und Slogan */}
        <AccordionItem value="name-slogan">
          <AccordionTrigger className="text-lg font-semibold">
            1. Name der Partei & Slogan
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-4">
              <p className="font-bold text-xl mb-2">{fullPartyProgram.name}</p>
              <p className="italic">Slogan: "{fullPartyProgram.slogan}"</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Vision und Grundwerte */}
        <AccordionItem value="vision">
          <AccordionTrigger className="text-lg font-semibold">
            2. {fullPartyProgram.vision.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-4">
              <h4 className="font-bold mb-2">Grundwerte:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                {fullPartyProgram.vision.values.map((value, index) => (
                  <li key={`value-${index}`}>{value}</li>
                ))}
              </ul>
              
              <h4 className="font-bold mb-2">Langfristige Ziele:</h4>
              <ul className="list-disc pl-6 space-y-2">
                {fullPartyProgram.vision.longTermGoals.map((goal, index) => (
                  <li key={`goal-${index}`}>{goal}</li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Kernthemen */}
        <AccordionItem value="core-themes">
          <AccordionTrigger className="text-lg font-semibold">
            3. Unsere Kernthemen
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-4 space-y-6">
              {fullPartyProgram.coreThemes.map((theme, themeIndex) => (
                <div key={theme.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-[#0B3D91] mb-2">
                    3.{themeIndex + 1} {theme.title}
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {theme.points.map((point, pointIndex) => (
                      <li key={`${theme.id}-point-${pointIndex}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Wahlversprechen */}
        <AccordionItem value="election-promises">
          <AccordionTrigger className="text-lg font-semibold">
            4. Unser Wahlversprechen
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-4">
              <ol className="list-decimal pl-6 space-y-2">
                {fullPartyProgram.electionPromises.map((promise, index) => (
                  <li key={`promise-${index}`}>{promise}</li>
                ))}
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Team */}
        <AccordionItem value="team">
          <AccordionTrigger className="text-lg font-semibold">
            5. Unser Team
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                {fullPartyProgram.team.map((member, index) => (
                  <li key={`team-${index}`}>
                    <span className="font-semibold">{member.role}:</span> {member.name}
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* Closing */}
        <AccordionItem value="closing">
          <AccordionTrigger className="text-lg font-semibold">
            6. Schlusswort
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-4">
              <p className="font-bold text-center text-xl">
                {fullPartyProgram.closing}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}