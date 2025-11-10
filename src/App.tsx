import { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Interests from "./components/Interests";

function App() {
  // Compute initial theme once, no effect needed
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // Update DOM + persist whenever theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`min-vh-100 ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
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
