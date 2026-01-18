import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), 'content');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as { title: string; date: string; description: string; image: string }),
    };
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}