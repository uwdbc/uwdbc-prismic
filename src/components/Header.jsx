import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import ThemeToggle from "/public/ThemeToggle";
import Hamburger from "/public/Hamburger";

export default async function Header() {
    const client = createClient()
    const response = await client.getSingle("settings");
    const data = response.data;
    
    return (
        <header>
            <PrismicNextImage field={data.website_logo} className="site-logo"/>
            <div className="right-side">
                <label 
                htmlFor="themeToggle"
                className="themeToggle st-sunMoonThemeToggleBtn"
                type="checkbox" >
                    <input type="checkbox" id="themeToggle" className="themeToggleInput" />
                    <ThemeToggle />
                </label>

                <button>
                    <span>Menu</span>
                    <Hamburger />
                </button>
            </div>
        </header>
    )
}