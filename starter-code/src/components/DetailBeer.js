import React, {Component} from 'react'

class DetailBeer extends Component{
     state={
          beerDetail : {}
     }
      async componentDidMount(){
         
          try{
               const res = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
               console.log(res)
               const beer = await res.json();
               this.setState({
                    beerDetail: beer
               })

          }catch(e){
               console.log(e)
          }
     } 
     render(){
         const {beerDetail} = this.state;

          return(
               <div className="column is-12">
                     <figure className="image is-48x48">
                         <img src={beerDetail.image_url} alt={beerDetail.name}/>
                    </figure>
                    <h1>{beerDetail.name}</h1>
                    <p>{beerDetail.tagline}</p>
                    <p>{beerDetail.first_brewed}</p>
                    <p>{beerDetail.attenuation_level}</p>
                    <p>{beerDetail.description}</p>
                    <p>{beerDetail.contributed_by}</p>
          
          

               </div>
          )
     }
}
export default DetailBeer