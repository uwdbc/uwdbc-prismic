'use client'
import { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.CarouselSlice} CarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarouselSlice>} CarouselProps
 * @type {import("react").FC<CarouselProps>}
 */
const Carousel = ({ slice }) => {
  useEffect(() => {
    const splide = new Splide("#image-carousel", {
      type: "loop", // Example option
      perPage: 4,
      breakpoints: {
        800: {
          perPage: 3,
        },
        500: {
          perPage: 1,
        },
      },
      autoplay: true,
    });

    splide.mount();
  }, []);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.uid.toLowerCase()}
      className="carousell"
    >
      <PrismicRichText field={slice.primary.heading} />
      <section id="image-carousel" className="splide" aria-label="Beautiful Images">
        <div className="splide__track">
          <ul className="splide__list">
            {slice.primary.images.map((item, index) => (
              <li className="splide__slide" key={index}>
                <PrismicNextImage field={item.image} />
              </li>
            ))}
          </ul>
        </div>
      </section>

    </section>
  );
};

export default Carousel;
