import React, {Component} from 'react'
import Next from './Next'
import placeholder from '../images/placeholder.png'

class Catagories extends Component{
    state = {
        transform: 0
    }

    _transfrom = (direction) => {
        let {transform} = this.state;
        if(direction === 'left'){
            this.setState({transform: transform - 20})
        }
        else if(direction === 'right'){
            this.setState({transform: transform + 20})
        }
        
    }

    render(){
        let {transform} = this.state
        return(
            <div>
                <section className='App-catagory'>
                    <h1 className='App-catagory-heading'>Phone</h1>
                    <div className='App-catagory-cards'
                        style={{transform: `translatex(${transform}%)`}}>
                        <div className='App-catagory-card'>
                            <img src={placeholder} alt='placeholder'/>
                            <p className='App-catagory-product'> Sumsung</p>
                            <p className='App-catagory-price'>1000$</p>
                        </div>
                        <div className='App-catagory-card'>
                            <img src={placeholder} alt='placeholder'/>
                            <p className='App-catagory-product'> Sumsung 1</p>
                            <p className='App-catagory-price'>1000$</p>
                        </div>
                        <div className='App-catagory-card'>
                            <img src={placeholder} alt='placeholder'/>
                            <p className='App-catagory-product'> Sumsung2</p>
                            <p className='App-catagory-price'>1000$</p>
                        </div>
                        <div className='App-catagory-card'>
                            <img src={placeholder} alt='placeholder'/>
                            <p className='App-catagory-product'> Sumsung3</p>
                            <p className='App-catagory-price'>1000$</p>
                        </div>
                        <div className='App-catagory-card'>
                            <img src={placeholder} alt='placeholder'/>
                            <p className='App-catagory-product'> Sumsung4</p>
                            <p className='App-catagory-price'>1000$</p>
                        </div>
                        <div className='App-catagory-card'>
                            <img src={placeholder} alt='placeholder'/>
                            <p className='App-catagory-product'> Sumsung5</p>
                            <p className='App-catagory-price'>1000$</p>
                        </div>
                        <div className='App-catagory-card'>
                            <img src={placeholder} alt='placeholder'/>
                            <p className='App-catagory-product'> Sumsung6</p>
                            <p className='App-catagory-price'>1000$</p>
                        </div>
                        <div className='App-catagory-card'>
                            <img src={placeholder} alt='placeholder'/>
                            <p className='App-catagory-product'> Sumsung7</p>
                            <p className='App-catagory-price'>1000$</p>
                        </div>
                    </div>
                    <Next direction='left' transform={this._transfrom}/>
                    <Next direction='right' transform={this._transfrom}/>
                </section>
            </div>
        )
    }
}


export default Catagories