/**
 * @typedef {import("@prismicio/client").Content.MerchPhotosSlice} MerchPhotosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MerchPhotosSlice>} MerchPhotosProps
 * @param {MerchPhotosProps}
 */
const MerchPhotos = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for merch_photos (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MerchPhotos;
