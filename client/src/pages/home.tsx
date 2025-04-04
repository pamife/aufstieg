import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Program from "@/components/program";
import Team from "@/components/team";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Implement smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor && anchor.getAttribute('href') !== '#') {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: (targetElement as HTMLElement).offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="font-['Open_Sans',sans-serif] bg-neutral-100 text-neutral-800 flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Program />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
