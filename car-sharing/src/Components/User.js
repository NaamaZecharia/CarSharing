import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            phone: null,
            isOwner: false,
            numberOfCars: 0
        };

    }

    render(){
        return(
            <div>
                
            </div>

        );
    }

}
export default User;