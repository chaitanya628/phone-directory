import React, { Component } from "react";
import Header from "./Header";
import "./AddSubscribers.css";
import { Link } from "react-router-dom";

class AddSubscribers extends Component {

    constructor() {
        super()
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }

    }
    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addsub(this.state)        
        this.setState({ id: 0, name: '', phone: '' })
        this.props.history.push("/")
    }

    render() {
        const { name, phone } = this.state;
        return (
            <div>
                <Header heading="Add Subscribers" />
                <div className="main-body">
                    <Link to="/"><button className="btn">Back</button></Link>
                    <form className="subs-form" onSubmit={this.onFormSubmit}>
                        <label htmlFor="name" className="label-form">Name:</label><br />
                        <input type="text" className="input-form" id="name" name="name" onChange={this.inputChangeHandler} /><br /><br />

                        <label htmlFor="phone" className="label-form">Phone:</label><br />
                        <input type="text" className="input-form" id="phone" name="phone" onChange={this.inputChangeHandler} /><br /><br />
                        <div className="subs-details">
                            <span className="subs-info-heading">Subscriber to be Added </span><br />
                            <span className="subs-info">Name: {name} </span><br />
                            <span className="subs-info">Phone: {phone}</span><br />

                        </div>
                        <button type="submit" id="add" className="btn add-btn">Add</button>
                    </form>
                </div>

            </div>
        )
    }
}
export default AddSubscribers;