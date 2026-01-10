"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-accent text-2xl font-bold text-accent">JVE</span>
          <span className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300">
            James Vincent Escartin
          </span>
        </Link>

        {/* Toggle at the right */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="group rounded-lg p-2 transition-colors hover:bg-foreground/5"
          aria-label="Toggle Theme"
        >
          <div className="h-5 w-5">
            {
              theme === "dark" ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5 text-accent" />
              )
            }
          </div>
        </button>
      </div>
    </header>
  )
}