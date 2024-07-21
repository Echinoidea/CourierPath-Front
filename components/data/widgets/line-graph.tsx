import { ChartData } from "chart.js";
import { LineGraph } from "../charts/line-graph";

export default function LineWidget({
  data,
  title,
  subtitle,
  className
}: {
  data: ChartData<'line'>;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  // const [selectedDataPoint, setSelectedDataPoint] = useState('total');

  return (
    <div className={`${className}`}>
      {title && <p className='text-2xl'>{title}</p>}
      {subtitle && <p className='text-lg'>{subtitle}</p>}

      {/* <Dropdown selectedDataPoint={selectedDataPoint} setSelectedDataPoint={setSelectedDataPoint}/> */}
      
      <LineGraph data={data}/>
    </div>
  )
}