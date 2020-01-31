import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                <h1>
                    <Link to={"/"} className="text-light"> REACT CRUD - REDUX </Link>
                </h1>

                <Link to={"/productos/nuevo"} className="btn btn-lg btn-danger nuevo-post"> AGREGAR PRODUCTO &#43;</Link>
            </nav>
         );
    }
}
 
export default Header;