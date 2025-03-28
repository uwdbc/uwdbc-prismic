"use client";
import { createClient } from "@/prismicio";
// import ThemeToggle from "/public/ThemeToggle";
import Hamburger from "/public/Hamburger";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Close from "../../public/Close";
import Link from "next/link";

export default function Header() {
  const [menuButtonClasses, setMenuButtonClasses] = useState("Menu-Button");
  const [data, setdata] = useState(undefined); // Store fetched data
  const [navOpen, setnavOpen] = useState(false);

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

  function handleClick() {
    setnavOpen(prev => !prev);
  }

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

        {navOpen ? "" :
        <button className={menuButtonClasses} onClick={handleClick}>
          <span>Menu</span>
          <Hamburger />
        </button>}

        { navOpen ?
          <div className="navbar">
          
          <button className="close" onClick={handleClick}>
            <Close />
            <p>Navigation</p>
          </button>

          <div className="pages">
            <div>
              <span><Link href="/">Home</Link></span>
              <Link href="/">About</Link>
              <Link href="/">Gallery</Link>
              <Link href="/">Calendar</Link>
              <Link href="/">Sponser Us</Link>
              <Link href="/">Contact Us</Link>
            </div>
            <div><span><Link href="/">Executive Team</Link></span></div>
            <div><span><Link href="/">Swag</Link></span></div>
          </div>

          <div className="socials">
            
          </div>
          
        </div>
        : ""}
      </div>
    </header>
  );
}
