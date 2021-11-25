import React from 'react';

import Card from '../card/card.component';

const CardList = ({ friends }) => {
    const cardComponent = friends.map((user, i) => {
        return (
            <Card name={user.name} email={user.email} key={user.id} id={user.id} />
        );
    });
    return(
        <div className='flex flex-wrap justify-center'>{cardComponent}</div>
    );
};

export default CardList;