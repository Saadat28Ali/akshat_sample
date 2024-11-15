export default function Hero() {
    return (
        <section
        className="
        
        h-[70vh]

        flex
        flex-col
        items-center
        justify-end
        relative

        "
        >
            <img src="https://placehold.co/600x600" 
            className="
            HeroImage

            absolute
            top-0
            -z-10
            "
            />
            <h1
            className="
            HeroText

            text-4xl
            font-bold
            "
            >
                Hero Text    
            </h1>  

            <p
            className="
            HeroSubtext

            text-2xl
            font-bold
            "
            >
                This is subtext for hero component.
            </p>
        </section>
    );
}