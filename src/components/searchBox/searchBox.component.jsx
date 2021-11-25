import React from 'react';

const SearchBox = ({ onChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--blue bg-lightest-blue'
                type="text" 
                placeholder='search friends'
                onChange={onChange}
                />
        </div>
    );
};

export default SearchBox;