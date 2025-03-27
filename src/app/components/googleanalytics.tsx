'use client';

import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';
import {usePathname, useSearchParams} from 'next/navigation';

const GoogleAnalytics: React.FC = () => {
  const trackingId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID; // Use NEXT_PUBLIC_ prefix for client-side env variables
  const pathname = typeof window !== 'undefined' ? usePathname() : null; // Ensure hooks are only used on the client
  const searchParams = typeof window !== 'undefined' ? useSearchParams() : null;

  useEffect(() => {
    if (trackingId) {
      ReactGA.initialize(trackingId);
    } else {
      console.warn(
        'Google Analytics Measurement ID not found. Tracking will be disabled.',
      );
    }
  }, [trackingId]);

  useEffect(() => {
    if (trackingId && pathname) {
      // Safely construct the URL for Google Analytics
      const searchParamsString = searchParams?.toString() || '';
      const url = searchParamsString
        ? `${pathname}?${searchParamsString}`
        : pathname;

      ReactGA.send({hitType: 'pageview', page: url});
    }
  }, [pathname, searchParams, trackingId]);

  return null;
};

export default GoogleAnalytics;
