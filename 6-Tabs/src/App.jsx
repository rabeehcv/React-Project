import React, { useState, useEffect } from 'react';
import items from './data';
import SingleJob from './job';



function App() {
  const [jobs, setJobs] = useState(items);
  const [value, setValue] = useState(0);

  return (
    <main>
      <div className='title'>
        <h2> Experience</h2>
        <div className='underline'></div>
      </div>
      <section className='job-section'>
        {jobs.map((job) => {
          return <SingleJob key={job.id} {...job} />
        })
        }
      </section>
    </main>
  )

}

export default App;