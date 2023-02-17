import ToastContainer from '@/components/ToastContainers';
import { ToastProvider } from '@/hooks/ToastContext';
import '@/styles/global.css';
import '@/styles/modal.css';
import '@/styles/mode-selector.css';
import '@/styles/response-box.css';
import '@/styles/slider.css';
import { trpc } from '@/utils/trpc';
import { Inter } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" enableSystem={true}>
            <ToastProvider>
                <QueryClientProvider client={queryClient}>
                    <Head>
                        <title>GPT Playground Clone</title>
                    </Head>
                    <div id="modal-root" className={inter.className}>
                        <ToastContainer />
                        <Component {...pageProps} />
                    </div>
                </QueryClientProvider>
            </ToastProvider>
        </ThemeProvider>
    );
}

export default trpc.withTRPC(App);
