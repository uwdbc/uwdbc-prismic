import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import clsx from "clsx";

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
  let index = 0;

  const albums = await Promise.all(
    slice.primary.albums.map((item) => {
      if (isFilled.contentRelationship(item.album) && item.album.uid) {
        return client.getByUID("album", item.album.uid)
      }
    })
  )

  const curAlbum = albums[index];
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{backgroundImage:`url(${curAlbum.data.background_image.url})`}}
      className="gallaryOnHome"
    >
      <div className="overlay"></div>

      <PrismicRichText field={slice.primary.heading} components={components}/>
      <div className="albumInfo">
        <h3 className="glow">{curAlbum.data.album_name}</h3>
        <p>{curAlbum.data.description}</p>
        <a href="">Explore More</a>
      </div>

      <div className="sp">
        {albums.map(item => (
            <PrismicNextImage key={item.uid} field={item.data.secondary_image} />
        ))}
      </div>

      <div className="balls">
        {albums.map((item,i) => (
          <button key={i} className={clsx(i==index && "selected")}></button>
        ))}
      </div>
    </section>
  );
};

export default GalleryOnHome;
