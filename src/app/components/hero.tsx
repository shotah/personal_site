// src/app/components/Hero.tsx
'use client';
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  theme: 'light' | 'dark';
}

const Hero = ({theme}: HeroProps) => {
  return (
    <section
      id="hero"
      className="py-5 text-center hero-section"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${theme === 'dark' ? '#00000099' : '#ffffff99'}, ${theme === 'dark' ? '#00000099' : '#ffffff99'}), url('/hero-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-content">
        <h1 className="section-header">Christopher Blodgett</h1>
        <p className="lead">
          Full-Stack Engineer | Building Scalable Web Applications
        </p>
        <p className="mt-3 d-flex justify-content-center gap-3">
          <a
            href="#contact"
            role="button"
            title="Go to Contact section"
            className={`link-${theme === 'dark' ? 'light' : 'dark'} text-decoration-none d-flex align-items-center gap-2`}
          >
            <FaEnvelope
              size={20}
              color={theme === 'dark' ? '#ffffff' : '#000000'}
            />
            Email
          </a>
          <a
            href="https://linkedin.com/in/christopherblodgett"
            target="_blank"
            rel="noopener noreferrer"
            className={`link-${theme === 'dark' ? 'light' : 'dark'} text-decoration-none d-flex align-items-center gap-2`}
          >
            <FaLinkedin
              size={20}
              color={theme === 'dark' ? '#ffffff' : '#000000'}
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/shotah"
            target="_blank"
            rel="noopener noreferrer"
            className={`link-${theme === 'dark' ? 'light' : 'dark'} text-decoration-none d-flex align-items-center gap-2`}
          >
            <FaGithub
              size={20}
              color={theme === 'dark' ? '#ffffff' : '#000000'}
            />
            GitHub
          </a>
        </p>
        <p className="mt-1">Seattle, WA</p>
        <div className="mt-4 d-flex justify-content-center align-items-center gap-4">
          <div
            className="rounded-circle overflow-hidden shadow"
            style={{width: '150px', height: '150px'}}
          >
            <Image
              src="/profile.jpg"
              alt="Christopher Blodgett Profile Picture"
              width={150}
              height={150}
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
        <div className="mt-4">
          <Link href="#contact" className={`btn btn-custom`}>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
