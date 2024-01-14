import React from 'react';
import NextLink from 'next/link';

export default function Link({href, children}: {href: string; children: React.ReactNode}) {
    return (
        <NextLink href={href} passHref className="underline text-blue-500 visited:text-purple-500">
            {children}
        </NextLink>
    );
}
