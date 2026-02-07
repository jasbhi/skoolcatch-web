'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎒</span>
            <span className="font-bold text-lg text-brand-navy">SkoolCatch</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#features" 
              className="text-medium-gray hover:text-brand-navy transition-colors font-medium"
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-medium-gray hover:text-brand-navy transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className="text-medium-gray hover:text-brand-navy transition-colors font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="#download"
            className="btn-primary text-sm py-2.5 px-5 md:py-3 md:px-6"
          >
            <span className="hidden md:inline">Start 14-Day Free Trial</span>
            <span className="md:hidden">Try Free</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
