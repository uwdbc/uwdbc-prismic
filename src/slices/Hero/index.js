import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
// import { components } from "@/slices";
/**
 * @typedef {import("@prismicio/client").Content.BigHeaderSlice} BigHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BigHeaderSlice>} BigHeaderProps
 * @param {BigHeaderProps}
 */

const components = {
  heading1: ({children}) => (
    <h1 className="s-title">{children}</h1>
  )
}

const Hero = ({ slice }) => {

  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="s-hero"
      style={{backgroundImage:`url(${slice.primary.background_image.url})`}}
    >

      <div className="overlay"></div>
      <div className="shadow-overlay"></div>

      <div className="home-content">
        <PrismicRichText field={slice.primary.header} components={components} />
        <div className="btn-container">
          <a href="#about" className="btn">About Us</a>
          <a href="#contact-us" className="btn">Contact Us</a>
        </div>
      </div>

      <div className="socials">
        {slice.primary.links_to_social && slice.primary.links_to_social.map((item, index) => (
          <div key={index} className="social">
            <PrismicNextLink field={item.link} className="social-link"/>
            <>{item.link_type}</>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Hero;
