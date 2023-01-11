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
    <div style={{margin:'auto'}}
     className=' w-[470px] h-[250px]  sm:w-[800px] sm:h-[400px] md:w-[1000px] lg:w-[900px] lg:h-[420px]  flex relative   inline-block self-center items-center content-center canv   '>
      { chartData? <Line data={chartData} options={{responsive:true, }} /> : ''}
    </div>
  )
}
export default LineChart