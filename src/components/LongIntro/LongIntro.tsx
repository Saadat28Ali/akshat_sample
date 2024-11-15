// Component imports ----------------------------

import Navlink from "../Navlink/Navlink";

// ----------------------------------------------


export default function LongIntro() {
    return (
        <article
        className="
        LongIntro

        bg-white
        text-black
        font-bold
        text-2xl
        flex
        flex-col
        items-center
        justify-center
        p-5
        "
        >
            <h1
            className="
            LongIntro_Heading

            text-4xl
            "
            > About us </h1>
            <p 
            className="
            LongIntro_Paragraph
            "> Longer introduction here </p>

            <Navlink key="Longintro" text="Find out more" path="/about" />
        </article>
    );
}