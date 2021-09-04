import Head from 'next/head';
import {getAllPosts} from 'src/api';
import {
    Text,
    Table,
    TableCell,
    TableHeadCell,
    TableHead,
    TableBody,
    TableRow,
    Link
} from 'components/Affordance';
import {Wrapper} from 'components/Layout';

export default function Home(props: any) {
    return (
        <Wrapper>
            <Head>
                <title>Board Game One Pagers</title>
                <meta
                    name="description"
                    content="Board game rules, but just enough to remember how to play."
                />
                <link rel="icon" href="/favicon.ico" />
                stylesheet
            </Head>

            <main>
                <Text as="h1" textStyle="heading1" textAlign="center" my={4}>
                    Board Game One Pagers
                </Text>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Game</TableHeadCell>
                            <TableHeadCell>Type</TableHeadCell>
                            <TableHeadCell>Time</TableHeadCell>
                            <TableHeadCell>Players</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.allPosts.map((post: any) => {
                            const {slug, title, players, time, type = []} = post;

                            return (
                                <TableRow key={slug}>
                                    <TableCell>
                                        <Link href={`/game/${slug}`}>{title}</Link>
                                    </TableCell>
                                    <TableCell>{type.join(', ')}</TableCell>
                                    <TableCell>{time}</TableCell>
                                    <TableCell>{players}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </main>
        </Wrapper>
    );
}

export async function getStaticProps() {
    const allPosts = await getAllPosts();
    return {
        props: {allPosts}
    };
}
