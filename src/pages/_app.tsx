import type {AppProps} from 'next/app';
import Clickable from '../components/Clickable';
import GoatCounter from './GoatCounter';
import '../global.css';

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <div className="pb-20">
                <div className="py-2 bg-blue-700 text-white flex justify-center">
                    <Clickable href="/">
                        <div className="flex px-4 gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" style={{fill: 'white'}}>
                                <path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z"></path>
                            </svg>
                            <span>Board Game One Pagers</span>
                        </div>
                    </Clickable>
                </div>
                <Component {...pageProps} />
            </div>
            <GoatCounter />
        </>
    );
}
