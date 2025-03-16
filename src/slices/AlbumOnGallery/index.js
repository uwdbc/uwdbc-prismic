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
      <div>Shhs</div>
    </section>
  );
};

export default AlbumOnGallery;
