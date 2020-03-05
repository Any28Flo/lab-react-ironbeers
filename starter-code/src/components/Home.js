import React, {Component} from 'react'
import {links} from './../links'
import CardContent from './CardContent'

class Home extends Component {
   
   
    render(){
    return (
        <div>

            {links.map((link, index) => <CardContent key={`link-${index}`}  data={link}/>)}
        </div>
    )
    }
}

export default Home 