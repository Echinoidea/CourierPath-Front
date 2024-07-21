'use client';

import { CalendarDatum } from "@nivo/calendar";
import { Calendar } from "../charts/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dispatch, SetStateAction, useState } from "react";

function dropdownTriggerContent() {
  return (
    <div className='rounded-sm hover:bg-popover'>
      <p className='underline underline-offset-2'>Select Data Point</p>
    </div>
  )
}

const Dropdown = ({
  selectedDataPoint, 
  setSelectedDataPoint
}: {
  selectedDataPoint: string, 
  setSelectedDataPoint: Dispatch<SetStateAction<string>>
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger>{dropdownTriggerContent()}</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup value={selectedDataPoint} onValueChange={setSelectedDataPoint}>
          <DropdownMenuRadioItem value="total">Total</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="baseFare">Base Fare</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="tips">Tips</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medianHourly">Median Hourly</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
)

export default function CalendarWidget({
  data,
  title,
  subtitle,
  className
}: {
  data: CalendarDatum[];
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const [selectedDataPoint, setSelectedDataPoint] = useState('total');

  return (
    <div className={`${className}`}>
      {title && <p className='text-2xl'>{title}</p>}
      {subtitle && <p className='text-lg'>{subtitle}</p>}

      {/* <Dropdown selectedDataPoint={selectedDataPoint} setSelectedDataPoint={setSelectedDataPoint}/> */}
      
      <Calendar data={data}/>
    </div>
  )
}