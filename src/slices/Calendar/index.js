import { PrismicRichText } from "@prismicio/react";
import CalendarIcon from "/public/CalendarIcon";

/**
 * @typedef {import("@prismicio/client").Content.CalendarSlice} CalendarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CalendarSlice>} CalendarProps
 * @param {CalendarProps}
 */
const Calendar = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{backgroundImage:`url(${slice.primary.background_image.url})`}}
      className="calendar"
    >
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>
      <div className="text-container">
        <PrismicRichText field={slice.primary.heading} components={{
          heading2: ({children})=>(
            <h2 className="glow">{children}</h2>
          )
        }}/>
        <PrismicRichText field={slice.primary.info} components={{
          hyperlink: ({children}) =>(
            <a>{children}<CalendarIcon /></a>
          )
        }}/>
      </div>
      <div className="calendar-container" dangerouslySetInnerHTML={{ __html: slice.primary.calendar_iframe }} />
    </section>
  );
};

export default Calendar;
