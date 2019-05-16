import React from 'react'
import logo from '../images/ss-logo.png';

const Header = () => {
  return (
    <header className="App-header">
        <img src={logo} alt='logo' className='App-logo'/>
        <nav className='App-navigation'>
            <ul className='App-navigation-list'>
            <li className='App-navigation-item'>All</li>
            <li className='App-navigation-item'>Phone</li>
            <li className='App-navigation-item'>Tablet</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header