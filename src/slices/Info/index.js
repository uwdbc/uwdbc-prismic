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
      className={clsx("Info", slice.variation == "imaged" && "Info-Imaged")}
      style= { slice.variation == "justText" ? {
        paddingBlock: `${slice.primary.size == 'sm' ? 4 : slice.primary.size == 'md' ? 2 : slice.primary.size == 'lg' ? 8 : "0px 8"}rem`
      } : {}}
      id={slice.primary.uid.toLowerCase()}
    >
      {slice.variation == "default" ? <PrismicNextImage field={data.bg_icon} className={`bg_icon ${slice.primary.bg_icon_pos}`} /> : ""}
      <div className="text-container">
        {slice.variation != "justText" ? <PrismicRichText field={slice.primary.heading} components={components} />: ""}
        {(slice.variation == "justText" && slice.primary.size == '0') ? 
          <PrismicRichText field={slice.primary.paragraph} />
        : <PrismicRichText field={slice.primary.paragraph} components={components}/>}
      </div>
      {slice.variation == "imaged" ? <PrismicNextImage field={slice.primary.image}/> : ""}
    </section>
  );
};

export default Info;
