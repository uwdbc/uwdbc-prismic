"use client";
import { createClient } from "@/prismicio";
// import ThemeToggle from "/public/ThemeToggle";
import Hamburger from "/public/Hamburger";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Header() {
    const [menuButtonClasses, setMenuButtonClasses] = useState("Menu-Button");
    const [data, setdata] = useState(undefined); // Store fetched data

    useEffect(() => {
        // Scroll event listener
        const handleScroll = () => {
        if (window.scrollY >= 80) {
            setMenuButtonClasses(clsx("Menu-Button", "shaded"));
        } else {
            setMenuButtonClasses(clsx("Menu-Button"));
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Runs once on mount

    useEffect(() => {
        // Fetch data from Prismic
        const fetchData = async () => {
        const client = createClient();
        const response = await client.getSingle("settings");
        setdata(response.data);
        };

        fetchData();
    }, []); // Runs once on mount
    
    return (
        <header>
            <div className="right-side">
                {/* <label 
                htmlFor="themeToggle"
                className="themeToggle st-sunMoonThemeToggleBtn"
                type="checkbox" >
                    <input type="checkbox" id="themeToggle" className="themeToggleInput" />
                    <ThemeToggle />
                </label> */}

                <button className={menuButtonClasses}>
                    <span>Menu</span>
                    <Hamburger />
                </button>
            </div>
        </header>
    )
}