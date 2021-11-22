import React from 'react'
import './Counter.css'
import { Button, Form } from 'react-bootstrap'

class Counter extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    //     console.log("constructor")
    // }


    state = {
        count: 0,
        inputText: ""
    }

    handleClickAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClickMinus = () => {
        this.state.count > 0 &&
            this.setState({
                count: this.state.count - 1
            })
    }

    componentDidMount = () => {
        console.log("Component did mount")
    }
    componentDidUpdate = (prevProps, prevState) => {
        this.state.count !== 0 &&
            console.log("Component did update")
        console.log(prevProps)
        console.log(prevState)
    }
    componentWillUnmount = () => {
        console.log("Component will unmout")
        console.log(this.state.count)
    }

    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }


    render() {
        // console.log(this.state)
        console.log("Render")

        return (
            <div className="counterContainer">
                <h1>This is a Counter : </h1>
                <div className="counterContent">
                    <Button
                        variant="success"
                        className="counterBtns"
                        onClick={this.handleClickAdd}
                    >+</Button>
                    <h2 className="count"> {this.state.count} </h2>
                    <Button
                        variant="success"
                        className="counterBtns"
                        onClick={this.handleClickMinus}

                    >-</Button>
                </div>
                <Form.Control type="text" placeholder="Enter text ..."
                    onChange={this.handleChange}
                />
                <h2>{this.state.inputText}</h2>
            </div>
        )
    }
}

export default Counter
