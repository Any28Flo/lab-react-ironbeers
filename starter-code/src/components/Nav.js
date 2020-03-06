import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Nav extends Component{

 
    render(){
       const styles={
            'backgroundColor' : ' #47C4FC'
        }
    return(
        <div className ="column is-12">

        <nav className="navbar blue" style={styles}role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                <figure className="image is-text-centered is-32x32">
                <img src="./images/home.svg" alt="home"/>
                </figure>
                </Link>
            
            </div>
        </nav>
    </div>
    )
    }
}

export default Nav