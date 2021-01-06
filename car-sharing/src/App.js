import logo from './logo.svg';
import './App.css';
import React, { createFactory } from 'react';
import { Router, Switch } from "react-router";
import {Route} from "react-router-dom";
import SignIn from './Components/SignIn';
import ErrorPage from './Components/ErrorPage';
import MainScreen from './Components/MainScreen';
import CreateRequest from './Components/CreateRequest';
import CreateCar from './Components/CreateCar';
import request from './Components/Request';
import { render } from 'react-dom';
import history from './JavaScript/history';
import Car from './Components/Car';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loginSucc: false,
      username: "",
      request: null,
      car: new Car()
    }
  }


  handleLogin(user,psw){
    if (user==="naama" && psw==='1'){
      history.push('/MainScreen')
      this.setState({loginSucc:true, username:user})
    }
  else{
    alert("username not correct!");
  }
  } 

  handleRequestCreation(fromDate, toDate){
    if(fromDate !== null && toDate !== null){
      history.push('/MainScreen')
      //create request in DB
      this.setState({request: fromDate.toString()})
    }
  }

  handleCarCreation(carName, passengersNum){
    if(carName !== null){
      history.push('./MainScreen')
      // this.setState({car.carID: carName, car.passengersNum: passengersNum})
    }

  }
  
  render(){
    return (
      <Router history={history}>
        {/* <div className="App"> */}
          {/* <header className="App-header">
            <Link to="/SignIn"> Sign In </Link>
          </header> */}
  
          <Switch>
          <Route exact path="/"
          render ={(props)=>(
            <SignIn 
            {...props}
            handleLogin  = {(user, psw)=>this.handleLogin(user, psw)}
            />)}/>
          
          <Route path="/MainScreen" 
          render ={(props)=> (
            <MainScreen
            {...props}
            logSuc ={this.state.loginSucc}
            username = {this.state.username}
            request = {this.state.request}
            />)}/>

          <Route path="/CreateRequest" 
          render ={(props)=> (
            <CreateRequest
            {...props}
            handleRequestCreation  = {(fromDate, toDate)=>this.handleRequestCreation(fromDate, toDate)}
            />)}/>   

            <Route path="/CreateCar"
            render = {(props) => (
              <CreateCar
              {...props}
              handleCarCreation = {(carName, passengersNum) => this.handleCarCreation(carName, passengersNum)}
            />)}/> 


          </Switch>
  
        {/* </div> */}
        </Router>
    );

  }
  
}



export default App;
