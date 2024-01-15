import {useRouter} from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import {getPostBySlug, getAllPosts} from 'api';
import {MDXRemote} from 'next-mdx-remote';
import Link from 'components/Link';

export default function Post({post}: any) {
    const router = useRouter();
    if (!router.isFallback && !post?.data.slug) {
        return <ErrorPage statusCode={404} />;
    }

    const {title, type, players, time} = post.data;

    const components = {
        h1: (props: any) => <h1 className="text-3xl font-bold" {...props} />,
        h2: (props: any) => (
            <h2 className="mt-8 mb-2 border-b border-gray-400 text-xl font-bold" {...props} />
        ),
        h3: (props: any) => <h3 className="mt-2 mb-1 font-bold text-lg" {...props} />,
        p: (props: any) => <p className="mb-4" {...props} />,
        ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
        ol: (props: any) => <ol className="list-decimal pl-6 mb-4" mb={3} {...props} />,
        td: (props: any) => <td className="border-t border-gray-400" {...props} />,
        th: (props: any) => <th className="pr-4" {...props} />,
        table: (p: any) => (
            <div className="overflow-x-auto -mx-4 px-4">
                <table className="mb-4" {...p} />
            </div>
        )
    };
    return (
        <div className="max-w-3xl px-4 pt-24 mx-auto">
            <Head>
                <title>{`${title} rules`}</title>
            </Head>
            <h1 className="text-3xl text-center font-bold">{title} rules</h1>
            <p className="mb-16 text-center text-gray-500">
                {type} | {players} players | {time}
            </p>
            <MDXRemote {...post.mdx} components={components} />
            <Link href="/">← Back to List</Link>
        </div>
    );
}

export async function getStaticProps({params}: any) {
    const post = await getPostBySlug(params.slug);

    return {
        props: {
            post
        }
    };
}

export async function getStaticPaths() {
    const posts = await getAllPosts();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            };
        }),
        fallback: false
    };
}
