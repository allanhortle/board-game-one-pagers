import React from 'react';
import Helmet from 'react-helmet';
import GatsbyLink from 'gatsby-link';

import {WindowTitle} from 'goose-css';
import {WindowContent} from 'goose-css';
import {Typography} from 'goose-css';
import {Box} from 'goose-css';
import {Text} from 'goose-css';
import {Link} from 'goose-css';

import {Table} from 'goose-css';
import {TableBody} from 'goose-css';
import {TableCell} from 'goose-css';
import {TableHeadCell} from 'goose-css';
import {TableHead} from 'goose-css';
import {TableRow} from 'goose-css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const {title, type, players, time} = post.frontmatter;

    return <div>
        <Helmet title={title} />
        <WindowTitle modifier={`navigation navigation${type[0]}`} element="h1">{title}</WindowTitle>
        <WindowContent>
            <Text modifier="emphasis muted capitalize block marginBottom">{type.join(', ')} | {players} players | {time}</Text>
            <Link to="/" element={GatsbyLink}>← Back to List</Link>
            <Link to="/" element={GatsbyLink}>Edit</Link>
            <Typography dangerouslySetInnerHTML={{ __html: post.html }} />
            <Link to="/" element={GatsbyLink}>← Back to List</Link>
        </WindowContent>

    </div>;
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                players
                time
                type
            }
        }
    }
`
