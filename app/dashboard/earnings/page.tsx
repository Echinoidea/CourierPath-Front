'use client';

import MyBarChart from "@/components/data/charts/chartsjs-test";
import { LineGraph } from "@/components/data/charts/line-graph";
import CalendarWidget from "@/components/data/widgets/calendar";
import HistogramWidget from "@/components/data/widgets/histogram";
import LineWidget from "@/components/data/widgets/line-graph";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { dailyEarnings } from "@/placeholder-data/daily-earnings";
import { ChartOptions } from "chart.js";
import { Bar, Line } from "react-chartjs-2";

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
      backgroundColor: "rgba(250, 215, 160, 0.6)",
      borderColor: "rgba(250, 215, 160, 1)"
    }
  ]
}

const barData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets  : [
    {
      label: "Median Base Fare",
      data: [6.4, 7.5, 4.4, 3.3, 6.0, 5.4, 8.0],
      backgroundColor: "rgba(250, 215, 160, 1)",
    },
    {
      label: "Median Tips",
      data: [8.2, 7, 6, 6.45, 5, 4.40, 5.95, 9.25],
      backgroundColor: "rgba(255, 133, 117, 1)",
    }
  ],
}

const stackedBarOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Stacked Bar Chart',
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

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
    <main className="flex flex-col gap-4">
      
      {/* Financial overview */}
      <div className="flex flex-row gap-4">
        <Card className="basis-1/5">
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Total Earnings</CardTitle>
            <CardDescription className="text-base">Base fare + tips</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>$542</p>
          </CardContent>
        </Card>

        <Card className="basis-1/5">
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Median Hourly Income</CardTitle>
            <CardDescription className="text-base">Base fare + tips</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>$18.24</p>
          </CardContent>
        </Card>

        <Card className="basis-1/5">
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Average Earnings per Order</CardTitle>
            <CardDescription className="text-base">Base fare + tips</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>$6.34</p>
          </CardContent>
        </Card>

        <Card className="basis-1/5">
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Best Day of the Week</CardTitle>
            <CardDescription className="text-base">Highest average earnings on this day</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>Saturday</p>
          </CardContent>
        </Card>

        <Card className="basis-1/5">
          <CardHeader>
            <CardTitle className='text-2xl font-light'>Best Time of Day</CardTitle>
            <CardDescription className="text-base">Highest average earnings during this time</CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-3xl text-[#FAD7A0]'>Late-Night</p>
          </CardContent>
        </Card>
      </div>


      <div className="flex flex-row w-full">
        <div className="basis-1/2">
          {/* <LineWidget title="Hourly Wage Breakdown" data={lineData}/> */}
          <Line data={lineData}/>
        </div>

        <div className="basis-1/2">
          <Bar
          data={barData}
          options={stackedBarOptions}
          />
        </div>
        
      </div>
      

    </main>
  );
}

// w-[33vw] h-[40vh] relative


