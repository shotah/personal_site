// src/app/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link'; // Import the Link component

interface NavbarProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
    return (
        <header className={`bg-${theme === 'dark' ? 'dark' : 'light'} py-3 fixed-top`}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" className={`nav-link active navbar-link text-${theme === 'dark' ? 'light' : 'dark'}`}>Home</Link> {/* Use Link component */}
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link navbar-link text-${theme === 'dark' ? 'light' : 'dark'}`} href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link navbar-link text-${theme === 'dark' ? 'light' : 'dark'}`} href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link navbar-link text-${theme === 'dark' ? 'light' : 'dark'}`} href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link navbar-link text-${theme === 'dark' ? 'light' : 'dark'}`} href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <button onClick={toggleTheme} className={`btn btn-sm btn-outline-${theme === 'dark' ? 'light' : 'dark'}`} style={{ fontSize: '0.9rem' }}>
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
