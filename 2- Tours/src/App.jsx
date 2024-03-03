import React, { useState } from 'react'
import Loading from './Loading';
import Tours from './Tours';

function App() {
  const [loading,setLoading] = useState(true)
  if(loading){
    return (
    <main>
      <Loading />
    </main>
    );
  }
    
  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
