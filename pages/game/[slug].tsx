import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {getPostBySlug, getAllPosts} from 'src/api';
import Head from 'next/head';
import markdownToHtml from 'src/markdownToHtml';
import {MDXRemote} from 'next-mdx-remote';
import {Text, List, ListItem} from 'components/Affordance';
import {Wrapper} from 'components/Layout';

export default function Post({post, morePosts, preview}) {
    console.log({post});
    const router = useRouter();
    if (!router.isFallback && !post?.data.slug) {
        return <ErrorPage statusCode={404} />;
    }

    const components = {
        h1: (props) => <Text as="h1" mt={4} textStyle="heading1" {...props} />,
        h2: (props) => <Text as="h2" mt={4} textStyle="heading2" {...props} />,
        h3: (props) => <Text as="h2" mt={4} textStyle="heading3" {...props} />,
        ul: List,
        li: ListItem
    };
    return (
        <Wrapper>
            <MDXRemote {...post.mdx} components={components} />
        </Wrapper>
    );
}

export async function getStaticProps({params}) {
    const post = await getPostBySlug(params.slug);

    return {
        props: {
            post
        }
    };
}

export async function getStaticPaths() {
    const posts = await getAllPosts();
    console.log(posts);

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
