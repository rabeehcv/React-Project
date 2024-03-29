import React,{useState} from 'react';
import data from './data';
import SingleQuestion from './Question';

function App () {
  const [ques,setQues] = useState(data);
  return (
  <main>
    <div className='container'>
      <h2>Find Your Answers</h2>
      <section className='info'>
        {ques.map((question) => {
          return <SingleQuestion key={question.id} {...question}/>
        })}
      </section>
    </div>
  </main>
  );
}

export default App;