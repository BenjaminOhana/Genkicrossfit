import { Hero } from '../components/Hero';
import { HeroTransition } from '../components/HeroTransition';
import { Demystification } from '../components/Demystification';
import { BoxGallery } from '../components/BoxGallery';
import { HyroxBanner } from '../components/HyroxBanner';
import { Coaches } from '../components/Coaches';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { Schedule } from '../components/Schedule';
import { FAQ } from '../components/FAQ';
import { ClosingCTA } from '../components/ClosingCTA';

export function Home() {
    return (
        <div className="w-full">
            <Hero />
            <HeroTransition />
            <Demystification />
            <BoxGallery />
            <HyroxBanner />
            <Coaches />
            <Testimonials />
            <Pricing />
            <Schedule />
            <FAQ />
            <ClosingCTA />
        </div>
    );
}
