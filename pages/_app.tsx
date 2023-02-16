import '@/styles/global.css';
import '@/styles/mode-selector.css';
import '@/styles/response-box.css';
import '@/styles/slider.css';
import { trpc } from '@/utils/trpc';
import { Inter } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" enableSystem={true}>
            <QueryClientProvider client={queryClient}>
                <div id="modal-root" className={inter.className}>
                    <Component {...pageProps} />
                </div>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default trpc.withTRPC(App);
