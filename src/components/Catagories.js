import React, {Component} from 'react'
import Next from './Next'
import placeholder from '../images/placeholder.png'

class Catagories extends Component{
    render(){
        return(
            <div>
                <section className='App-catagory'>
                    <h1 className='App-catagory-heading'>Phone</h1>
                    <div className='App-catagory-cards'>
                        <div className='App-catagory-card'>
                        <img src={placeholder} alt='placeholder'/>
                        <p className='App-catagory-product'> Sumsung</p>
                        <p className='App-catagory-price'>1000$</p>
                        </div>
                        <div className='App-catagory-card'>
                        
                        <img src={placeholder} alt='placeholder'/>
                        </div>
                        <div className='App-catagory-card'>
                        
                        <img src={placeholder} alt='placeholder'/>
                        </div>
                        <div className='App-catagory-card'>
                        
                        <img src={placeholder} alt='placeholder'/>
                        </div>
                        <div className='App-catagory-card'>
                        
                        <img src={placeholder} alt='placeholder'/>
                        </div>
                        <div className='App-catagory-card'>
                        
                        <img src={placeholder} alt='placeholder'/>
                        </div>
                        <div className='App-catagory-card'>
                        
                        <img src={placeholder} alt='placeholder'/>
                        </div>
                        <div className='App-catagory-card'>
                        
                        <img src={placeholder} alt='placeholder'/>
                        </div>
                        <Next direction='left'/>
                        <Next direction='right'/>
                    </div>
                </section>
            </div>
        )
    }
}


export default Catagories