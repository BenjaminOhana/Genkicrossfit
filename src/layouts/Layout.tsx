import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StickyMobileCTA } from '../components/StickyMobileCTA';

export function Layout() {
    return (
        <div className="min-h-screen bg-black text-cream selection:bg-wine selection:text-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <StickyMobileCTA />
        </div>
    );
}
