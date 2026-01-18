import { getSortedPostsData } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const posts = getSortedPostsData();

  return (
   <div className="mx-auto max-w-5xl px-4 py-12">      
      <div className="flex flex-col">
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <article className={`flex flex-col md:flex-row gap-6 py-10 transition-colors ${
              index !== posts.length - 1 ? "border-b border-foreground/10" : ""
            }`}>
              
              {/* Thumbnail - Rectangle, smaller and more subtle */}
              <div className="relative h-48 w-full md:w-64 shrink-0 overflow-hidden rounded-lg bg-foreground/5">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col justify-center grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    {post.date}
                  </span>
                  <span className="h-px w-8 bg-foreground/20"></span>
                </div>
                
                <h3 className="font-accent text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="mt-3 line-clamp-2 text-base text-foreground/70 leading-relaxed max-w-2xl">
                  {post.description}
                </p>
                
                <div className="mt-4 flex items-center text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Story →
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
