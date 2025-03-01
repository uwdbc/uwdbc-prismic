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
    >
      Placeholder component for calendar (variation: {slice.variation}) Slices
    </section>
  );
};

export default Calendar;
