import React from 'react';

//reactstrap dependies
import {Nav,NavLink, Container} from 'reactstrap';

//react-router dependies
import {Link} from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return(
        <div>
            <div className = "nav-header">
                <div>
                    <h1>Genesim</h1>
                </div>
                <Nav>
                    <Link to = "/">
                        <NavLink href = "/" >Sequencing an Avatar</NavLink>
                    </Link>
                    <Link to = "/Archive">
                        <NavLink href="/Archive">Archvial Information</NavLink> 
                    </Link>
                    <Link to = "/About">
                        <NavLink href="/About">About</NavLink>
                    </Link>
                </Nav>
            </div>
        </div>    
    )
}

export default NavBar;