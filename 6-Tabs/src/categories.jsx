import React from 'react';

const Categories = ({companies,filterItem}) => {
    return (
        <div className='btn-container'>
            {companies.map((company)=> {
                return (
                    <button type="button" className="btn" onClick={()=>filterItem(company)}>{company}</button>
                )
            })}
        </div>
    );
};

export default Categories;