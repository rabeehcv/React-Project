import React from 'react';

const Menu = ({title,price,img,desc}) => {
    return (
        <article className="menu-item">
            <img src={img} alt={title} className='photo' />
            <div className="item-info">
                <header>
                    <h4>{title}</h4>
                </header>
            </div>
        </article>
    )
}

export default Menu;