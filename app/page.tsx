import { getSortedPostsData } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const posts = getSortedPostsData();

  return (
   <div className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="font-accent text-3xl mb-8">Latest Learnings</h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <article className="overflow-hidden rounded-xl border border-foreground/10 bg-background transition-all hover:shadow-lg hover:border-accent/30">
              <div className="relative h-48 w-full">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  {post.date}
                </span>
                <h3 className="font-accent mt-2 text-xl font-bold group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-foreground/70">
                  {post.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
