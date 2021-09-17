import Head from 'next/head';
import {getAllPosts} from 'api';
import {Table, Th, Td, Tr} from 'components/Table';
import Link from 'components/Link';
import Text from 'components/Text';
import {Wrapper, Box} from 'components/Layout';

export default function Home(props: any) {
    return (
        <Box>
            <Head>
                <title>Board Game One Pagers</title>
            </Head>

            <Wrapper px={[3, 3, 2]} py={5} pt={4}>
                <Text as="h1" mt={5} mb={3} textStyle="heading1">
                    Game List
                </Text>
                <Table width="100%">
                    <thead>
                        <tr>
                            <Th pl={2}>Game</Th>
                            <Th>Type</Th>
                            <Th>Time</Th>
                            <Th>Players</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.allPosts.map((post: any, index: number) => {
                            const {slug, title, players, time, type = []} = post;

                            return (
                                <Tr
                                    key={slug}
                                    backgroundColor={index % 2 === 0 ? 'bg1' : undefined}
                                >
                                    <Td py={2} pl={2}>
                                        <Link href={`/game/${slug}`}>{title}</Link>
                                    </Td>
                                    <Td>{type.join(', ')}</Td>
                                    <Td>{time}</Td>
                                    <Td>{players}</Td>
                                </Tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Wrapper>
        </Box>
    );
}

export async function getStaticProps() {
    const allPosts = await getAllPosts();
    return {
        props: {allPosts}
    };
}
