import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { createClient } from "@/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.InfoSlice} InfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InfoSlice>} InfoProps
 * @param {InfoProps}
 */
const Info = async ({ slice }) => {

  const client = createClient();
  const data = await client.getSingle("settings").then(res=>res.data);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={slice.variation == "imaged" ? 
        {backgroundImage:`url(${slice.primary.image.url})`} 
        : {}}
      className={clsx("Info", slice.variation == "imaged" && "Info-Imaged")}
    >
      <PrismicNextImage field={data.bg_icon} className={`bg_icon ${slice.primary.bg_icon_pos}`}/>
      {slice.variation == "imaged" ? <div className="Info-overlay"></div> : ""}
      <div className="text-container">
        <PrismicRichText field={slice.primary.heading} components={{
          heading2: ({children}) => (
            <h2 className="glow">{children}</h2>
          )
        }}/>
        <PrismicRichText field={slice.primary.paragraph} />
      </div>
    </section>
  );
};

export default Info;
