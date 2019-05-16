import React, {Component} from 'react'
import Catagory from './Catagory'

class Catagories extends Component{
   

    render(){
        let {data} = this.props
        return(
            <div>
                <section className='App-catagory'>
                    <h1 className='App-catagory-heading'>Phone</h1>
                    <Catagory items={data.mobiles}/>    
                </section>
                <section className='App-catagory'>
                    <h1 className='App-catagory-heading'>Tablet</h1>
                    <Catagory items={data.tablets}/>    
                </section>
            </div>
        )
    }
}


export default Catagories