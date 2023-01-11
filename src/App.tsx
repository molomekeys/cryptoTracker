import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const {data,isLoading}=useQuery({queryKey:['test'],queryFn:async ()=>{
    const dataResponse=axios.get('https://api.coinstats.app/public/v1/charts?period=1m&coinId=ethereum  ')
    return  (await dataResponse).data.charts
  }})
if(isLoading){
  return <p>We are in loading...</p>
}
  console.log(data)
  return (
    <div className="App">
     <h2>Hello word</h2>
    </div>
  )
}

export default App
