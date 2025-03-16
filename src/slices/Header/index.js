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
    >
      <div className="headerContainer">
        <div className="overlay">
          <PrismicNextImage
            field={slice.primary.header_image}
            className="headerBackgroundImage"
          />
        </div>
        <h1 className="headerTitle glow">
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
    </section>
  );
};

export default Header;
