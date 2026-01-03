"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <h1 className="font-accent text-xl font-bold text-foreground">James Vincent Escartin</h1>

        {/* Toggle at the right */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="group rounded-lg p-2 transition-colors hover:bg-foreground/5"
          aria-label="Toggle Theme"
        >
          <div className="h-5 w-5">
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5 text-accent" />
              )
            ) : (
              /* A placeholder div to keep the space while mounting */
              <div className="h-5 w-5" />
            )}
          </div>
        </button>
      </div>
    </header>
  )
}