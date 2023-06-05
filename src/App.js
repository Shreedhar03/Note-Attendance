import React, { createContext, useState, useEffect } from 'react'
import ButtonComponent from './ButtonComponent';
import Record from './Record';
import logo from './logo.svg'

const getPresentStudents = ()=>{
  return JSON.parse(localStorage.getItem("present")) || [];
}

export const AppContext = createContext()
function App() {
  const [presentStudents, setPresentStudents] = useState(new Set(getPresentStudents()))
  const [date, setDate] = useState(new Date().toDateString())
  const [rollNumbers, setRollNumbers] = useState([...presentStudents])
  useEffect(() => {
    setRollNumbers([...presentStudents])
    localStorage.setItem("present",JSON.stringify(Array.from(presentStudents)))
  }, [presentStudents])

  useEffect(()=>{
    if(new Date().getHours()===0){
      localStorage.clear();
    }
    console.log(new Date().getHours());
    setDate(new Date().toDateString())
  },[])
  return (

    <AppContext.Provider value={{ presentStudents, setPresentStudents, rollNumbers, setRollNumbers, date }}>
      <div className="contain max-w-[450px] mx-auto p-2">
        <div className='text-2xl font-semibold my-4 flex justify-center'>
          <img src={logo} className='w-8 text-[burnsilk]' alt="logo" />
          <p>NoteAttendance</p>
        </div>
        <h2 className='font-semibold italic text-2xl text-center py-5'>{date}</h2>
        <ButtonComponent />
        <Record />
      </div>
    </AppContext.Provider>
  );
}

export default App;
