import Header from '@/components/Header';
import Playground from '@/components/Playground';
import { trpc } from '@/utils/trpc';

export default function Home() {
    return (
        <main
            className={'flex flex-col items-center justify-start min-h-screen'}
        >
            <Header />
            <Playground />
        </main>
    );
}
