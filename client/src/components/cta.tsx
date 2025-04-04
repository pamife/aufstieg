export default function CTA() {
  return (
    <section className="py-16 bg-[#0B3D91] hero-pattern text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold mb-6">
          Werden Sie Teil der Aufstiegspartei!
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Gemeinsam können wir Deutschland wieder zu alter Stärke führen und eine Politik der Vernunft, Sicherheit und wirtschaftlichen Prosperität gestalten.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#" 
            className="bg-white text-[#0B3D91] font-bold px-8 py-4 rounded-md hover:bg-neutral-100 transition-colors"
          >
            Mitglied werden
          </a>
          <a 
            href="#" 
            className="bg-[#FFD700] text-[#0B3D91] font-bold px-8 py-4 rounded-md hover:bg-[#FFDF33] transition-colors"
          >
            Spenden
          </a>
        </div>
      </div>
    </section>
  );
}
