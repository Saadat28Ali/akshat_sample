// Module imports -------------------------------

import { useLoaderData, useNavigation } from "react-router-dom";

// Component imports ----------------------------

import BlogPost from "../components/BlogPost/BlogPost";

// ----------------------------------------------

export interface BlogPostInter {
    title: string, 
    author: string, 
    dateCreated: string, 
    content: string
}

export default function BlogPage(
) {

    const loadedData = useLoaderData() as Array<BlogPostInter>;
    console.log(loadedData);
    const navigation = useNavigation();

    if (navigation.state !== "idle") {
        return <></>
    }

    return (
        <div
        className="
        BlogPage

        w-[100%]

        flex
        flex-col
        items-center
        justify-center
        pt-16
        font-bold
        text-2xl
        ">
            <h1
            className="
            BlogPage_Heading
            
            border-b-4
            pb-2
            border-b-blue-500
            
            text-4xl

            ">
                Recent posts
            </h1>

            <section
            className="
            BlogPage_Posts

            w-[100%]

            flex
            flex-col
            items-center
            justify-start

            ">
                {
                    loadedData.map((postItem: BlogPostInter, index: number) => {
                        return (
                            <BlogPost 
                            key={index}
                            title={postItem.title} 
                            author={postItem.author} 
                            dateCreated={postItem.dateCreated} 
                            content={postItem.content} 
                            />
                        );
                    })
                }
            </section>
        </div>
    );
}