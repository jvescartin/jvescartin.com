import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
      <main className="flex flex-col items-center gap-8 text-center">
        {/* Profile Image */}
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-52 md:w-52">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-4xl">
          Can&apos;t wait to meet you soon!
        </h1>
      </main>
    </div>
  );
}
