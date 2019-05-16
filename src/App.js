import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Catagories from './components/Catagories';


class App extends Component {
  componentDidMount = () => {
    let url = 'https://s3.ap-south-1.amazonaws.com/ss-local-files/products.json';
    axios.get(url)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Catagories/>
      </div>
    );
  }
}

export default App;
