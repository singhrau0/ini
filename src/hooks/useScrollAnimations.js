import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Robot stays on hero page, no scroll animations needed for it
    
    // Background parallax only
    const backgrounds = document.querySelectorAll('[id^="section-"]');
    backgrounds.forEach((bg, index) => {
      gsap.to(bg, {
        scrollTrigger: {
          trigger: `#content-${index + 1}`,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: '15%',
      });
    });

    // Optional: Fade out robot as user scrolls past hero
    const robotContainer = document.querySelector('.robot-container');
    if (robotContainer) {
      gsap.to(robotContainer, {
        scrollTrigger: {
          trigger: '#content-1',
          start: 'bottom center',
          end: 'bottom top',
          scrub: 1,
        },
        opacity: 0,
        scale: 0.8,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};