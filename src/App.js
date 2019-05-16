import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Catagories from './components/Catagories';

class App extends Component {
  state = {
    products : [],
    mobiles: [],
    tablets: []
  }
  componentDidMount = async () => {
    let url = 'https://s3.ap-south-1.amazonaws.com/ss-local-files/products.json'
    let response = await axios.get(url)
    let products = await response.data.products
    var result = Object.values(products);
    let sortedProducts = result.sort((a, b) => b.popularity - a.popularity)
    let mobiles = sortedProducts.filter((product) => product.subcategory === 'mobile');
    let tablets = sortedProducts.filter((product) => product.subcategory === 'tablet');
    this.setState({products: sortedProducts})
    this.setState({mobiles})
    this.setState({tablets})
  }
  render(){
    let data = this.state;
    return (
      <div className="App">
        <Header/>
        <Catagories data={data}/>
      </div>
    );
  }
}

export default App;
