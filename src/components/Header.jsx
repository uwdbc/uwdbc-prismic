"use client";
import { createClient } from "@/prismicio";
// import ThemeToggle from "/public/ThemeToggle";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";

import Hamburger from "/public/Hamburger";
import Close from "/public/Close";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { SiLinktree } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import Membership from "/public/Membership";

const social_linker = {
  "Discord": <FaDiscord style={{width:"1.4rem",height:"auto"}}/>,
  "Instagram": <IoLogoInstagram style={{width:"1.4rem",height:"auto"}}/>,
  "Linktree": <SiLinktree style={{width:"1.4rem",height:"auto"}}/>,
  "Membership": <Membership style={{width:"1.4rem",height:"auto"}}/>,
  "Email": <MdOutlineEmail style={{width:"1.4rem",height:"auto"}}/>
}

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
      const response = await client.getSingle("navbar");
      setdata(response.data);
    };
    fetchData();
  }, []); // Runs once on mount

  function handleClick() {
    if (navOpen) {
      setTimeout(()=>setnavOpen(prev => !prev), 200);
    } else {
      setnavOpen(prev => !prev)
    }
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
            { data.pages.map((item,index)=>(
              <div key={index}>
                <span><Link href={item.page.url} onClick={handleClick}>{item.display_name}</Link></span>
                {item.sub_pages?.toLowerCase().split(" ").map((id, i) => (
                  <Link key={i} href={`${item.page.url}#${id}`} onClick={handleClick}>{toCapitalize(id.replace("_", " "))}</Link>
                ))}
              </div>
            ))}
          </div>

          <div className="socials">
            {data.links_to_social?.map((item, index) => (
              <PrismicNextLink field={item.link} key={index} className="social">
                <div className="social-icon">{social_linker[item.link_type]}</div>  
              </PrismicNextLink>
            ))}
          </div>
          
        </div>
        : ""}
      </div>
    </header>
  );
}


function toCapitalize(str) {
  const strList =  str.split(" ");
  let res = ""
  strList.forEach(part => {
    res += " " + part.charAt(0).toUpperCase() + part.slice(1)
  })
  return res.slice(1)
}