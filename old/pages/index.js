import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import {Window} from 'goose-css';
import {WindowTitle} from 'goose-css';
import {WindowContent} from 'goose-css';
import {Table} from 'goose-css';
import {TableBody} from 'goose-css';
import {TableCell} from 'goose-css';
import {TableHeadCell} from 'goose-css';
import {TableHead} from 'goose-css';
import {TableRow} from 'goose-css';
import {Link} from 'goose-css';

class BlogIndex extends React.Component {
    render() {
        const {title} = this.props.data.site.siteMetadata;
        const {edges} = this.props.data.allMarkdownRemark;

        return (
            <div>
                <WindowTitle modifier="navigation" element="h1">
                    Board Game One Pagers
                </WindowTitle>
                <WindowContent>
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
                            {edges
                                .filter(({node}) => !node.frontmatter.draft)
                                .map(({node}) => {
                                    const {title, players, time, type = []} = node.frontmatter;

                                    return (
                                        <TableRow key={node.fields.slug}>
                                            <TableCell modifier="paddingMilli">
                                                <Link element={GatsbyLink} to={node.fields.slug}>
                                                    {title || node.fields.slug}
                                                </Link>
                                            </TableCell>
                                            <TableCell modifier="paddingMilli">
                                                {type.join(', ')}
                                            </TableCell>
                                            <TableCell modifier="paddingMilli">{time}</TableCell>
                                            <TableCell modifier="paddingMilli">{players}</TableCell>
                                        </TableRow>
                                    );
                                    return (
                                        <div key={node.fields.slug}>
                                            <h3></h3>
                                            <small>{node.frontmatter.date}</small>
                                            <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
                                        </div>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </WindowContent>
            </div>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        draft
                        players
                        time
                        type
                    }
                }
            }
        }
    }
`;
