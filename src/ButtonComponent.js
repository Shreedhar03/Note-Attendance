import React, { useContext } from 'react'
import { AppContext } from './App'


export default function ButtonComponent() {
  let { presentStudents, setPresentStudents } = useContext(AppContext)
  const addStudent = (rollNumber) => {
    // setPresentStudents([...presentStudents, rollNumber])
    const updatedState = new Set(presentStudents);
    updatedState.add(rollNumber)
    setPresentStudents(updatedState)
  }
  const renderButtons = () => {
    let buttons = [];
    for (let i = 1; i <= 79; i++) {
      buttons.push(
        <button id={i} className='text-xl bg-slate-100 p-2 w-12' onClick={() => { addStudent(i) }}>{i}</button>
      )
    }

    return buttons
  }

  return (
    <div className='flex flex-wrap gap-2'>
      {renderButtons()}
    </div>
  )
}
