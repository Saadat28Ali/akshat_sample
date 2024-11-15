// Component imports ----------------------------

import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import LongIntro from "../components/LongIntro/LongIntro";
import OurServices from "../components/OurServices/OurServices";
import SmallIntro from "../components/SmallIntro/SmallIntro";

// ----------------------------------------------

export default function HomePage() {
    return (
        <div>
            <Hero />
            <SmallIntro />
            <OurServices />
            <LongIntro />
            <Footer />
        </div>
    );
}