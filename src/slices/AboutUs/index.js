import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.AboutUsSlice} AboutUsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutUsSlice>} AboutUsProps
 * @param {AboutUsProps}
 */

const components = {
  paragraph: ({children}) =>(
    <p className="about-us-para">{children}</p>
  )
}

const AboutUs = async ({ slice }) => {
  const client = createClient();

  const data = await client.getSingle("settings").then(res=>res.data);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="about-us"
      id="about"
    >
      <PrismicNextImage field={data.bg_icon} className="bg_icon"/>
      <p className="helloThere">Hello There</p>
      <PrismicRichText field={slice.primary.header}/>
      <PrismicRichText field={slice.primary.paragraph} components={components}/>
      {slice.primary.video_bool ? 
        <div className="video">
          <div dangerouslySetInnerHTML={{ __html: slice.primary.video_link }} />
        </div>: ""}
      <div className="about__line"></div>
    </section>
  );
};

export default AboutUs;