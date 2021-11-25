import React from 'react';

// Components -> stateless components
import CardArray from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';
import Scroll from './components/scroll/scroll.component';
import Footer from './components/footer/footer.component';
// Css
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    // initializing this.state.robots -> fetching from jsonPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({robots: json}))
  }

  onSearchChange = (event) => {
    // used in SearchBox to update this.state.searchField
    this.setState({searchField: event.target.value})
  }


  render() {
    // Filtering robots from the searchField
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return(
      // The app we are returning
      <div className='tc app'>
        <h1 className='f1'>Robot Friends</h1>
        <SearchBox onChange={this.onSearchChange} />
        <Scroll>
          <CardArray friends={filteredRobots} />
        </Scroll>
        <Footer/>
          
      </div>
    );
  };
};

export default App;