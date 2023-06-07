import React, { useContext, useState } from 'react'
import { AppContext } from './App'
export default function Record() {
  let { rollNumbers, date,setPresentStudents } = useContext(AppContext)
  const [btnValue,setBtnValue] = useState("Copy Attendance")

  const copyRollNos = () => {
    const combined = `${date} - Attendance \n\n${rollNumbers}`
    navigator.clipboard.writeText(combined)
  }

  let filteredNumbers = rollNumbers.sort((a, b) => {
    return a - b
  })
  const changeBtnValue=()=>{
    setBtnValue("Copied✅")
    setTimeout(()=>{
      setBtnValue("Copy Attendance")
    },1500)
  }

  return (
    <div className='my-8 flex flex-col gap-2 w-[350px] items-start'>
      <div name='attendance' className='max-w-[350px] w-full mx-auto p-3 bg-[#212123] break-words text-white'>
        <p>{date} <br />Attendance SE-A </p>
        {filteredNumbers.map((ele,key)=>{
          return <span key={key}>{ele}{`\t`}</span>
        })}
      </div>
      <h2 className='text-white'>Present Count : {filteredNumbers.length}</h2>
      <h2 className='text-white'>Absent Count : {79-filteredNumbers.length}</h2>
      <button className='text-md bg-[#212123] text-white p-2 w-full' onClick={()=>{
        copyRollNos();
        changeBtnValue();

      }}>{btnValue}</button>
      <button className='text-md bg-[#212123] text-white p-2 w-full' onClick={()=>{
        localStorage.clear();
        setPresentStudents(new Set())
      }}>Clear</button>
    </div>
  )
}

