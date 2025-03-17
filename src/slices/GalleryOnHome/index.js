'use client'
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { useState, useEffect } from "react";
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

const GalleryOnHome = ({ slice }) => {
  const client = createClient()
  const [index, setIndex] = useState(0);
  const [albums, setAlbums] = useState([]);

  function handleMove(newVal) {
    setIndex(newVal)
  }

  useEffect(()=>{
    async function fetchAlbumData() {
      const albumData = await Promise.all(
        slice.primary.albums.map((item) => {
          if (isFilled.contentRelationship(item.album) && item.album.uid) {
            return client.getByUID("album", item.album.uid)
          }
        })
      )

      setAlbums(albumData);
    }

    fetchAlbumData();
  }, [0])

  const curAlbum = albums[index];
  return (
    <>{albums.length && 
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
        <a href={`/gallery/#${curAlbum.uid}`}>Explore More</a>
      </div>

      <div className="sp">
        {albums.map((item,i) => {
          if (i == index) {
            return <PrismicNextImage key={item.uid} field={item.data.secondary_image} style={{order:"1"}}/>
          } else if (i == (index+1)%albums.length) {
            return <PrismicNextImage key={item.uid} field={item.data.secondary_image} className="second" style={{order:"2"}} onClick={()=>handleMove(i)}/>
          } else if (i == (index+2)%albums.length) {
            return <PrismicNextImage key={item.uid} field={item.data.secondary_image} className="third" style={{order:"3"}} onClick={()=>handleMove(i)}/>
          } else {
            return ""
          }
        })}
      </div>

      <button className="direction" onClick={()=>handleMove((index+1)%albums.length)}>
        <div></div>
      </button>

      <button className="left direction" onClick={()=>handleMove((index+albums.length-1)%albums.length)}>
        <div></div>
      </button>

      <div className="balls">
        {albums.map((item,i) => (
          <button key={i} className={clsx(i==index && "selected")}></button>
        ))}
      </div>
    </section>
    }</>
  );
};

export default GalleryOnHome;
