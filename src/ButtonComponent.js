import React, { useContext } from 'react'
import { AppContext } from './App'


export default function ButtonComponent() {
  let { presentStudents, setPresentStudents } = useContext(AppContext)
  const addStudent = (rollNumber) => {
    // setPresentStudents([...presentStudents, rollNumber])

    const updatedState = new Set(presentStudents);
    if(!updatedState.has(rollNumber)){
      updatedState.add(rollNumber)
    }else{
      updatedState.delete(rollNumber)
    }
    setPresentStudents(updatedState)
  }
  const renderButtons = () => {
    let buttons = [];
    for (let i = 1; i <= 79; i++) {
      buttons.push(
        <button id={i} className={`text-xl p-2 w-12 ${presentStudents.has(i) ? 'bg-blue-500' : 'bg-slate-100'}`} onClick={() => { addStudent(i) }}>{i}</button>
      )
    }

    return buttons
  }

  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {renderButtons()}
    </div>
  )
}
