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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-neutral-700 hover:text-[#0B3D91] transition-colors"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="#home" active={activeSection === "home"}>Startseite</NavLink>
            <NavLink href="#ueber-uns" active={activeSection === "ueber-uns"}>Über uns</NavLink>
            <NavLink href="#programm" active={activeSection === "programm"}>Programm</NavLink>
            <NavLink href="#aktuelles" active={activeSection === "aktuelles"}>Aktuelles</NavLink>
            <NavLink href="#team" active={activeSection === "team"}>Team</NavLink>
            <NavLink href="#kontakt" active={activeSection === "kontakt"}>Kontakt</NavLink>
            <a href="#" className="bg-[#8B0000] hover:bg-[#750000] text-white px-4 py-2 rounded-md transition-colors">
              Mitglied werden
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} bg-white w-full border-t border-neutral-200 lg:hidden`}>
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          <MobileNavLink href="#home" onClick={closeMobileMenu}>Startseite</MobileNavLink>
          <MobileNavLink href="#ueber-uns" onClick={closeMobileMenu}>Über uns</MobileNavLink>
          <MobileNavLink href="#programm" onClick={closeMobileMenu}>Programm</MobileNavLink>
          <MobileNavLink href="#aktuelles" onClick={closeMobileMenu}>Aktuelles</MobileNavLink>
          <MobileNavLink href="#team" onClick={closeMobileMenu}>Team</MobileNavLink>
          <MobileNavLink href="#kontakt" onClick={closeMobileMenu}>Kontakt</MobileNavLink>
          <a 
            href="#" 
            className="bg-[#8B0000] hover:bg-[#750000] text-white px-4 py-2 rounded-md transition-colors text-center"
            onClick={closeMobileMenu}
          >
            Mitglied werden
          </a>
        </div>
      </nav>
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
      className={`nav-link py-2 text-neutral-800 hover:text-[#0B3D91] relative ${active ? 'active' : ''}`}
    >
      <span>{children}</span>
      <span 
        className={`absolute bottom-[-3px] left-0 h-[2px] bg-[#FFD700] transition-all duration-300 ${
          active ? 'w-full' : 'w-0'
        }`}
      />
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="py-2 text-neutral-800 hover:text-[#0B3D91] border-b border-neutral-100"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
