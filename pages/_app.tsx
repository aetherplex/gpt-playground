import '@/styles/global.css';
import '@/styles/mode-selector.css';
import '@/styles/response-box.css';
import '@/styles/slider.css';
import { trpc } from '@/utils/trpc';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" enableSystem={true}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default trpc.withTRPC(App);
