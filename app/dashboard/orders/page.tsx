'use client';

import { DatePicker } from "@/components/custom/date-range";
import MyBarChart from "@/components/data/charts/chartsjs-test";
import { LineGraph } from "@/components/data/charts/line-graph";
import OrderDurationTable from "@/components/data/tables/order-insights";
import CalendarWidget from "@/components/data/widgets/calendar";
import HistogramWidget from "@/components/data/widgets/histogram";
import LineWidget from "@/components/data/widgets/line-graph";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { dailyEarnings } from "@/placeholder-data/daily-earnings";
import { OrderDurationTableItem } from "@/types/order-duration-table-item";
import { Chart, ChartOptions, registerables } from "chart.js";
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
      backgroundColor: "rgba(255, 133, 117, 0.8)",
      borderColor: "rgba(255, 133, 117, 1)"
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


// - **Order Volume**: Number of orders completed per time period.
// - **Order Duration**: Average time spent on each order.
// - **Order Distance**: Average distance traveled per order.
// - **Order Type**: Breakdown of short vs. long trips.
// | Order Volume [Bar Chart]               |
// | Order Duration & Distance [Dual-Line]  |
// | Order Type Distribution [Donut Chart]  |

// On days where you do short trips (less than 15 minutes from restaurant to customer), you earn 17% more

// (select time range) 
// These restaurants that you frequent are the best for offering short, high-paying orders, which align to your highest earning days
// These restaurants often offer longer trips during the selected time range

const orderDurationTableData : OrderDurationTableItem[] = [
  {
    restaurantName: "Salem's Fresh Eats",
    duration: "short",
    earnings: 6.54
  },
  {
    restaurantName: "Taco Bell, Fowler Ave",
    duration: "short",
    earnings: 5.40
  },
  {
    restaurantName: "McDonald's, Fowler Ave and 56th St",
    duration: "short",
    earnings: 4.32
  },
  {
    restaurantName: "Chick-fil-A, Fowler Ave",
    duration: "short",
    earnings: 7.25
  },
  {
    restaurantName: "Wendy's, Fletcher Ave",
    duration: "short",
    earnings: 5.80
  },
  {
    restaurantName: "Burger King, 56th St",
    duration: "short",
    earnings: 4.90
  },
  {
    restaurantName: "Chipotle, Fowler Ave",
    duration: "short",
    earnings: 6.75
  },
  {
    restaurantName: "Subway, Bruce B Downs Blvd",
    duration: "short",
    earnings: 3.50
  },
  {
    restaurantName: "Panda Express, Fowler Ave",
    duration: "short",
    earnings: 5.65
  },
  {
    restaurantName: "KFC, Busch Blvd",
    duration: "short",
    earnings: 4.45
  },
  {
    restaurantName: "Arby's, Busch Blvd",
    duration: "short",
    earnings: 3.90
  },
  {
    restaurantName: "Panera Bread, Bruce B Downs Blvd",
    duration: "short",
    earnings: 6.20
  },
  {
    restaurantName: "Five Guys, Fowler Ave",
    duration: "short",
    earnings: 7.80
  },
  {
    restaurantName: "Popeyes, Fletcher Ave",
    duration: "short",
    earnings: 5.00
  },
  {
    restaurantName: "Jimmy John's, Fletcher Ave",
    duration: "short",
    earnings: 4.25
  },
  {
    restaurantName: "Dunkin', Fowler Ave",
    duration: "short",
    earnings: 3.75
  },
  {
    restaurantName: "Moe's Southwest Grill, Bruce B Downs Blvd",
    duration: "short",
    earnings: 6.50
  },
  {
    restaurantName: "Zaxby's, Fowler Ave",
    duration: "short",
    earnings: 5.95
  },
  {
    restaurantName: "Pollo Tropical, Bruce B Downs Blvd",
    duration: "short",
    earnings: 4.70
  }
]

Chart.register(...registerables);

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-4">

      <div className="flex flex-row gap-4 items-start">
        <p className="text-2xl">Order Insights</p>
        <DatePicker/>
      </div>

      <div className="flex flex-row gap-6 ">
        {/* Financial overview */}
        <div className="flex flex-col basis-3/12 gap-4">
          <Card className="basis-1/6">
            <CardHeader>
              <CardTitle className='text-2xl font-light'>Orders Completed</CardTitle>
              <CardDescription className="text-base">Completed orders within the given date range</CardDescription>
            </CardHeader>

            <CardContent>
              <p className='text-3xl text-[#FAD7A0]'>128 Orders</p>
            </CardContent>
          </Card>

          <Card className="basis-1/6">
            <CardHeader>
              <CardTitle className='text-2xl font-light'>Average Duration</CardTitle>
              <CardDescription className="text-base">Average duration from acceptance to drop-off</CardDescription>
            </CardHeader>

            <CardContent>
              <p className='text-3xl text-[#FAD7A0]'>18 Minutes</p>
            </CardContent>
          </Card>

          <Card className="basis-1/6">
            <CardHeader>
              <CardTitle className='text-2xl font-light'>Average Distance</CardTitle>
              <CardDescription className="text-base">Average distance from restaurant to customer drop-off</CardDescription>
            </CardHeader>

            <CardContent>
              <p className='text-3xl text-[#FAD7A0]'>1.8 Miles</p>
            </CardContent>
          </Card>

          <Card className="basis-1/6">
            <CardHeader>
              <CardTitle className='text-2xl font-light'>Best Order Duration</CardTitle>
              <CardDescription className="text-base">Highest hourly wage when doing short vs. long trips</CardDescription>
            </CardHeader>

            <CardContent>
              <p className='text-3xl text-[#FAD7A0]'>Short trips</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col w-full basis-4/12 max-h-[79vh]">
          <p className="text-lg pb-4">Restaurants near you with valuable short trips</p>
          <OrderDurationTable caption={"Short orders"} orders={orderDurationTableData}/>
        </div>


        <div className="flex flex-col w-full basis-5/12">
          <div>
            {/* <LineWidget title="Hourly Wage Breakdown" data={lineData}/> */}
            <Line data={lineData}/>
          </div>

          <div>
            <Bar
            data={barData}
            options={stackedBarOptions}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

// w-[33vw] h-[40vh] relative


