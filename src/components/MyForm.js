import React, { Component } from 'react'

export default class MyForm extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            username: '',  
            age: '', 
            errormessage: '' 
        };
    }
    
    myChangeHandler = (event) => {
        //this.setState({username: event.target.value});

        let nam = event.target.name;
        let val = event.target.value;
        let err = '';

        if (nam === "age") {
            if (!Number(val)) {
                //alert("Your age must be a number");
                err = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
      }

    render() {
        let header = '';

        if (this.state.username) {
            header = <h1>Hello {this.state.username} {this.state.age}</h1>;
        }

        return (
            <div>
                <form onSubmit={this.mySubmitHandler}>
                    {header}
                    <p>Enter your name: <input type="text" value={this.state.username} name="username" onChange={this.myChangeHandler} /> </p>
                    
                    <p>Enter your age: <input type='text' value={this.state.age} name='age'  onChange={this.myChangeHandler} /> </p>

                    
                    <input type='submit' value="Submit"/>
                    <br />
                    <p style={{color:'red', padding: "5px"}}>{this.state.errormessage}</p>
                </form>
            </div>
        )
    }
}
