import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.MerchPhotosSlice} MerchPhotosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MerchPhotosSlice>} MerchPhotosProps
 * @param {MerchPhotosProps}
 */
const MerchPhotos = async ({ slice }) => {
  const client = createClient();
  const data = await client.getSingle("settings").then(res => res.data);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="merchPhotos"
      id={slice.primary.uid.toLowerCase()}
    >
      <PrismicNextImage field={data.bg_icon} className={`bg_icon`} />
      <PrismicRichText field={slice.primary.heading} />
      <div className="photos" style={{zIndex:20}}>
        {slice.primary.photos.map((item, idx) => (
          <PrismicNextImage key={idx} field={item.image} />
        ))}
      </div>
    </section>
  );
};

export default MerchPhotos;
