import { PrismicRichText } from "@prismicio/react";
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

const AboutUs = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="about-us"
      id="about"
    >
      <p>Hello There</p>
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