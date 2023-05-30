import React, {useState} from 'react'
import { RiMenuLine, RiCloseLine, RiSearchLine} from 'react-icons/ri';
import './navbar.css'

//create McKinsey & Company menu
//create About menu
//create Careers menu
const Menu = () => (
    <>
        <p><a href="#industries">Industries</a></p>
        <p><a href="#capabilities">Capabilities</a></p>
        <p><a href="#features">Featured Insights</a></p>
        <p><a href="#locations">Locations</a></p>
        <p><a href="#career">Careers</a></p>
        <p><a href="#about">About Us</a></p>
        <p><a href="#blog">Blog</a></p>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
      };

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <button onClick={handleToggle}>
                    {toggleMenu ? <RiCloseLine color="#fff" size={40} /> : <RiMenuLine color="#fff" size={30} />}
                </button>
                <p>McKinsey<br/> &nbsp; & Company</p>
            </div>
            {toggleMenu && (
                <div className={`navbar__menu-links ${toggleMenu ? 'show' : ''}`}>
                    <div className="navbar__menu-links__container">
                        <div className="navbar__menu-links-top">
                            <button onClick={handleToggle}>
                                {toggleMenu ? <RiCloseLine color="#fff" size={45} /> : <RiMenuLine color="#fff" size={30} />}
                            </button>
                            <p>McKinsey<br/> &nbsp; & Company</p>
                        </div>
                        <div className="menu">
                            <Menu />
                            <p><a href="#subscribe">Email Subscriptions</a></p>
                            <p><a href="#sign-in">Sign In</a></p>
                        </div>
                    </div>
                    <div className="navbar__menu-links__details">
                        <div className="navbar__menu-links__search">
                            <input type="text" />
                            <button><RiSearchLine color='#fff' size={40}/></button>
                        </div>
                    </div>
                </div>
            )}
            <div className="navbar__menu">
                <Menu />
            </div>
            <div className="navbar__search">
                <p><a href="#industries">Sign In</a> | <a href="#industries">Subscribe</a></p>
                <p><a href="#industries"><RiSearchLine size={40}/></a></p>
            </div>
        </div>
  )
}

export default Navbar