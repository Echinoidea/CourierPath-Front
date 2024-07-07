'use client';

import CalendarWidget from "@/components/data/widgets/calendar";
import { CalendarDatum } from "@nivo/calendar";

const calendarData: CalendarDatum[] = [
  {
    "day": "2024-01-29",
    "value": 328
  },
  {
    "day": "2024-02-16",
    "value": 135
  }
]

export default function Dashboard() {
  return (
    <main className="flex flex-col">
      <div className='w-[33vw] h-[50vh] relative'>
        <CalendarWidget data={calendarData} title="Total Earnings" subtitle="Base Fare + Tips per day" className="w-full h-full"/>
      </div>
    </main>
  );
}


