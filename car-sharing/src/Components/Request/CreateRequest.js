import React from 'react';
import history from '../JavaScript/history';


class CreateRequest extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            fromDate: new Date(),
            toDate: new Date()
        }
    }

    createRequest(event){
        this.props.handleRequestCreation(this.state.fromDate, this.state.toDate);
        
    }

    handleChangeFromDate(event) {
        this.setState({ fromDate: event.target.value.toDate });
      }

    handleChangeFromDate(event) {
        this.setState({ ToDate: event.target.value });
      }

    render(){
        return(
            <div>
                <form onSubmit={() => this.createRequest()}>
                    <label for="fromDate">From Date:</label><br/>
                    <input type="date" id="fromDate" name="fromDate" 
                    onChange={(event) => this.handleChangeFromDate(event)}/><br/>
                    <label for="toDate"> To Date:</label><br/>
                    <input type="date" id="toDate" name="toDate"
                    onChange={(event) => this.handleChangeFromDate(event)}/><br/>


                    <input type="submit" value="Submit"/>   
                </form >
            </div>
        );
    }
}

export default CreateRequest;