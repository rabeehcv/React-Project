import React,{useState} from 'react';
const url = 'https://course-api.com/react-tabs-project'
function App(){
  const [loading,setLoading] = useState(true);
  const [value,setValue] = useState(0);
  const [jobs,setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setJobs(newjobs)
    setLoading(false)
  };

  return <h2>Tabs SetUp</h2>;
}

export default App;