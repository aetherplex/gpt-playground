import '@/styles/global.css';
import '@/styles/slider.css';
import { trpc } from '@/utils/trpc';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />;
        </QueryClientProvider>
    );
}

export default trpc.withTRPC(App);
