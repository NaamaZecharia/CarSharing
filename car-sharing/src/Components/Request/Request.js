import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



class Request extends React.Component{
    constructor(props){
        this.state={
            userID: null,
            RequestID: null,
            carID: null,
            fromDate: null,
            toDate: null,
            status: [],
            creationDate: new Date()
        }
    }

    render(){
        return(
            <div>
                <div>

                </div>
            </div>
        );
    }
}

const statusList = [
    {id: 1, name: 'New'},
    {id: 2, name: 'Waiting'},
    {id: 3, name: 'Approved'},
    {id: 4, name: 'Rejected'},
    {id: 5, name: 'Canceled'}
  ];

  export default Request;