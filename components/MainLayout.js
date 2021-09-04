// @flow
import type {Node} from 'react';
import {StaticQuery, graphql} from 'gatsby';
import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {Wrapper, Box, Flex} from './Layout';
import {
    Table,
    TableCell,
    TableHeadCell,
    GlobalStyle,
    List,
    ListItem,
    Link,
    Label,
    Heading,
    SubHeading,
    Code,
    Quote,
    Text,
    Image
} from './Affordance';

type Props = {
    children: any,
    setDarkMode: Function,
    darkMode: boolean
};

export default function MainLayout(props: Props): Node {
    const {children, setDarkMode, darkMode} = props;
    const mdxComponents = {
        a: Link,
        blockquote: Quote,
        em: ({children}) => (
            <Text as="em" textStyle="em" my={3}>
                {children}
            </Text>
        ),
        h1: (props) => <Heading position="sticky" top={0} as="h1" mb={3} {...props} />,
        h2: (props) => <SubHeading mt={5} mb={3} {...props} />,
        h3: (props) => <Text as="h3" textStyle="h3" mt={3} {...props} />,
        img: (props) => <Image maxWidth="100%" {...props} />,
        inlineCode: ({children}) => (
            <Text as="code" textStyle="code" my={3}>
                {children}
            </Text>
        ),
        code: ({children}) => <Text as="code">{children}</Text>,
        li: ListItem,
        p: ({children}) => (
            <Text as="p" mb={3}>
                {children}
            </Text>
        ),
        pre: Code,
        strong: ({children}) => (
            <Text as="strong" textStyle="strong" my={3}>
                {children}
            </Text>
        ),
        table: Table,
        th: TableHeadCell,
        td: TableCell,
        ul: ({children}) => <List my={3}>{children}</List>,
        ol: ({children}) => (
            <List as="ol" my={3}>
                {children}
            </List>
        )
    };

    return (
        <MDXProvider components={mdxComponents}>
            <Wrapper p="3">
                <GlobalStyle />
                <Box flex="0 0 auto">
                    <Sidebar />
                </Box>
                <Box flex="0 1 auto" pb={7}>
                    {children}
                </Box>
            </Wrapper>
        </MDXProvider>
    );
}

function Sidebar(): Node {
    return (
        <>
            <Heading mt={5}>Allan Hortle</Heading>
            <Flex justifyContent="center" mb="3">
                <Text>⬥ ⬥ ⬥ ⬥</Text>
            </Flex>
            <Flex justifyContent="center" mb="3">
                <Box mx="2">
                    <Link activeClassName="active" to="/projects">
                        Projects
                    </Link>
                </Box>
                <Box mx="2">
                    <Link activeClassName="active" to="/notes">
                        Notes
                    </Link>
                </Box>
                <Box mx="2">
                    <Link activeClassName="active" to="/food">
                        Food
                    </Link>
                </Box>
            </Flex>
        </>
    );
}

function HeadingItem(props: {to?: string, href?: string, label?: string, children: any}): Node {
    const {to, href, label, children} = props;
    return (
        <ListItem>
            <Flex flexDirection={['column', 'row']}>
                <Box flexGrow="1">
                    <Link to={to} href={href}>
                        {children}
                    </Link>
                </Box>
                <Label>{label}</Label>
            </Flex>
        </ListItem>
    );
}

function Posts(): Node {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
                        edges {
                            node {
                                childMdx {
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        title
                                        date(formatString: "YYYY-MM-DD")
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={({allFile}) => {
                return (
                    <List>
                        {allFile.edges.map(({node}) => {
                            const {frontmatter, fields} = node.childMdx;
                            return (
                                <HeadingItem
                                    key={fields.slug}
                                    to={fields.slug}
                                    label={frontmatter.date}
                                >
                                    {frontmatter.title}
                                </HeadingItem>
                            );
                        })}
                    </List>
                );
            }}
        />
    );
}
