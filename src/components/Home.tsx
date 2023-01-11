import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LineChart from './LineChart'
import moment from 'moment'
function Home() {
  const [idCoins, setIdCoins] = useState('bitcoin')


  const {data,isLoading}=useQuery({queryKey:['test',idCoins],queryFn:async ()=>{
    const dataResponse= await axios.get(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${idCoins}`)
    return   dataResponse.data
  }})

  return (
    <div className="flex flex-col gap-2 items-center w-screen h-screen text-center justify-center">
     <h2 className='text-2xl text-gray-400 pt-10 w-full'>{idCoins}</h2>
     <div className='flex gap-x-6 w-full h-full items-center justify-center'>
     <button onClick={()=> setIdCoins('ethereum')}>Etherum</button>
     <button onClick={()=> setIdCoins('bitcoin')}>Bitcoin</button>
     <button onClick={()=> setIdCoins('solana')}>Solana</button>
     <button onClick={()=> setIdCoins('dogecoin')}>Dogecoin</button>
     </div>
     
  
  
  <div className=' h-full w-full flex items-center justify-center '>  
  <LineChart chartData={{labels:data?.chart?.map((e:any)=> moment.unix(e[0]).format('MM/DD')),
  datasets:[{data: data?.chart?.map((e:any)=> e[1]),borderColor:'red', }]}}/>
</div>

    </div>
  )
}

export default Home
