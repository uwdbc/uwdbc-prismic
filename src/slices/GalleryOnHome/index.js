import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";

/**
 * @typedef {import("@prismicio/client").Content.GalleryOnHomeSlice} GalleryOnHomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryOnHomeSlice>} GalleryOnHomeProps
 * @param {GalleryOnHomeProps}
 */

const components = {
  heading2: (({children}) => (
    <h2 className="glow">{children}</h2>
  ))
}

const GalleryOnHome = async ({ slice }) => {
  const client = createClient()

  const albums = await Promise.all(
    slice.primary.albums.map((item) => {
      if (isFilled.contentRelationship(item.album) && item.album.uid) {
        return client.getByUID("album", item.album.uid)
      }
    })
  )


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="gallaryOnHome"
    >
      <div className="overlay"></div>

      <PrismicRichText field={slice.primary.heading} components={components}/>
      <div>
        {albums.map(item => (
          <div key={item.uid}>
            {item.uid}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryOnHome;
