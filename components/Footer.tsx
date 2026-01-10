import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
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
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}