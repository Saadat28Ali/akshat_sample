// Component imports ----------------------------

import Hero from "../components/Hero/Hero"

// ----------------------------------------------

export default function AboutPage() {
    return (
        <section
        className="
        AboutPage

        flex
        flex-col
        items-center
        ">
            <Hero />

            <section
            className="
            AboutPage_TextSection

            w-[100%]

            text-2xl
            font-bold
            flex
            flex-col
            items-center
            justify-center
            bg-blue-500
            text-white
            p-16

            ">
                <h1
                className="
                AboutPage_Heading
                
                text-4xl
                "> About us </h1>
                <p> Long paragraph here </p>
            </section>

        </section>
    );
}