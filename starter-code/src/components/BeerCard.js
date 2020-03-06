import React , {Component} from 'react'
import {Link} from 'react-router-dom'
class BeerCard extends Component{
     state={
          beerDetail : {}
     }
    
     render(){
           const {detailBeer} = this.props
          return(
               <Link to={`/beers/${detailBeer._id}`}>
               <div className="column is-12">
                    <div className="card">
                         <div className="card-content">
                              <div className="media">
                                   <div className="media-left">
                                        <figure className="image is-48x48">
                                             <img src={detailBeer.image_url} alt={detailBeer.name}/>
                                        </figure>
                                   </div>
                                   <div className="media-content">
                                        <p className="title is-4">J{detailBeer.name}</p>
                                        <p className="subtitle is-6"><strong>{detailBeer.tagline}</strong></p>
                                   </div>
                              </div>

                              <div className="content">
                                   <strong>Created by: </strong>{detailBeer.contributed_by}
                              </div>
                         </div>
                    </div>
               </div>
               </Link>
          )
     }
}
export default BeerCard