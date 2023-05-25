import React, { createContext, useState } from 'react'
import ButtonComponent from './ButtonComponent';
import Record from './Record';

export const AppContext = createContext()
function App() {
  const [presentStudents, setPresentStudents] = useState(new Set())
  return (

    <AppContext.Provider value={{presentStudents,setPresentStudents}}>
      <div className="contain max-w-[450px] mx-auto bg-slate-300 p-2">
        <h1 className='text-2xl font-semibold my-4'>NoteAttendance</h1>
        <ButtonComponent />
        <Record />
      </div>
    </AppContext.Provider>
  );
}

export default App;
