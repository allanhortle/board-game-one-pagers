import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {getPostBySlug, getAllPosts} from 'src/api';
import {MDXRemote} from 'next-mdx-remote';
import {Text, List, ListItem} from 'components/Affordance';
import {Wrapper} from 'components/Layout';

export default function Post({post}: any) {
    const router = useRouter();
    if (!router.isFallback && !post?.data.slug) {
        return <ErrorPage statusCode={404} />;
    }

    const components = {
        h1: (props: any) => <Text as="h1" mt={4} textStyle="heading1" {...props} />,
        h2: (props: any) => <Text as="h2" mt={4} textStyle="heading2" {...props} />,
        h3: (props: any) => <Text as="h2" mt={4} textStyle="heading3" {...props} />,
        ul: List,
        li: ListItem
    };
    return (
        <Wrapper>
            <MDXRemote {...post.mdx} components={components} />
        </Wrapper>
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
