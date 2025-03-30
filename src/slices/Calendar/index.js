import { PrismicRichText } from "@prismicio/react";
import CalendarIcon from "/public/CalendarIcon";
import Link from "next/link";
import SlideView from "@/components/SlideView";

/**
 * @typedef {import("@prismicio/client").Content.CalendarSlice} CalendarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CalendarSlice>} CalendarProps
 * @param {CalendarProps}
 */

const components = {
  heading2: ({ children }) => (
    <SlideView type="h2" className="glow">{children}</SlideView>
  ),
  hyperlink: ({children, node}) => (
    <Link href={node.data.url}>{children}<CalendarIcon /></Link>
  ),
  paragraph: ({children}) => (
    <SlideView type="p" up={false}>{children}</SlideView>
  )
}

const Calendar = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
      className="calendar"
      id={slice.primary.uid.toLowerCase()}
    >
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>
      <div className="text-container">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.info} components={components} />
      </div>
      <div className="calendar-container" dangerouslySetInnerHTML={{ __html: slice.primary.calendar_iframe }} />
    </section>
  );
};

export default Calendar;
