'use client';

import MyBarChart from "@/components/data/charts/chartsjs-test";
import CalendarWidget from "@/components/data/widgets/calendar";
import HistogramWidget from "@/components/data/widgets/histogram";
import LineWidget from "@/components/data/widgets/line-graph";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { dailyEarnings } from "@/placeholder-data/daily-earnings";

const data = [
  {
    id: 'Median Wage',
    data: [
      { x: '2024-07-01', y: 25 },
      { x: '2024-07-02', y: 27 },
      { x: '2024-07-03', y: 26 },
      { x: '2024-07-04', y: 28 },
      { x: '2024-07-05', y: 30 },
      // Add more data points as needed
    ],
  },
];


const lineData = {
  labels: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05'],
  datasets  : [
    {
      label: "Median Hourly Wage",
      data: [25, 27, 26, 28, 30],
      fill: true,
      backgroundColor: "rgba(250, 215, 160, 0.3)",
      borderColor: "rgba(250, 215, 160, 1)"
    }
  ]
}

const daysData = [
  { day: 'Monday', wage: 25 },
  { day: 'Tuesday', wage: 27 },
  { day: 'Wednesday', wage: 26 },
  { day: 'Thursday', wage: 28 },
  { day: 'Friday', wage: 30 },
  { day: 'Saturday', wage: 22 },
  { day: 'Sunday', wage: 24 },
];

export default function Dashboard() {
  return (
    <main className="grid grid-flow-row grid-rows-5 grid-cols-5 gap-4">
      
      {/* Financial overview */}
      <div className="grid col-span-full grid-flow-row grid-rows-1 grid-cols-5 gap-4">
        {/* <p className="col-span-full text-2xl">Financial Overview</p> */}

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Total Earnings</CardTitle>
            <CardDescription className="text-base">Base fare + tips</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>$542</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Median Hourly Income</CardTitle>
            <CardDescription className="text-base">Base fare + tips</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>$18.24</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Average Earnings per Order</CardTitle>
            <CardDescription className="text-base">Base fare + tips</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>$6.34</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Best Day of the Week</CardTitle>
            <CardDescription className="text-base">Highest average earnings on this day</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>Saturday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Best Time of Day</CardTitle>
            <CardDescription className="text-base">Highest average earnings during this time</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>Late-Night</p>
          </CardContent>
        </Card>
      </div>


      <div className="col-span-2 row-span-2">
        <LineWidget title="Median Hourly Wage" data={lineData}/>
      </div>
      

    </main>
  );
}

// w-[33vw] h-[40vh] relative


