import { Inter, Montserrat, Michroma } from "next/font/google";
import { clsx } from "clsx";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import "./globals.css";
import Header from "@/components/Header";

// Font Decleration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const michroma = Michroma({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-michroma',
  display: 'swap',
})

async function getSettings() {
  const client = createClient();

  const page = await client.getSingle("settings");
  return page
}

//Metadata Func
export async function generateMetadata() {
  const page = await getSettings();
  
  return {
    title: page.data.title || "UW Dragon Boat",
    description: page.data.description || "UWDBC is the perfect club for you",
    openGraph: {
      images: [ page.data.og_image.url || "" ],
    }
  }
}


export default async function RootLayout({ children }) {
  const page = await getSettings();
  
  return (
    <html lang="en" className={clsx(inter.variable, michroma.variable, montserrat.variable)}>
        <body>
        <a href="/">
            <PrismicNextImage field={page.data.website_logo} className="site-logo"/>
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
