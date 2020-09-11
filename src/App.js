import React, { Component } from "react";
import Button from "./components/Button/Button";


export default class App extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            count: 0,
            addBy: 1
        }
    }

    handleInc = () => {
        this.setState((prevState) => ({
            count: prevState.count + prevState.addBy
        }))
    }
    handleDec = () => {
        this.setState((prevState) => ({
            count: prevState.count - prevState.addBy
        }))
    }
    handleAddBy = (e) => {
        const normalizedValue = Number(e.target.value);
        if (Number.isNaN(normalizedValue)) {
            throw new Error('Input should be a number!')
        }
        this.setState({
            addBy: normalizedValue
        })
    }
    handleReset = () => {
        this.setState({
            count: 0
        })
    }

    handleDisable = () => {
        if ((this.state.count) <= 0) {
            return true;
        } else {
            return false;
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <Button onClick={this.handleInc} text="+" />
                <Button onClick={this.handleDec} text="-" disabled={this.handleDisable()} /> {/**is it okay to call a function in disabled?? */}
                <input onChange={this.handleAddBy} placeholder="Type..." ></input>
                <Button onClick={this.handleReset} text="RESET" />
            </div>
        )
    }
}