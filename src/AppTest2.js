import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';

function AppTest2() {
  const [ data, setData ] = useState({ hits: [] });
  const [ query, setQuery ] = useState('redux');
  // const [ search, setSearch ] = useState('');
  const [ url, setUrl ] = useState('https://hn.algolia.com/api/v1/search?query=redux');

  const[ isLoading, setIsLoading ] = useState(false);

  // Why we don't have useEffect as async function...
  // Warning: useEffect function must return a cleanup function or nothing. Promises and useEffect(async () => ...) are not supported, but you can call an async function inside an effect..
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // REST http request
      const results = await axios(url);

      setData(results.data)
      setIsLoading(false);
    };
    

    fetchData();
  },[url]);

  return (
    <Fragment>
      <input 
        type="text"
        value={query}
        placeholder='Search'
        onChange={event => setQuery(event.target.value)} 
      />
      <button type='button' onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}>Search</button>
      {isLoading ? (<div>Loading...</div>) : 
        <ol>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ol>
      }
    </Fragment>

  );
}

export default AppTest2;