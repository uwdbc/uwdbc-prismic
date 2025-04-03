import SlideView from "@/components/SlideView";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
/**
 * @typedef {import("@prismicio/client").Content.AlbumOnGallerySlice} AlbumOnGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AlbumOnGallerySlice>} AlbumOnGalleryProps
 * @param {AlbumOnGalleryProps}
 */
const AlbumOnGallery = async ({ slice }) => {
  const client = createClient();

  const album = await client.getByUID("album", slice.primary.albums.uid)
  const {data} = album;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="albumContainer"
      id={album.uid}
    >
      <SlideView type="h2">{data.album_name}</SlideView>
      <div className="photoContainer">
        {data.photos.map((item, index) => (
          <PrismicNextImage key={index} field={item.photo} />
        ))}
      </div>
    </section>
  );
};

export default AlbumOnGallery;
