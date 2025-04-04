import React, { useEffect, useRef } from 'react';
import { useTransition } from '@/lib/transitionContext';
import { cn } from '@/lib/utils';

interface SectionTransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionId: string;
  children: React.ReactNode;
}

export function SectionTransition({
  sectionId,
  children,
  className,
  ...props
}: SectionTransitionProps) {
  const { isTransitioning, currentSection, previousSection, completeTransition } = useTransition();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle transition animation
  useEffect(() => {
    if (isTransitioning && sectionRef.current) {
      const isCurrent = currentSection === sectionId;
      const isPrevious = previousSection === sectionId;

      if (isCurrent) {
        // This is the section we're transitioning to
        sectionRef.current.classList.add('transition-in');
        sectionRef.current.classList.remove('transition-out');
        
        // Wait for animation to complete
        const timer = setTimeout(() => {
          if (sectionRef.current) {
            sectionRef.current.classList.remove('transition-in');
            completeTransition();
          }
        }, 500);
        
        return () => clearTimeout(timer);
      } else if (isPrevious) {
        // This is the section we're transitioning from
        sectionRef.current.classList.add('transition-out');
        sectionRef.current.classList.remove('transition-in');
        
        // Wait for animation to complete
        const timer = setTimeout(() => {
          if (sectionRef.current) {
            sectionRef.current.classList.remove('transition-out');
          }
        }, 500);
        
        return () => clearTimeout(timer);
      }
    }
  }, [isTransitioning, currentSection, previousSection, sectionId, completeTransition]);

  return (
    <div 
      ref={sectionRef}
      id={sectionId}
      className={cn(
        'transition-opacity duration-500 ease-in-out section-wrapper',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}