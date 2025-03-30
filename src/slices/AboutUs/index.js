import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import SlideView from "@/components/SlideView";
/**
 * @typedef {import("@prismicio/client").Content.AboutUsSlice} AboutUsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutUsSlice>} AboutUsProps
 * @param {AboutUsProps}
 */

const components = {
  paragraph: ({children}) =>(
    <SlideView type="p" delay={0.2} className="about-us-para">{children}</SlideView>
  ),
  heading2: ({children}) => (
    <SlideView type="h2" delay={0.2} marginTop={5} >{children}</SlideView>
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
      id={slice.primary.uid.toLowerCase()}
    >
      <PrismicNextImage field={data.bg_icon} className="bg_icon"/>
      <p className="helloThere">Hello There</p>
      <PrismicRichText field={slice.primary.header} components={components}/>
      <PrismicRichText field={slice.primary.paragraph} components={components}/>
      {slice.primary.video_bool ? 
        <SlideView type="div" marginTop={-200} delay={0} className="video">
          <div dangerouslySetInnerHTML={{ __html: slice.primary.video_link }} />
        </SlideView>: ""}
      <div className="about__line"></div>
    </section>
  );
};

export default AboutUs;