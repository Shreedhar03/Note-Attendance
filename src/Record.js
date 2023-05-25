import React, { useState,useContext, useEffect } from 'react'
import { AppContext } from './App'
export default function Record() {
  let { presentStudents } = useContext(AppContext)
  const [rollNumbers, setRollNumbers] = useState([...presentStudents])

  useEffect(()=>{
    setRollNumbers([...presentStudents])
  },[presentStudents])
  return (
    <div className='my-8'>
      <textarea name='attendance' value={rollNumbers} readOnly className='w-[95vw] mx-auto p-3'></textarea>
      <button className='text-md bg-blue-500 text-white p-2'>Copy Roll Nos</button>
    </div>
  )
}
