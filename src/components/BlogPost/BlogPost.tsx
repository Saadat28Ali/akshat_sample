export default function BlogPost(
    {
        title, 
        author, 
        dateCreated, 
        content
    }:
    {
        title: string, 
        author: string, 
        dateCreated: string, 
        content: string
    }
) {
    return (
        <article
        className="
        BlogPost

        w-[100%]
        md:w-8/12
        rounded-xl
        shadow-[0px_5px_15px_2px_rgba(0,0,0,0.2)]

        text-black
        font-bold
        text-2xl
        mt-10
        p-5
        ">
            <h1
            className="
            BlogPost_heading

            rounded-t-xl
            border-b-2
            pb-2

            text-4xl
            "> {title} </h1>

            <h2
            className="
            BlogPost_author
            
            my-2

            text-neutral-500
            text-[0.7em]
            font-normal
            "> by {author}, {dateCreated} </h2>

            <p
            className="
            BlogPost_content

            my-5
            font-normal
            text-[0.8em]
            font-serif
            leading-[1.5]

            ">
                {content}
            </p>

        </article>
    );
}