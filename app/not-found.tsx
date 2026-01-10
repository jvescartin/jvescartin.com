// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center transition-colors duration-300 bg-background">
      <div className="space-y-4">
        <h1 className="text-9xl font-accent font-bold text-accent">
          404
        </h1>
        
        <h2 className="text-3xl font-accent font-semibold text-foreground">
          Page Not Found
        </h2>

        <div className="pt-6">
          <Link 
            href="/" 
            className="inline-block rounded-md bg-accent px-8 py-3 text-sm font-medium text-background transition-transform hover:scale-105 active:scale-95"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}