// src/app/components/Hero.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
    theme: 'light' | 'dark';
}

const Hero = ({ theme }: HeroProps) => {
    return (
        <section id="hero" className="py-5 text-center hero-section" style={{
            backgroundImage: `linear-gradient(to bottom, ${theme === 'dark' ? '#00000099' : '#ffffff99'}, ${theme === 'dark' ? '#00000099' : '#ffffff99'}), url('/hero-background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="hero-content">
                <h1 className="section-header">Christopher Blodgett</h1>
                <p className="lead">Full-Stack Engineer | Building Scalable Web Applications</p>
                <p className="mt-3">
                    <a href="mailto:christopherblodgett@gmail.com" className={`link-${theme === 'dark' ? 'light' : 'dark'} text-decoration-none`}>christopherblodgett@gmail.com</a> |{' '}
                    <a href="https://linkedin.com/in/christopherblodgett" target="_blank" rel="noopener noreferrer" className={`link-${theme === 'dark' ? 'light' : 'dark'} text-decoration-none`}>linkedin.com/in/christopherblodgett</a>
                </p>
                <p className="mt-1">
                    Seattle, WA
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
                </div>
                <div className="mt-4">
                    <Link href="#contact" className={`btn btn-custom`}>
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero;
