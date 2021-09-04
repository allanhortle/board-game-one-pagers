// @flow
import type {Node} from 'react';
import React from "react";
import {StaticQuery, graphql} from 'gatsby';
import MainLayout from './MainLayout';
import {SubHeading, List, ListItem, Link} from './Affordance';
import {Box} from './Layout';

type Props = {
    children: Node,
    pageContext: {
        frontmatter: {
            title: string
        }
    }
};

export default function FoodLayout(props: Props): Node {
    const {children, data} = props;
    return <MainLayout {...props}>
        {children}
        <SubHeading mb="3">Other Food</SubHeading>
        <StaticQuery
            query={graphql`
                query {
                    allMdx(filter:{fields: {source: {eq: "food"}}}) {
                        nodes {
                            fields {slug}
                            frontmatter {
                                title
                                date(formatString: "YYYY-MM-DD")
                            }
                        }
                    }
                }
            `}
            render={({allMdx}) => {
                return <List>
                    {allMdx.nodes.map(({frontmatter, fields}) => {
                        return <ListItem><Link key={fields.slug} to={fields.slug}>{frontmatter.title}</Link></ListItem>;
                    })}
                </List>;
            }}
        />
    </MainLayout>;
}

