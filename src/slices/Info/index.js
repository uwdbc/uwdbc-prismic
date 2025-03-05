import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

/**
 * @typedef {import("@prismicio/client").Content.InfoSlice} InfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InfoSlice>} InfoProps
 * @param {InfoProps}
 */
const Info = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={slice.variation == "imaged" ? 
        {backgroundImage:`url(${slice.primary.image.url})`} 
        : {}}
      className={clsx("Info", slice.variation == "imaged" && "Info-Imaged")}
    >
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
