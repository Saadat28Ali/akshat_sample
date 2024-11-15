// React imports --------------------------------

import { useState, useEffect } from "react";

// Module imports -------------------------------

import { NavLink, useLocation } from "react-router-dom";

// ----------------------------------------------

export default function Navlink(
    {
        key, 
        text, 
        path
    }:
    {
        key: string, 
        text: string, 
        path: string
    }
) {

    const location = useLocation();
    const [active, setActive] = useState<boolean>(location.pathname === path);

    useEffect(() => {
        setActive(location.pathname === path);
    }, [location]);

    return (
        <div
        className={
            (active) ? 
            `
            Navlink

            min-h-20

            font-bold
            flex
            text-lg
            justify-center
            items-center
            transition-all
            text-blue-500
            px-5
            select-none

            hover:scale-105
            `:
            `
            Navlink

            min-h-20

            font-bold
            flex
            text-lg
            justify-center
            items-center
            transition-all
            text-black
            px-5
            select-none

            hover:scale-105
            `
        }
        >
            <NavLink key={key} to={path}> {text} </NavLink>
        </div>
    );
}