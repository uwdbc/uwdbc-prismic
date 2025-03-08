import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";

import Discord from "/public/Discord";
import Instagram from "/public/Instagram";
import Linktree from "/public/Linktree";
import Membership from "/public/Membership";
import Email from "/public/Email";

const social_linker = {
  "Discord": <Discord />,
  "Instagram": <Instagram />,
  "Linktree": <Linktree />,
  "Membership": <Membership />,
  "Email": <Email />
}

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param {FooterProps}
 */
const Footer = async ({ slice }) => {
  const client = createClient();
  const page = await client.getSingle("settings");
  const data = page.data;

  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{backgroundImage:`url(${slice.primary.background_image.url})`}}
      className="contact"
      id="contact-us"
    >
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>
      <div className="long-stick"></div>

      <div className="contact-text">
        <span>Contact Us</span>
        <PrismicRichText field={slice.primary.small_paragraph} />
      </div>

      <div className="left-sec">
        <div>
          <h6>Where To Find Us</h6>
          <PrismicRichText field={slice.primary.location} />
        </div>

        <div>
          <h6>Email Us At</h6>
          <a href={`mailto:${slice.primary.email}`}>{slice.primary.email}</a>
        </div>
      </div>

      <div className="socials">
        {slice.primary.links_to_social && slice.primary.links_to_social.map((item, index) => (
          <PrismicNextLink field={item.link} key={index} className="social">
            <div className="social-icon">{social_linker[item.link_type]}</div>  
          </PrismicNextLink>
        ))}
      </div>

      <a href="/">
        <PrismicNextImage field={data.website_logo} className="logo"/>
      </a>

    </footer>
  );
};

export default Footer;
