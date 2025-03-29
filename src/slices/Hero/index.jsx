import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Discord from "/public/Discord";
import Instagram from "/public/Instagram";
import Linktree from "/public/Linktree";
import Membership from "/public/Membership";
import Email from "../../../public/Email";
import Link from "next/link";
import SlideView from "@/components/SlideView";

/**
 * @typedef {import("@prismicio/client").Content.BigHeaderSlice} BigHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BigHeaderSlice>} BigHeaderProps
 * @param {BigHeaderProps}
 */

const components = {
  heading1: ({ children }) => <SlideView type="h1" up={true} className="s-title">{children}</SlideView>,
};

const social_linker = {
  Discord: <Discord />,
  Instagram: <Instagram />,
  Linktree: <Linktree />,
  Membership: <Membership />,
  Email: <Email />,
};

const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="s-hero"
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
    >
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>

      <div className="home-content">
        <PrismicRichText field={slice.primary.header} components={components} />
        <SlideView type="div" up={false} className="btn-container">
          <Link href="#about" className="btn">
            About Us
          </Link>
          <Link href="#contact_us" className="btn">
            Contact Us
          </Link>
        </SlideView>
      </div>

      <div className="socials">
        {slice.primary.links_to_social &&
          slice.primary.links_to_social.map((item, index) => (
            <PrismicNextLink field={item.link} key={index} className="social">
              <p className="link-tag">{item.link_type}</p>
              <div className="social-icon">{social_linker[item.link_type]}</div>
            </PrismicNextLink>
          ))}
      </div>
      <section className="bottom-hero">
        <div className="slider"></div>
        <Link className="home-content__scroll" href="#about">
          <SlideView type="span">Scroll Down</SlideView>
        </Link>
      </section>
    </section>
  );
};

export default Hero;
