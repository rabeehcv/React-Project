import React,{useState} from 'react';
import items from './data';
import SingleJob from './job';
import Category from './categories';

const companies=['ALL',...new Set(items.map((item)=>item.company))];


function App(){
  const [jobs,setJobs] = useState(items);

  const filterItem = (company) => {
    if(company==='ALL'){
      return setJobs(items)
    };
    const newItems = items.filter((item)=>
      item.company===company
    )
    setJobs(newItems)
    };  
  
  return (
  <main>
    <div className='title'>
      <h2> Experience</h2>
      <div className='underline'></div>
    </div>
    <section className='job-section'>
      <Category companies={companies} filterItem ={filterItem}  />
      {jobs.map((job)=>{
       return <SingleJob key={job.id} {...job}/>
      })}
    </section>
  </main>
  );
}

export default App;