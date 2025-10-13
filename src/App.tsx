import { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Interests from './components/Interests';

function App() {
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

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={`min-vh-100 ${
        theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
      } py-5`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="container py-5">
        <Hero theme={theme} />
        <About />
        <Skills theme={theme} />
        <Interests />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
