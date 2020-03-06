import React, {Component} from 'react'
import BeerCard from './BeerCard'

class Beers extends Component {
   
    state={
        beersList :[]
    }
   
    async componentDidMount (){
        try{
            const res = await fetch (`https://ih-beers-api2.herokuapp.com/beers`)
            const beers = await res.json();
            
            this.setState({
                beersList: beers
            })
            console.log(this.state.beersList)
        }catch(e){
            console.log(e) 
        }
    }
    render(){
   

    return (
        <div>
            <h1>Beers </h1>
           {this.state.beersList.map(beer => <BeerCard key={beer._id}detailBeer={beer}/>)}
        </div>
    )
    }
}

export default Beers 