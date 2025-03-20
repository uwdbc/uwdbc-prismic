import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

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
      className="merchPhotos"
    >
      <PrismicRichText field={slice.primary.heading} />
      <div className="photos">
        {slice.primary.photos.map((item, idx) => (
          <PrismicNextImage key={idx} field={item.image} />
        ))}
      </div>
    </section>
  );
};

export default MerchPhotos;
