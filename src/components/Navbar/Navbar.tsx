// Module imports -------------------------------

import Navlink from "../Navlink/Navlink";

// ----------------------------------------------

export interface NavLinkInter {
    text: string, 
    path: string
}

export default function Navbar(
    {
        links
    }:
    {
        links: Array<NavLinkInter>
    }
) {
    return (
        <nav
        className="
        Navbar
        
        w-[100%]
        shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]

        flex
        justify-between

        "
        >
            {
                links.map((linkItem: NavLinkInter, index: number) => {
                    return (
                        // <Link key={index} to={linkItem.path} > {linkItem.text} </Link>
                        <Navlink key={index.toString()} path={linkItem.path} text={linkItem.text} />
                    );
                })
            }
        </nav>
    )
}