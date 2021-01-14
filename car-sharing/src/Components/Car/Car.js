import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            carID: null,
            ownerID: null, /**Or UserID what is more accepted? */
            passengerNum: 2,
            Location: null,
            history: null, /**Request list (all status) */
        }
    }

    render(){
        return(
            <div>
                <h1>Car Details:</h1>
                <h3>Car Name: {this.props.carID}</h3> 
                <h4>Passengers Number: {this.props.passengerNum}</h4>               
            </div>
        );
    }





}
export default Car;
