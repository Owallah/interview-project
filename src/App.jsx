import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  // const [count, setCount] = useState(0)

  // useEffect(()=> {
  //   const interval = setInterval(() => {
  //   setCount((previousCount) => previousCount + 1)
  //   }, 2000);
  //   return () => clearInterval(interval);
  // },[])


  return (
    <>
      {/* <p>{count}</p> */}
      <ProductList />
    </>
  )
}

export default App
