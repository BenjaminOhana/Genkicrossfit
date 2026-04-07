import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StickyMobileCTA } from '../components/StickyMobileCTA';

export function Layout() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-black text-cream selection:bg-wine selection:text-white flex flex-col relative">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <StickyMobileCTA />
        </div>
    );
}
