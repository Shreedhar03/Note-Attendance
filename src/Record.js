import React, { useContext } from 'react'
import { AppContext } from './App'
export default function Record() {
  let { rollNumbers , date } = useContext(AppContext)

  const copyRollNos=()=>{
    const combined = `${date} - Attendance \n\n${rollNumbers}`
    navigator.clipboard.writeText(combined)
  }

  let filteredNumbers = rollNumbers.sort((a,b)=>{
    return a-b
  }).join(" , ")
  
  return (
    <div className='my-8 flex flex-col gap-2'>
      <div name='attendance' className='max-w-[450px] w-full mx-auto p-3 border-2 border-blue-500 break-words'>
        <p>{date} <br />Attendance SE-A </p>
        {filteredNumbers}
      </div>
      <button className='text-md bg-blue-500 text-white p-2' onClick={copyRollNos}>Copy Roll Nos</button>
    </div>
  )
}
