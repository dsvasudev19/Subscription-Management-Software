import { useState } from 'react'
import Router from './../Router';
import { Toaster } from 'react-hot-toast';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Header />
      <div className='flex m-5'>
      <h1 className='m-auto'>Employees Working in our Organization</h1>
      </div>
      <Employees /> */}
      <Toaster position='top-right' reverseOrder={true}/>
      <Router />
    </div>
  )
}

export default App
