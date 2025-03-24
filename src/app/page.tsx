"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
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

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-vh-100 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'} py-5`}>
      <header className={`bg-${theme === 'dark' ? 'dark' : 'light'} py-3 fixed-top`}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#hero" style={{ fontSize: '1.1rem' }}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about" style={{ fontSize: '1.1rem' }}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills" style={{ fontSize: '1.1rem' }}>Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience" style={{ fontSize: '1.1rem' }}>Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" style={{ fontSize: '1.1rem' }}>Contact</a>
                </li>
              </ul>
            </div>
            <button onClick={toggleTheme} className={`btn btn-sm btn-outline-${theme === 'dark' ? 'light' : 'dark'}`} style={{ fontSize: '0.9rem' }}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>
      <main className="container py-5">
        <section id="hero" className="py-5 text-center">
          <h1 className="display-4 fw-bold">Christopher Blodgett</h1>
          <p className="lead">Highly motivated Full-Stack Engineer</p>
          <p className="mt-3">
            <a href="mailto:christopherblodgett@gmail.com" className={`link-${theme === 'dark' ? 'light' : 'dark'} text-decoration-none`}>christopherblodgett@gmail.com</a> |{' '}
            <a href="https://linkedin.com/in/christopherblodgett" target="_blank" rel="noopener noreferrer" className={`link-${theme === 'dark' ? 'light' : 'dark'} text-decoration-none`}>linkedin.com/in/christopherblodgett</a>
          </p>
          <div className="mt-4 d-flex justify-content-center align-items-center gap-4">
            <div className="rounded-circle overflow-hidden shadow" style={{ width: '150px', height: '150px' }}>
              <Image
                src="/profile.jpg"
                alt="Christopher Blodgett Profile Picture"
                width={150}
                height={150}
                objectFit="cover"
              />
            </div>
            {/* Open to work frame would go here if we decide to add it with Bootstrap */}
          </div>
        </section>

        <section id="about" className="py-5">
          <h2>About</h2>
          <p className="lead">
            Highly motivated Full-Stack Engineer with a proven track record of developing scalable and maintainable web applications. Expertise in JavaScript/TypeScript, React, Python, Go, and AWS cloud technologies. Seeking a permanent, full-time position as a Senior Software Engineer to contribute to a company's growth and build impactful, innovative solutions. Passionate about finding a long-term professional home where I can continue to learn and grow.
          </p>
        </section>

        <section id="skills" className="py-5">
          <h2>Skills</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <h3>Front-End</h3>
              <ul className="list-unstyled">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="col">
              <h3>Back-End</h3>
              <ul className="list-unstyled">
                <li>Go</li>
                <li>JavaScript (Node.js)</li>
                <li>Python</li>
                <li>C++</li>
              </ul>
            </div>
            <div className="col">
              <h3>Cloud</h3>
              <ul className="list-unstyled">
                <li>AWS (API Gateway, Lambda, EC2, S3, CloudFormation)</li>
                <li>GCP (Compute, Storage)</li>
              </ul>
            </div>
            <div className="col">
              <h3>DevOps</h3>
              <ul className="list-unstyled">
                <li>Terraform</li>
                <li>CDK</li>
                <li>GitLab</li>
                <li>GitHub Actions</li>
                <li>Jenkins</li>
                <li>CI/CD</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </div>
            <div className="col">
              <h3>Databases</h3>
              <ul className="list-unstyled">
                <li>Postgres</li>
                <li>MySQL</li>
                <li>DynamoDB</li>
                <li>Datastore</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="py-5">
          <h2>Experience Highlights</h2>
          <div className="space-y-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Senior Software Developer (Contract) - Meta (via Magnit)</h5>
                <h6 className="card-subtitle mb-2 text-muted">February 2024 - February 2025</h6>
                <ul className="list-unstyled">
                  <li>Contributed to Meta AI plugins for Sports and POI search, developing key features and creating the foundation for ongoing evaluation.</li>
                  <li>Utilized AI for synthetic data generation and first-pass quality evaluations to enhance the efficiency of the testing process.</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Senior Software Developer (Contract) - Leica Biosystems (via Oxford)</h5>
                <h6 className="card-subtitle mb-2 text-muted">September 2023 - January 2024</h6>
                <ul className="list-unstyled">
                  <li>Developed the multi-threaded Go CLI application used to capture microscope slide images, including the server-side cloud component for AWS and GCP.</li>
                  <li>Managed the Docker container definitions for seamless deployment across Lambda, Cloud Run, and other containerized environments.</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Senior Developer (Contract) - Amazon Web Services (via Oxford)</h5>
                <h6 className="card-subtitle mb-2 text-muted">January 2022 - October 2022</h6>
                <ul className="list-unstyled">
                  <li>Delivered numerous features while also significantly improving the quality and maintainability of the codebase, including refactoring and removing thousands of lines of unused code.</li>
                  <li>Completely overhauled the lambda deployment process, transitioning to a fully automated and standardized CI/CD pipeline.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-5">
          <h2>Contact Me</h2>
          <p className="lead">Feel free to reach out!</p>
          <form action="YOUR_FORM_SUBMISSION_URL" method="POST" className="col-md-6 mx-auto">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}