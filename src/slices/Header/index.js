import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 *
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param {HeaderProps}
 */
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
          components={{
            heading1: ({ children }) => (
              <h1 className="headerTitle glow">{children}</h1>
            ),
          }}
        />
    </section>
  );
};

export default Header;
