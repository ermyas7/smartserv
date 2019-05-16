import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/ss-logo.png';

const Header = () => {
  return (
    <header className="App-header">
        <Link to={`${process.env.PUBLIC_URL}/`}>
            <img src={logo} alt='logo' className='App-logo'/>
        </Link>
        <nav className='App-navigation'>
            <ul className='App-navigation-list'>
            <li className='App-navigation-item'>
                <Link to={`${process.env.PUBLIC_URL}/`}>All</Link>
            </li>
            <li className='App-navigation-item'>
                <Link to={`${process.env.PUBLIC_URL}/mobiles`}>Mobiles</Link>
            </li>
            <li className='App-navigation-item'>
                <Link to={`${process.env.PUBLIC_URL}/tablets`}>tablets</Link>
            </li>    
            </ul>
        </nav>
    </header>
  )
}

export default Header