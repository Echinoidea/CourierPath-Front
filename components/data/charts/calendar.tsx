import {CalendarDatum, ResponsiveCalendar} from "@nivo/calendar";
import { dark } from "./theme";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
export const Calendar = ({
  data
}: {
  data : CalendarDatum[]
}) => (
    <ResponsiveCalendar
        data={data}
        from={data[0].day}
        to={data[data.length - 1].day}
        emptyColor="#1a1a1a"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: -50, right: 0, bottom: 0, left: 0 }}
        yearSpacing={40}
        monthBorderColor="#333333"
        dayBorderWidth={2}
        dayBorderColor="#262626"
        theme={dark}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 0,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left'
          }
        ]}
    />
)