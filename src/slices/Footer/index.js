import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param {FooterProps}
 */
const Footer = ({ slice }) => {
  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{backgroundImage:`url(${slice.primary.background_image.url})`}}
      className="contact"
      id="contact-us"
    >
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>
      <div className="long-stick"></div>

      <div className="contact-text">
        <span>Contact Us</span>
        <PrismicRichText field={slice.primary.small_paragraph} />
      </div>

      <div className="left-sec">
        <div>
          <h6>Where To Find Us</h6>
          <PrismicRichText field={slice.primary.location} />
        </div>

        <div>
          <h6>Email Us At</h6>
          <a href={`mailto:${slice.primary.email}`}>{slice.primary.email}</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
