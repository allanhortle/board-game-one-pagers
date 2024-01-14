import React from 'react';
import NextLink from 'next/link';

export default function Clickable({href, children}: {href: string; children: React.ReactNode}) {
    return (
        <NextLink href={href} passHref>
            {children}
        </NextLink>
    );
}
