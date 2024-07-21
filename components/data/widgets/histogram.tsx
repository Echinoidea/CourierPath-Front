import { Histogram } from "../charts/histogram";
import { LineGraph } from "../charts/line-graph";

export default function HistogramWidget({
  data,
  title,
  subtitle,
  className
}: {
  data: any[];
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
      
      <Histogram data={data}/>
    </div>
  )
}