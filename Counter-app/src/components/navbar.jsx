import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return (  
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar
                <span className="badge bg-pill bg-secondary m-2">
                    {this.props.totalCounters}
                </span>
                </a>
            </nav>
        );
    }
}
 
export default NavBar;