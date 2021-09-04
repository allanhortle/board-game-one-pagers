import Head from 'next/head';
import {getAllPosts} from 'src/api';
import {Table, Th, Td} from 'components/Table';
import Link from 'components/Link';
import Text from 'components/Text';
import {Wrapper, Box} from 'components/Layout';

export default function Home(props: any) {
    return (
        <Box>
            <Head>
                <title>Board Game One Pagers</title>
            </Head>

            <Wrapper pt={4} pb={3}>
                <Text as="h1" textStyle="heading1">
                    Game List
                </Text>
            </Wrapper>

            <Wrapper>
                <Table>
                    <thead>
                        <tr>
                            <Th>Game</Th>
                            <Th>Type</Th>
                            <Th>Time</Th>
                            <Th>Players</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.allPosts.map((post: any) => {
                            const {slug, title, players, time, type = []} = post;

                            return (
                                <tr key={slug}>
                                    <Td>
                                        <Link href={`/game/${slug}`}>{title}</Link>
                                    </Td>
                                    <Td>{type.join(', ')}</Td>
                                    <Td>{time}</Td>
                                    <Td>{players}</Td>
                                </tr>
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
