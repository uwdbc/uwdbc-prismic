import { PrismicRichText } from "@prismicio/react";

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
      <PrismicRichText field={slice.primary.heading} components={
        {heading2: ({children})=>(
          <h2 className="glow">{children}</h2>
        )}
      }/>
      <PrismicRichText field={slice.primary.info} />
      <div className="calendar-container" dangerouslySetInnerHTML={{ __html: slice.primary.calendar_iframe }} />
    </section>
  );
};

export default Calendar;
