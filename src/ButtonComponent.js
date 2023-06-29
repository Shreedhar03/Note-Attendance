import React, { useContext } from 'react'
import { AppContext } from './App'
import './index.css'

export default function ButtonComponent() {
  let { presentStudents, setPresentStudents } = useContext(AppContext)
  const addStudent = (rollNumber) => {
    // setPresentStudents([...presentStudents, rollNumber])

    const updatedState = new Set(presentStudents);
    if(!updatedState.has(rollNumber)){
      updatedState.add(parseInt(rollNumber))
    }else{
      updatedState.delete(rollNumber)
    }
    setPresentStudents(updatedState)
  }
  const renderButtons = () => {
    let buttons = [];
    for (let i = 1; i <= 79; i++) {
      buttons.push(
        <button key={i} className={`text-2xl rounded-lg self-start animate p-2 w-12 ${presentStudents.has(i) ? 'bg-green-600' : 'bg-red-600'}`} onClick={() => {i<10 ? addStudent(i) : addStudent(i) }}>{i<10 ? i : i}</button>
      )
    }

    return buttons
  }

  return (
    <div className=''>
      <section className='flex flex-wrap gap-3 max-w-[288px] mx-auto'>
      {renderButtons()}
      </section>
    </div>
  )
}
