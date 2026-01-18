'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="w-full border-t border-foreground/10 bg-background transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright Section */}
        <p className="text-sm text-foreground/60">
          © 2025 – 2026
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/j-escartin/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:scale-110"
            aria-label="LinkedIn"
          >
            <Image
              src={theme === "dark" ? "/linkedIn-white.png" : "/linkedIn-black.png"} 
              alt="LinkedIn"
              width={20} 
              height={20}
              className="object-contain"
            />
          </a>
          {/* <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:scale-110"
            aria-label="Github"
          >
            <Image
              src={theme === "dark" ? "/github-white.png" : "/github-black.png"} 
              alt="LinkedIn"
              width={20} 
              height={20}
              className="object-contain"
            />
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:scale-110"
            aria-label="X"
          >
            <Image
              src={theme === "dark" ? "/x-white.png" : "/x-black.png"} 
              alt="LinkedIn"
              width={20} 
              height={20}
              className="object-contain"
            />
          </a> */}
        </div>
      </div>
    </footer>
  );
}