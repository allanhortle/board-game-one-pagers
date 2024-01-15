import Head from 'next/head';
import {getAllPosts} from 'api';
import Link from 'components/Link';
import classnames from 'classnames';

export default function Home(props: any) {
    return (
        <>
            <Head>
                <title>Board Game One Pagers</title>
            </Head>
            <div className="max-w-3xl px-4 mx-auto">
                <p className="mt-20 mb-4 text-lg font-bold">
                    Already know the game, just haven&apos;t played in a while.
                </p>
                <p className="mb-8">
                    Board Game One Pagers is a collection of concice rules so you can pick up all
                    the details and forget the 20 pages of lore and nonsense. All the rules are open
                    source markdown files. If you&apos;d like to contribute head over to{' '}
                    <a
                        className="text-blue-500 underline"
                        href="https://github.com/allanhortle/board-game-one-pagers"
                    >
                        Github
                    </a>{' '}
                    and open a PR.
                </p>
                <table className="text-left w-full">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Type</th>
                            <th>Time</th>
                            <th>Players</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.allPosts.map((post: any, index: number) => {
                            const {slug, title, players, time, type = []} = post;

                            return (
                                <tr
                                    key={slug}
                                    className={classnames({'bg-slate-200': index % 2 === 0})}
                                >
                                    <td className="p-1">
                                        <Link href={`/game/${slug}`}>{title}</Link>
                                    </td>
                                    <td>{type.join(', ')}</td>
                                    <td>{time}</td>
                                    <td>{players}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const allPosts = await getAllPosts();
    return {
        props: {allPosts}
    };
}
