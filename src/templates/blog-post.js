import React from 'react'
import Helmet from 'react-helmet'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const {title} = this.props.data.site.siteMetadata;

    return <div>
        <Helmet title={`${post.frontmatter.title} | ${title}`} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: 'block',
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{}}
        />
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
      }
    }
  }
`
