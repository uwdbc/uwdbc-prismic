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
    >
      Placeholder component for about_us (variation: {slice.variation}) Slices
    </section>
  );
};

export default AboutUs;
