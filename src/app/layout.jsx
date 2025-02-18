import { Inter, Open_Sans } from "next/font/google";
import { clsx } from "clsx";
import { createClient } from "@/prismicio";
import "./globals.css";

// Font Decleration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

//Metadata Func
export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("settings");
 
  return {
    title: page.data.title || "UW Dragon Boat",
    description: page.data.description || "UWDBC is the perfect club for you",
    openGraph: {
      images: [ page.data.og_image.url || "" ],
    },
  }
}
 

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.variable, openSans.variable)}>
      <body>
        {children}
      </body>
    </html>
  );
}
