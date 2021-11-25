import React from 'react';

import './card.styles.css';

const Card = ({ name, email, id}) => {
    return(
        <div className='card-div bg-blue br3 grow ma2 dib pa3 bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="card" />

            <div >
                <p className='f3 b'>{name}</p>
                <p className='f4'>{email}</p>
            </div>
        </div>
    )
};

export default Card;