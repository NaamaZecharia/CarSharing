import './App.css';
import React, { createFactory } from 'react';
import { Router, Switch } from "react-router";
import {Route} from "react-router-dom";
import SignIn from './Components/SignIn';
import ErrorPage from './Components/ErrorPage';
import MainScreen from './Components/MainScreen';
import CreateRequest from './Components/CreateRequest';
import CreateCar from './Components/Car/CreateCar';
import request from './Components/Request/Request';
import { render } from 'react-dom';
import history from './JavaScript/history';
import Car from './Components/Car/Car';



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

  getAllUsers(){
    var result1 = fetch('http://localhost:5000/getAllUsers')
    var result2 = result1.then(response => response.json())
    var result3 = result2.then(data => console.log(data));

  }


  handleLogin(user,psw){
    if (user==="naama@gmail.com" && psw==='1234'){
      
      history.push('/MainScreen')
      this.setState({loginSucc:true, username:user})
    }
  else{
    alert("username not correct!");
  }
  } 

  handleSignin(email, pass, name, phone, isOwner){
    history.push('/MainScreen')
    this.setState({loginSucc:true, username:name})
    
    // var url = new URL("https://localhost:5000/signin"),
    // params = {lat:35.696233, long:139.570431}
    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    // fetch(url).then(/* … */)

    var emailEncoded = encodeURIComponent(email);
    var passwordEncoded = encodeURIComponent(pass);
    var nameEncoded = encodeURIComponent(name);
    var phoneEncoded = encodeURIComponent(phone);
    var ownerEncoded = encodeURIComponent(isOwner);
      return fetch(
        `http://localhost:5000/signin/${emailEncoded}/${passwordEncoded}/${nameEncoded}/${phoneEncoded}/${ownerEncoded}`
      ).then((response) => response.json())
      
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
            handleSignin ={(email,pass,name,phone,isOwner)=>this.handleSignin(email,pass,name,phone,isOwner)}
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
