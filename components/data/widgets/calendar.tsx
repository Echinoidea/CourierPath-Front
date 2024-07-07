import { CalendarDatum } from "@nivo/calendar";
import { Calendar } from "../charts/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Dropdown = () => (
      <DropdownMenu>
        <DropdownMenuTrigger>Select Data Point</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Total</DropdownMenuItem>
          <DropdownMenuItem>Base</DropdownMenuItem>
          <DropdownMenuItem>Tips</DropdownMenuItem>
          <DropdownMenuItem>Median Hourly</DropdownMenuItem>
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
  return (
    <div className={`${className}`}>
      {title && <p className='text-2xl'>{title}</p>}
      {subtitle && <p className='text-lg'>{subtitle}</p>}
      <div className="w-full">
        <Dropdown/>
      </div>
      
      <Calendar data={data}/>
    </div>
  )
}