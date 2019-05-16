import React, { Component } from 'react'
import Next from './Next'
import placeholder from '../images/placeholder.png'

class Catagory extends Component {
    state = {
        transform: 0
    }
    _transfrom = (direction) => {
        let {transform} = this.state;
        let limit = this.props.items.length * 20;
        console.log(transform)
        if(direction === 'right' && transform > -limit){
            this.setState({transform: transform - 20})
        }
        else if(direction === 'left' && transform < 0){
            this.setState({transform: transform + 20})
        }
        
    }  
    render() {
        let {transform} = this.state
        let {items} = this.props
        let card = items.map((item, index) => {
            return(
                <div className='App-catagory-card' key={index}>
                    <img src={placeholder} alt='placeholder'/>
                    <p className='App-catagory-product'> {item.title}</p>
                    <p className='App-catagory-price'>{'₹ ' + item.price}</p>
                </div>
            )
        })

        return (
            <div>
                <div className='App-catagory-cards'
                    style={{transform: `translatex(${transform}%)`}}>
                    {card}
                </div>
                {
                (transform < 0)?
                    <Next direction='left' transform={this._transfrom}/>: null
                }
                {
                (transform > -items.length * 20)?
                    <Next direction='right' transform={this._transfrom}/>: null
                }
            </div>    
        )
    }
}

export default Catagory
