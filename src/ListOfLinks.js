import './App.css';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

// uuid is universally unique identifier -> for random id/key etc.
import { v4 as uuidv4 } from 'uuid';


const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url:
      'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
  },
  {
    id: '1',
    title: 'React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
];



const App = () => {
  const [ list, setList ] = React.useState(INITIAL_LIST);
  const [ state, setState ] = React.useState({
    title: '',
    url: ''
  })

  function onRemoveItem(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList);
  }

  function handleAdd() {
    const newItem = {id: uuidv4(), title: state.title, url: state.url};
    const newList = list.concat(newItem);
    setList(newList);
    setState({title: '', url: ''})
    
  }

  function handleChange(event) {
    
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });

  }

  return (
    <Fragment>
      <AddItem 
        state={state}
        onChange={handleChange}
        onAdd={handleAdd}
      />
      <List onClick={onRemoveItem} list={list}/>


    </Fragment>
  );
}


const AddItem = ({ state, onChange, onAdd}) => (
  <div>
    <input type="text" name='title' value={state.title} placeholder='title' onChange={onChange}/>
    <input type="text" name='url' value={state.url} placeholder='url' onChange={onChange}/>
    <button type='button' onClick={onAdd}>Add new link</button>
  </div>
);

const List = ({ list, onClick}) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <a href={item.url}>{item.title}</a>
        <button type='button' onClick={() => onClick(item.id)}>Remove</button>
      </li>
    ))}
  </ul>
);


export default App;
