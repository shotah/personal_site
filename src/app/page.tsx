// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';
import GithubStats from './components/github';
import Interests from './components/interests';
import GoogleAnalytics from './components/googleanalytics';
import React from 'react';

export default function Home(): React.JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    let initialTheme: 'light' | 'dark' = 'light';

    if (storedTheme) {
      initialTheme = storedTheme === 'dark' ? 'dark' : 'light';
    } else if (prefersDark) {
      initialTheme = 'dark';
    }

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={`min-vh-100 ${
        theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
      } py-5`}
    >
      <GoogleAnalytics />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="container py-5">
        <Hero theme={theme} />
        <About />
        <Skills theme={theme} />
        <GithubStats username="shotah" theme={theme} />
        <Interests />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
