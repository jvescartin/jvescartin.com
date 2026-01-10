import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Markdown from "markdown-to-jsx";



export default async function PostPage({ params}: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const fullPath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      {/* Article Header */}
      <header className="mb-12">
        <h1 className="font-accent text-4xl font-bold md:text-5xl lg:text-6xl text-foreground">
          {data.title}
        </h1>
        <div className="mt-6 flex items-center gap-4 text-sm text-foreground/60">
          <span className="text-accent font-medium uppercase tracking-widest">{data.date}</span>
          <span>•</span>
          <span>{data.author}</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative mb-12 h-75 md:h-122.5 w-full overflow-hidden rounded-2xl border border-foreground/10 shadow-xl">
        <Image src={data.image} alt={data.title} fill className="object-cover" priority />
      </div>

      {/* The Rendered Markdown */}
      <div className="font-base leading-relaxed text-foreground/90">
        <Markdown
          options={{
            overrides: {
              // Map Markdown H2 to your Nordic font-accent
              h2: {
                component: ({ children }) => (
                  <h2 className="font-accent text-3xl font-bold mt-12 mb-6 text-foreground">{children}</h2>
                ),
              },
              // Style links with your Nordic Teal accent
              a: {
                component: ({ children, ...props }) => (
                  <a {...props} className="text-accent underline underline-offset-4 hover:opacity-80 transition-opacity">
                    {children}
                  </a>
                ),
              },
              // Style paragraphs for readability
              p: {
                component: ({ children }) => (
                  <p className="mb-6 text-lg leading-8">{children}</p>
                ),
              },
              // Custom styling for code snippets
              code: {
                component: ({ children, className }) => (
                  <code className={`${className} bg-foreground/5 px-1.5 py-0.5 rounded font-mono text-sm border border-foreground/10`}>
                    {children}
                  </code>
                ),
              },
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </article>
  );
}