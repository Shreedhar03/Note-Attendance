import React, { createContext, useState, useEffect } from 'react'
import ButtonComponent from './ButtonComponent';
import Record from './Record';

const getPresentStudents = ()=>{
  return localStorage.getItem("present") || new Set();
}

export const AppContext = createContext()
function App() {
  const [presentStudents, setPresentStudents] = useState(new Set(JSON.parse(getPresentStudents())))
  const [date, setDate] = useState(new Date().toDateString())
  const [rollNumbers, setRollNumbers] = useState([...presentStudents])
  useEffect(() => {
    setRollNumbers([...presentStudents])
    localStorage.setItem("present",JSON.stringify(Array.from(presentStudents)))
  }, [presentStudents])

  setInterval(() => {
    setDate(new Date().toDateString())
  },)
  return (

    <AppContext.Provider value={{ presentStudents, setPresentStudents, rollNumbers, setRollNumbers, date }}>
      <div className="contain max-w-[450px] mx-auto p-2">
        <h1 className='text-2xl font-semibold my-4 text-center'>NoteAttendance</h1>
        <h2 className='font-semibold italic text-2xl text-center py-5'>{date}</h2>
        <ButtonComponent />
        <Record />
      </div>
    </AppContext.Provider>
  );
}

export default App;
