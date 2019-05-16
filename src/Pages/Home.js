import React from 'react'
import Catagory from '../components/Catagory'
 const Home = ({data}) => {
  return (
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

export default Home