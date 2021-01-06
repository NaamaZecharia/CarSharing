import React from 'react';
import ReactDOM from 'react-dom';
import history from '../JavaScript/history';

class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    createRequest(){
        history.push("/CreateRequest")
    }

    createCar(){
        history.push("/CreateCar")
    }
    render(){

        return(
            <div>
                <h1>Hello {this.props.username}!</h1>
                <div>
                    <h2>Requests:</h2>
                    Request created <b>{(this.props.request !== null) ? this.props.request : '- not yest '}</b> 
                </div>
                <div>
                    <h2>My Requests:</h2>
                </div>
                <button onClick={() => this.createRequest()}>
                     Create new Request
                </button>
                <br/><br/>
                <button onClick={() => this.createCar()}>
                    Create new Car
                </button>
            </div>
            
        );
    }
}

export default MainScreen;
