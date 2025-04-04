import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type TransitionContextType = {
  isTransitioning: boolean;
  previousSection: string | null;
  currentSection: string;
  startTransition: (to: string) => void;
  completeTransition: () => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousSection, setPreviousSection] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState('home');

  // Start a transition to a new section
  const startTransition = useCallback((to: string) => {
    if (to !== currentSection) {
      setIsTransitioning(true);
      setPreviousSection(currentSection);
      setCurrentSection(to);
    }
  }, [currentSection]);

  // Mark the transition as complete
  const completeTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  // Auto-complete transition after 700ms (safety net)
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Monitor scroll position to update current section
  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning) return; // Don't update during transition

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId &&
          sectionId !== currentSection
        ) {
          setPreviousSection(currentSection);
          setCurrentSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, isTransitioning]);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        previousSection,
        currentSection,
        startTransition,
        completeTransition,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
}