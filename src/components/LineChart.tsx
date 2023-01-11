import {Line} from 'react-chartjs-2';
import { Chart as ChartJS,
  CategoryScale,LinearScale,PointElement,LineElement
} from 'chart.js'
ChartJS.register(
    LineElement,CategoryScale,LinearScale,PointElement
)
import type { ChartData, ChartOptions } from 'chart.js';

interface LineProps {
    chartData?:ChartData<'line'>
}
const LineChart = ({chartData}:LineProps) => {
  return (
    <div className='w-screen h-full md:w-4/5 lg:w-4/5  flex   '>
      { chartData? <Line data={chartData} options={{responsive:true}} /> : ''}
    </div>
  )
}
export default LineChart