import React,{useState} from 'react';
import items from './data';
import SingleMenu from './Menu';
import Category from './Categories';

function App() {
  const [menuItem, setMenuItem] = useState(items);
  return (
  <main>
      <h2 className="menu-title">Our Menu</h2>
      <div className='underline'></div>
      <section className="menu-section">
        <Category/>
        {menuItem.map((menuitem)=>{
          return <SingleMenu key={menuitem.id} {...menuitem}/>
        })}
      </section>
  </main>
  );
}

export default App;