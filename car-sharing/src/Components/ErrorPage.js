import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ErrorPage = () => {
    return (
        <div>
            <MuiThemeProvider>
            <h1>
                Oops! Page not found!
            </h1>
            </MuiThemeProvider>
        </div>

    );
  }
  export default ErrorPage;
