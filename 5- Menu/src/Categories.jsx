import React from 'react';

const Categories = ({filterItem}) => {
    return (
        <div className='btn-container'>
            <button className='btn' onClick={()=>filterItem('breakfast')}>Breakfast</button>
            <button className='btn' onClick={()=>filterItem('lunch')}>Lunch</button>
            <button className='btn' onClick={()=>filterItem('shakes')}>Shakes</button>
        </div>
    );
};

export default Categories;