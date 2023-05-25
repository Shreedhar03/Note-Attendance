import React, { useContext } from 'react'
import { AppContext } from './App'
export default function Record() {
  let { rollNumbers } = useContext(AppContext)

  const copyRollNos=()=>{
    navigator.clipboard.writeText(rollNumbers)
  }
  
  return (
    <div className='my-8 flex flex-col gap-2'>
      <textarea name='attendance' value={rollNumbers} readOnly className='w-[95vw] mx-auto p-3 border-2 border-blue-500'></textarea>
      <button className='text-md bg-blue-500 text-white p-2' onClick={copyRollNos}>Copy Roll Nos</button>
    </div>
  )
}
