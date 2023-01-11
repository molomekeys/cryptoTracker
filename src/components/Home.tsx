import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LineChart from './LineChart'
import moment from 'moment'
function Home() {
  const [idCoins, setIdCoins] = useState('bitcoin')
  const [changeDat,setChangeDat]=useState('1m')

  const {data,isLoading}=useQuery({queryKey:['test',idCoins,changeDat],queryFn:async ()=>{
    const dataResponse= await axios.get(`https://api.coinstats.app/public/v1/charts?period=${changeDat}&coinId=${idCoins}`)
    return   dataResponse.data
  }})

  return (
    <div className="flex flex-col gap-2 w-screen h-screen text-center items-center bg-slate-800 ">
     <h2 className=' text-gray-400 pt-4 w-full  text-5xl'>{idCoins[0].toUpperCase() + idCoins.slice(1)}</h2>
     <div className='flex gap-x-6 w-full pt-10  h-full items-center justify-center text-xs'>
     <button onClick={()=> setIdCoins('ethereum')} className='border-2 rounded-lg bg-slate-50 text-slate-800 p-2 text-sm'>Etherum</button>
     <button onClick={()=> setIdCoins('bitcoin')} className='border-2 rounded-lg bg-slate-50 text-slate-800 p-2 text-sm'>Bitcoin</button>
     <button onClick={()=> setIdCoins('solana')} className='border-2 rounded-lg bg-slate-50 text-slate-800 p-2 text-sm'>Solana</button>
     <button onClick={()=> setIdCoins('dogecoin')} className='border-2 rounded-lg bg-slate-50 text-slate-800 p-2 text-sm'>Dogecoin</button>
     </div>
     <div className='flex   bg-slate-50  m-2  rounded-xl text-xs  italic '>
        <button onClick={(e:any)=> setChangeDat('3m')} className=' rounded-lg bg-slate-50 text-slate-800 italic  hover:bg-gray-200  px-4 py-3 w-full h-full'>3m</button>
        <button onClick={(e:any)=> setChangeDat('6m')} className=' rounded-lg bg-slate-50 text-slate-800 p-2 italic hover:bg-gray-200 px-4 py-3 '>6m</button>
        <button onClick={(e:any)=> setChangeDat('1y')} className=' rounded-lg bg-slate-50 text-slate-800 p-2 italic  hover:bg-gray-200 px-4 py-3 '>Y</button>
        <button onClick={(e:any)=> setChangeDat('all')} className='rounded-lg bg-slate-50 text-slate-800 p-2 italic  hover:bg-gray-200  px-4 py-3 '>All</button>
     </div>
     
  
  <div className='flex w-screen h-screen items-center justify-center p-20 bg-slate-800'>
  <div className=' flex relative w-screen items-center justify-center bg-slate-800 '>  

  <LineChart chartData={{labels:data?.chart?.map((e:any)=> moment.unix(e[0]).format('MM/DD')),
  datasets:[{data: data?.chart?.map((e:any)=> e[1]),borderColor:'#256CCB',backgroundColor:'gray',pointStyle:false }]}}/>
 
</div>
<div>
</div>
  
</div>

    </div>
  )
}

export default Home
