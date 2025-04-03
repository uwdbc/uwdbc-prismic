import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import SlideView from "@/components/SlideView";

/**
 *
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param {HeaderProps}
 */
const components = {
  heading1: ({ children }) => (
    <SlideView type="h1" className="headerTitle glow">{children}</SlideView>
  ),
}

const Header = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="headerContainer"
    >
        <div className="overlay"></div>
        <PrismicNextImage
          field={slice.primary.header_image}
          className="headerBackgroundImage"
        />
        
        <PrismicRichText
          field={slice.primary.title}
          components={components}
        />
    </section>
  );
};

export default Header;
