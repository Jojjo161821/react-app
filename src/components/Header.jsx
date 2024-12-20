import { useState, useContext } from 'react'
import SiliconLogo from '../images/siliconlogo.svg'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../services/ThemeProvider'

function Header() {

  const { switchToDark, isDarkmodeOn } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(value => !value);
  }

  return (
    <header>
      <div className="container">

        <Link to="/" id="silicon-logotype">
          <img src={SiliconLogo} alt="Silicon logo" />
          <p className='text-xl'>Silicon</p>
        </Link>

        <div className="btn-toggle-dark">
          <span className="text-dark-mode">Light</span>
          <label className="switch">
            <input type="checkbox" onChange={switchToDark} checked={isDarkmodeOn}/>
            <span className="slider round"></span>
          </label>
          <span className="text-dark-mode">Dark</span>
        </div>

        <button className="btn-menu" aria-label="open menu" onClick={openMenu}>
          <i className="fa-sharp fa-regular fa-bars"></i>
        </button>

        <nav className={`navbar ${isOpen ? 'open-nav' : ''}`}>

          <div className='link-container'>
            <NavLink onClick={openMenu} to="/appfeatures" className='text-m links'>Features</NavLink>
            <NavLink onClick={openMenu} to="/contact" className='text-m links'>Contact</NavLink>
          </div>

          <Link onClick={openMenu} to="/" className="btn-sign-in btn-primary">
            <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
          </Link>

        </nav>

      </div>
    </header>
  )
}

export default Header