import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;

    &:visited {
        color: inherit;
    }
`;

export default function Link({href, children}: {href: string; children: React.ReactNode}) {
    return (
        <NextLink href={href} passHref>
            <StyledLink>{children}</StyledLink>
        </NextLink>
    );
}
