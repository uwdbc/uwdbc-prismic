import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
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
  console.log(slice.primary.background_image)
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
    </section>
  );
};

export default Hero;
