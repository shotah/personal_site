'use client';

import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';
import log from '../../lib/logger';

const GoogleAnalytics: React.FC = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      log('info', 'Initializing Google Analytics with ID:', GA_MEASUREMENT_ID);
      ReactGA.initialize(GA_MEASUREMENT_ID);
    } else {
      log(
        'warn',
        'Google Analytics Measurement ID not found. Tracking will be disabled.',
      );
    }
  }, [GA_MEASUREMENT_ID]);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const visibleSections = new Map<string, NodeJS.Timeout>();

    const trackSectionView = (sectionId: string) => {
      log('info', `Tracking section view: #${sectionId}`);

      ReactGA.send({
        hitType: 'pageview',
        page: `/#${sectionId}`,
      });

      ReactGA.event({
        category: 'Section View',
        action: 'Viewed Section',
        label: sectionId,
        nonInteraction: true,
      });
    };

    const sectionThresholds: Record<string, number> = {
      hero: 0.9,
      about: 1.0,
      github: 1.0,
      interests: 0.9,
      experience: 0.1,
      contact: 0.5,
      skills: 1.0,
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const sectionId = entry.target.id;

          if (entry.isIntersecting) {
            if (!visibleSections.has(sectionId)) {
              const timeout = setTimeout(
                () => {
                  trackSectionView(sectionId);
                  visibleSections.delete(sectionId);
                },
                sectionId === 'experience' ? 2000 : 1000,
              );
              visibleSections.set(sectionId, timeout);
            }
          } else {
            if (visibleSections.has(sectionId)) {
              clearTimeout(visibleSections.get(sectionId));
              visibleSections.delete(sectionId);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionId = section.id;
      const threshold = sectionThresholds[sectionId] ?? 0.5;

      log(
        'info',
        `Observing section: #${sectionId} with threshold: ${threshold}`,
      );
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
      visibleSections.forEach(timeout => clearTimeout(timeout));
    };
  }, [GA_MEASUREMENT_ID]);

  return null;
};

export default GoogleAnalytics;
