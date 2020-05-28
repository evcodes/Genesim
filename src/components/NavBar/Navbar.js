import React from 'react';

//reactstrap dependies
import {Nav} from 'reactstrap';

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
                        <p className = "nav-link">Sequencing an Avatar</p >
                    </Link>
                    <Link to = "/Archive">
                        <p  className = "nav-link" >Archvial Information</p > 
                    </Link>
                    <Link to = "/Submissions">
                        <p className = "nav-link" >Submissions</p >
                    </Link>
                    <Link to = "/About">
                        <p className = "nav-link" >About</p >
                    </Link>
                </Nav>
            </div>
        </div>    
    )
}

export default NavBar;