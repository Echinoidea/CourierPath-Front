import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions, Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export function LineGraph({
  data
}: {
  data : ChartData<'line'>
}){
  return (
    <div>
      <Line data={data}/>
    </div>
  )
}