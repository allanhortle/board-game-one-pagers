import Script from 'next/script';
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function GoatCounter() {
    const router = useRouter();
    useEffect(
        function sendGoatCounterEventsOnRoute() {
            const handleRouteChange = (path: string) => {
                // @ts-ignore
                window?.goatcounter?.count?.({
                    path
                });
            };
            router.events.on('routeChangeComplete', handleRouteChange);
            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        },
        [router.events]
    );
    return (
        <Script
            async
            data-goatcounter="https://boardgameonepagers.goatcounter.com/count"
            src="//gc.zgo.at/count.js"
            strategy="afterInteractive"
        />
    );
}
