import { useState, useEffect } from "react";
import Logo from "./logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="transition-transform duration-300 hover:scale-105">
            <Logo />
          </a>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-neutral-700 hover:text-[#0B3D91] transition-colors p-2 rounded-md hover:bg-neutral-100"
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}></i>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavLink href="#home" active={activeSection === "home"}>Startseite</NavLink>
            <NavLink href="#ueber-uns" active={activeSection === "ueber-uns"}>Über uns</NavLink>
            <NavLink href="#programm" active={activeSection === "programm"}>Programm</NavLink>
            <NavLink href="#team" active={activeSection === "team"}>Team</NavLink>
            <NavLink href="#kontakt" active={activeSection === "kontakt"}>Kontakt</NavLink>
            <a href="#" className="btn-primary ml-4">
              Mitglied werden
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white w-full border-t border-neutral-200 lg:hidden`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <MobileNavLink href="#home" onClick={closeMobileMenu}>Startseite</MobileNavLink>
          <MobileNavLink href="#ueber-uns" onClick={closeMobileMenu}>Über uns</MobileNavLink>
          <MobileNavLink href="#programm" onClick={closeMobileMenu}>Programm</MobileNavLink>
          <MobileNavLink href="#team" onClick={closeMobileMenu}>Team</MobileNavLink>
          <MobileNavLink href="#kontakt" onClick={closeMobileMenu}>Kontakt</MobileNavLink>
          <div className="pt-3 pb-2">
            <a 
              href="#" 
              className="btn-primary block text-center"
              onClick={closeMobileMenu}
            >
              Mitglied werden
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className={`nav-link py-2 px-3 text-neutral-800 hover:text-[#0B3D91] font-medium transition-all duration-300 ${active ? 'active' : ''}`}
    >
      <span>{children}</span>
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="py-3 px-4 text-neutral-800 hover:text-[#0B3D91] hover:bg-neutral-50 border-b border-neutral-100 transition-all duration-200 block rounded-md"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
