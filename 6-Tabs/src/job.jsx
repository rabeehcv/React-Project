import React from 'react';

const job = ({title,dates,company}) => {
    return (
        <article>
            <h3>{title}</h3>
            <p className='job-date'>{dates}</p>
            <h4 className='company'>{company}</h4>
        </article>
    )
}

export default job;