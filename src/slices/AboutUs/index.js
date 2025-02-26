import { PrismicRichText } from "@prismicio/react";
/**
 * @typedef {import("@prismicio/client").Content.AboutUsSlice} AboutUsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutUsSlice>} AboutUsProps
 * @param {AboutUsProps}
 */

const AboutUs = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="about-us"
    >
      <p>Hello There</p>
      <PrismicRichText field={slice.primary.header}/>
      <PrismicRichText field={slice.primary.paragraph}/>
    </section>
  );
};

export default AboutUs;
