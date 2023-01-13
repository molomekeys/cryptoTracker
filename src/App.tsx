import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LineChart from './components/LineChart'
import moment from 'moment'
import Home from './components/Home'
import CoinsCard from './components/CoinsCard'
import Table from './components/Table'

function App() {
  const [filterCoins,setFilterCoins]=useState('')
  const {data,isLoading}= useQuery({queryKey:['getCoins'],queryFn:async ()=>{
    const coinsData=await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=EUR')
    return coinsData.data.coins
  }})
  if(isLoading){
    return (<p>Data is Fetching</p>)
  }
  const allCategoriesElement=data?.filter((valu:any)=>{
    if(filterCoins ==''){
      return  valu
    }
    else {
      return valu?.name?.toLowerCase().includes(filterCoins.toLowerCase())
    }
  }).map((e:any)=>{
    return (<CoinsCard imgUrl={e.icon} price={e.price} title={e.name} key={e.name}/>)
  })
  console.log(data)
  return (
    
  <div className='flex flex-col w-full h-full gap-2 items-center'>
 
  
  <Home/>
  <div className='w-screen flex items-center justify-center py-4 lg:mt-10'>
    <input onChange={(e:any)=> setFilterCoins(e.target.value)} value={filterCoins}
    
    className='w-3/5 py-2 px-4 rounded-xl border-2 my-10' placeholder='look for specifique coins'/>
  </div>
 
  <div className='w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-20'>
    {allCategoriesElement}
  </div>
  <div className='w-full h-full text-left p-2 bg-slate-700'>
    <Table dataForTable={data}/>
  </div>
    </div>
  )
}

export default App
