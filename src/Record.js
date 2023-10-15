import React, { useContext } from 'react'
import { AppContext } from './App'
import wa from './assets/whatsapp.svg'

export default function Record() {
  let { rollNumbers, date, setPresentStudents, message } = useContext(AppContext)

  const copyRollNos = () => {
    const combined = `${date} - Attendance \n\n${rollNumbers}`
    navigator.clipboard.writeText(combined)
  }

  let filteredNumbers = rollNumbers.sort((a, b) => {
    return a - b
  })
  // const changeBtnValue = () => {
  // setBtnValue("Copied")
  //   setTimeout(() => {
  // setBtnValue("Copy Attendance")
  //   }, 1500)
  // }

  return (
    <div className='my-8 flex flex-col gap-2 w-[350px] items-start'>
      <div name='attendance' className='max-w-[350px] w-full mx-auto p-3 bg-[#212123] break-words text-white'>
        <p>{date} <br />Attendance TE-A </p>
        {filteredNumbers.map((ele, key) => {
          return <span key={key}>{ele}{`\t`}</span>
        })}
      </div>
      <h2 className='text-white'>Present Count : {filteredNumbers.length}</h2>
      <h2 className='text-white'>Absent Count : {79 - filteredNumbers.length}</h2>

      <div className="btn flex items-center justify-center w-full gap-3">
        <button className='text-md bg-[#dc2626] rounded-xl text-white py-3 px-2 w-2/5' onClick={() => { localStorage.clear(); setPresentStudents(new Set()) }}>Clear</button>
        <a href={`https://wa.me/?text=${message}`} className='text-md text-black px-2 py-3 w-3/5 rounded-xl bg-[#05543C] flex justify-center gap-2 items-center' onClick={() => { copyRollNos() }}>
          <img src={wa} alt="whatsapp" className='w-6' />
          <p className='text-white text-sm'>
            Share on What's App
          </p>
        </a>
      </div>
    </div>
  )
}

