/*Sign In Screen - Form  */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import history from '../JavaScript/history';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            name: "",
            phone: null,
            isOwner: false,
            numberOfCars: 1
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    signin(event){
        // history.push("/MainScreen")
        //boolean validate()
        //create user
        this.props.handleLogin(this.state.username, this.state.password);
        // event.preventDefault();
    }

    login(event){
        this.props.handleLogin(this.state.username, this.state.password);

    }

    handleChangeUser(event) {
        this.setState({ username: event.target.value });
      }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
      }
    
      handleChangeName(event) {
        this.setState({ name: event.target.value });
      }

      handleChangePhone(event) {
        this.setState({ phone: event.target.value });
      }
      handleChangeOwner(event) {
        this.setState({ isOwner: event.target.value });
      }
 
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return(
            <div className="main">
                <div className="signin-left" style={signInStyle}>
                  <h3>Sing In</h3>
                <form onSubmit={() => this.signin()}>
                    <label for="username">Username:</label><br/>
                    <input type="text" id="username" name="username" placeholder="Enter Username" 
                    onChange={(event) => this.handleChangeUser(event)}/><br/>
                    <label for="password">Password:</label><br/>
                    <input type="password" id="password" name="password" placeholder="Enter Password"
                    onChange={(event) => this.handleChangePassword(event)}/><br/>
                    <label for="fname">Name:</label><br/>
                    <input type="text" id="name" name="name" placeholder="Enter your Name" 
                    onChange={(event) => this.handleChangeName(event)}/><br/>
                    <label for="phone">Phone:</label><br/>
                    <input type="number" id="phone" name="phone" placeholder="Enter Phone Number"
                    onChange={(event) => this.handleChangePhone(event)}/><br/>
                    <input type="checkbox" id="isOwner" name="isOwner"
                    onChange={(event) => this.handleChangeOwner(event)}/>
                    <label for="isOwner">Owner: </label><br/><br/>

                    <input type="submit" value="Submit"/>   
                </form >

                </div>
                <div className="login-right">
                  <h3>Log In</h3>
                <form onSubmit={() => this.login()}>
                    <label for="username">Username:</label><br/>
                    <input type="text" id="username" name="username" placeholder="Enter Username" 
                    onChange={(event) => this.handleChangeUser(event)}/><br/>
                    <label for="password">Password:</label><br/>
                    <input type="password" id="password" name="password" placeholder="Enter Password"
                    onChange={(event) => this.handleChangePassword(event)}/><br/><br/>

                    <input type="submit" value="Submit"/> 
                 </form>
                </div>

            </div>

             
        );
     }
  }

  const signInStyle = {
    // height: "100%",
    // width: "50%",
    // position: "fixed",
    // top: "0",
    
  };

  export default SignIn;
