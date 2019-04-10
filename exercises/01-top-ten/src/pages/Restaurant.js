import React, { Component } from 'react'

import restaurants from '../store/restaurants'

class Restaurant extends Component {
  constructor(props) {
    super(props)
    let { match } = props

    this.state={
      restaurantId: match.params.id
    }
  }

  componentDidUpdate(prevProps) {
    let prevMatch = prevProps.match
    let { match } = this.props
    if(match.params.id !== prevMatch.params.id){
      this.setState({restaurantId: match.params.id})
    }
  }

  render(){
    let { restaurantId } = this.state
    const restaurant = restaurants.find((res) => res.id == restaurantId)

    return(
      <div>
        {restaurant &&
          <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.detail}</p>
          </div>
        }
      </div>
    )
  }
}

export default Restaurant
