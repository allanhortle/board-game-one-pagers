import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import {serialize} from 'next-mdx-remote/serialize';

const postsDirectory = join(process.cwd(), 'rules');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

type FrontMatter = {
    slug: string;
    draft: boolean;
};

export async function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {data, content} = matter(fileContents);
    const mdx = await serialize(content);
    const frontmatter = {...data, slug: realSlug} as FrontMatter;
    return {data: frontmatter, mdx};
}

export async function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
    return posts.map((ii) => ii.data).filter((ii) => !ii.draft);
}
