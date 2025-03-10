/**
 * @typedef {import("@prismicio/client").Content.GalleryOnHomeSlice} GalleryOnHomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryOnHomeSlice>} GalleryOnHomeProps
 * @param {GalleryOnHomeProps}
 */
const GalleryOnHome = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for gallery_on_home (variation: {slice.variation})
      Slices
    </section>
  );
};

export default GalleryOnHome;
