/**
 * @typedef {import("@prismicio/client").Content.AlbumOnGallerySlice} AlbumOnGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AlbumOnGallerySlice>} AlbumOnGalleryProps
 * @param {AlbumOnGalleryProps}
 */
const AlbumOnGallery = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for album_on_gallery (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AlbumOnGallery;
