import type {NextPage} from 'next';
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

export default function Home(props) {
    console.log(props);
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
                            <TableHeadCell modifier="paddingMilli">Game</TableHeadCell>
                            <TableHeadCell modifier="paddingMilli">Type</TableHeadCell>
                            <TableHeadCell modifier="paddingMilli">Time</TableHeadCell>
                            <TableHeadCell modifier="paddingMilli">Players</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.allPosts.map((post) => {
                            const {slug, title, players, time, type = []} = post;

                            return (
                                <TableRow key={slug}>
                                    <TableCell modifier="paddingMilli">
                                        <Link href={`/game/${slug}`}>{title}</Link>
                                    </TableCell>
                                    <TableCell modifier="paddingMilli">{type.join(', ')}</TableCell>
                                    <TableCell modifier="paddingMilli">{time}</TableCell>
                                    <TableCell modifier="paddingMilli">{players}</TableCell>
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
