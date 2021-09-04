// @flow
import type {Node} from 'react';
import React from "react";
import MainLayout from './MainLayout';
import {Heading} from './Affordance';
import {Box} from './Layout';

type Props = {
    children: Node,
    pageContext: {
        frontmatter: {
            title: string
        }
    }
};

export default function PostLayout(props: Props): Node {
    const {children} = props;
    const {title} = props.pageContext.frontmatter;
    return <MainLayout {...props}>
        <Heading mb={3} position="sticky" top={0}>{title}</Heading>
        <Box maxWidth="50rem">
            {children}
        </Box>
    </MainLayout>;
}

