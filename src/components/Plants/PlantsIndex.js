import React, { Component } from 'react'
//components
import PlantsPage from './PlantsPage'

class Plants extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <PlantsPage/>
         );
    }
}
 
export default Plants;