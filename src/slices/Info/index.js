import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { createClient } from "@/prismicio";
import SlideView from "@/components/SlideView";

/**
 * @typedef {import("@prismicio/client").Content.InfoSlice} InfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InfoSlice>} InfoProps
 * @param {InfoProps}
 */

const components = {
  heading2: ({ children }) => (
    <SlideView type="h2" className="glow">{children}</SlideView>
  ),
  paragraph: ({children}) => (
    <SlideView type="p" up={false}>{children}</SlideView>
  )
}

const Info = async ({ slice }) => {

  const client = createClient();
  const data = await client.getSingle("settings").then(res => res.data);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={slice.variation == "imaged" ?
        { backgroundImage: `url(${slice.primary.image.url})` }
        : {}}
      className={clsx("Info", slice.variation == "imaged" && "Info-Imaged")}
    >
      <PrismicNextImage field={data.bg_icon} className={`bg_icon ${slice.primary.bg_icon_pos}`} />
      {slice.variation == "imaged" ? <div className="Info-overlay"></div> : ""}
      <div className="text-container">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.paragraph} components={components}/>
      </div>
    </section>
  );
};

export default Info;
