import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {getPostBySlug, getAllPosts} from 'api';
import {MDXRemote} from 'next-mdx-remote';
import {List, OrderedList} from 'components/Affordance';
import {Table, Td, Th} from 'components/Table';
import Text from 'components/Text';
import Link from 'components/Link';
import {Wrapper, Box} from 'components/Layout';

export default function Post({post}: any) {
    const router = useRouter();
    if (!router.isFallback && !post?.data.slug) {
        return <ErrorPage statusCode={404} />;
    }

    const {title, type, players, time} = post.data;

    const components = {
        h1: (props: any) => <Text as="h1" mt={5} textStyle="heading1" {...props} />,
        h2: (props: any) => (
            <Text as="h2" mt={4} mb={2} borderBottom="1px solid" textStyle="heading2" {...props} />
        ),
        h3: (props: any) => <Text as="h3" mt={2} mb={1} textStyle="heading3" {...props} />,
        p: (props: any) => <Text as="p" mb={3} {...props} />,
        ul: (props: any) => <List mb={3} {...props} />,
        ol: (props: any) => <OrderedList mb={3} {...props} />,
        td: (p: any) => <Td {...p} borderTop="outline" />,
        th: Th,
        table: (p: any) => <Box overflowX="auto" mx="-1rem" px="1rem"><Table mb={3} {...p} /></Box>
    };
    return (
        <Wrapper px={[3, 3, 2]} pt={4}>
            <Text as="h1" textStyle="heading1" pt={5}>
                {title} rules
            </Text>
            <Text as="p" color="muted" mb={3}>
                {type} | {players} players | {time}
            </Text>
            <Link href="/">← Back to List</Link>
            <MDXRemote {...post.mdx} components={components} />
            <Link href="/">← Back to List</Link>
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
