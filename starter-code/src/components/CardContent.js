import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class CardContent extends Component{

    render(){
        const {data} = this.props
        return(
            <Link to={`${data.path}`}>
                <div className ="column is-12">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-3by2">
                                <img src={data.imagePath} alt={data.title}/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                        
                                <div className="media-content">
                                    <p className="title is-4">{data.title}</p>
                                </div>
                            </div>

                            <div className="content">
                                {data.description}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
export default CardContent