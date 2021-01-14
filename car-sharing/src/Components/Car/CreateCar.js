import React from 'react';

class CreateCar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            carName: null,
            passengersNum: 2
        }
    }

    createCar(){
        this.props.handleCarCreation(this.state.carName, this.state.passengersNum);
    }

    handleChangeCarName(event){
        this.setState({ carName: event.target.value });
    }

    handleChangePassengersNum(event){
        this.setState({passengersNum: event.target.value });
    }


    render(){
        return(
            <div>
                <form onSubmit={() => this.createCar()}>
                    <label for="cname">Car Name:</label><br/>
                    <input type="text" id="cname" name="cname" 
                    onChange={(event) => this.handleChangeCarName(event)}/><br/>
                    <label for="passengersNum">Number of passenger:</label><br/>
                    <input type="number" id="passengersNum" name="passengersNum"
                    onChange={(event) => this.handleChangePassengersNum(event)}/><br/>


                    <input type="submit" value="Submit"/>   

                </form>
            </div>
        );
    }
}
export default  CreateCar;