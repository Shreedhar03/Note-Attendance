import React, { createContext, useState, useEffect } from 'react'
import ButtonComponent from './ButtonComponent';
import Record from './Record';

export const AppContext = createContext()
function App() {
  const [presentStudents, setPresentStudents] = useState(new Set())
  const [rollNumbers, setRollNumbers] = useState([...presentStudents])
  useEffect(() => {
    setRollNumbers([...presentStudents])
  }, [presentStudents])
  return (

    <AppContext.Provider value={{ presentStudents, setPresentStudents, rollNumbers, setRollNumbers }}>
      <div className="contain max-w-[450px] mx-auto p-2">
        <h1 className='text-2xl font-semibold my-4 text-center'>NoteAttendance</h1>
        <ButtonComponent />
        <Record />
      </div>
    </AppContext.Provider>
  );
}

export default App;
