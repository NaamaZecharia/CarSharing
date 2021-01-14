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
                <br/><br/>


                <div className="wrapper">
                    <div className="tabs">
                        <div className="tab">
                            <input id="tab-1" type="radio" name="tab-1" />
                            <label for="tab-1" class="tab-label">Tab One</label>
                            <div class="tab-content">My Request tab </div>
                        </div>
                        <div class="tab">
                            <input id="tab-2" type="radio" name="tab-2" />
                            <label for="tab-2" class="tab-label">Tab Two</label>
                            <div class="tab-content">Request To Approved tab </div>
                        </div>
                        <div class="tab">
                            <input id="tab-3" type="radio" name="tab-3" />
                            <label for="tab-3" class="tab-label">Tab Three</label>
                            <div class="tab-content">All Request tab </div>
                        </div>

                    </div>

                </div>

                        

            </div>
            
        );
    }


}

export default MainScreen;
