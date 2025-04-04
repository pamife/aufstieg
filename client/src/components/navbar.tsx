import { useState, useEffect } from "react";
import Logo from "./logo";
import { useTransition } from "@/lib/transitionContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentSection, startTransition } = useTransition();

  // Handle smooth scrolling and transitions
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Extract the section ID from href (e.g., "#home" -> "home")
    const targetId = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;
    
    // Start the transition animation
    startTransition(targetId);
    
    // Scroll to the target section
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

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
          <a 
            href="#home" 
            className="transition-transform duration-300 hover:scale-105"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#home")}
          >
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
            <NavLink 
              href="#home" 
              active={currentSection === "home"} 
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#home")}
            >
              Startseite
            </NavLink>
            <NavLink 
              href="#ueber-uns" 
              active={currentSection === "ueber-uns"} 
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#ueber-uns")}
            >
              Über uns
            </NavLink>
            <NavLink 
              href="#programm" 
              active={currentSection === "programm"} 
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#programm")}
            >
              Programm
            </NavLink>
            <NavLink 
              href="#team" 
              active={currentSection === "team"} 
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#team")}
            >
              Team
            </NavLink>
            <NavLink 
              href="#kontakt" 
              active={currentSection === "kontakt"} 
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#kontakt")}
            >
              Kontakt
            </NavLink>
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
          <MobileNavLink 
            href="#home" 
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#home")}
          >
            Startseite
          </MobileNavLink>
          <MobileNavLink 
            href="#ueber-uns" 
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#ueber-uns")}
          >
            Über uns
          </MobileNavLink>
          <MobileNavLink 
            href="#programm" 
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#programm")}
          >
            Programm
          </MobileNavLink>
          <MobileNavLink 
            href="#team" 
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#team")}
          >
            Team
          </MobileNavLink>
          <MobileNavLink 
            href="#kontakt" 
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#kontakt")}
          >
            Kontakt
          </MobileNavLink>
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
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavLink({ href, active, children, onClick }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className={`nav-link py-2 px-3 text-neutral-800 hover:text-[#0B3D91] font-medium transition-all duration-300 ${active ? 'active' : ''}`}
      onClick={onClick}
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
