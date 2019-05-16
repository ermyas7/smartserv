import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header';
import Home from './Pages/Home';
import Product from './Pages/Product';

class App extends Component {
  state = {
    products : [],
    mobiles: [],
    tablets: []
  }
  componentDidMount = async () => {
    let url = 'https://smartserv-5-server.herokuapp.com/products'
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
      <Router>
        <div className="App">
          <Header/>
          <Route exact path={`${process.env.PUBLIC_URL}/`} 
            render ={() => <Home
            data={data}/>}/>
            <Route exact path={`${process.env.PUBLIC_URL}/mobiles`} 
            render ={() => <Product
            product={data.mobiles}/>}/>
            <Route exact path={`${process.env.PUBLIC_URL}/tablets`} 
            render ={() => <Product
            product={data.tablets}/>}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
