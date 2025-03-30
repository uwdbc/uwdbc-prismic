'use client'
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import SlideView from "@/components/SlideView";

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
  const [isTranstion, setTranstion] = useState(false);

  function handleMove(newVal) {
    setIndex(newVal)
    setTranstion(true);
    setTimeout(()=> {
      setTranstion(false);
    },300);
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
      id={slice.primary.uid.toLowerCase()}
      >
      <div className={clsx("overlay", isTranstion && "gallaryTransition")}></div>

      <Link href="/gallery">
        <PrismicRichText field={slice.primary.heading} components={components}/>
      </Link>
      <div className="albumInfo">
        <SlideView type="h3" className="glow">{curAlbum.data.album_name}</SlideView>
        <SlideView type="p" up={false}>{curAlbum.data.description}</SlideView>
        <Link href={`/gallery/#${curAlbum.uid}`}>Explore More</Link>
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
