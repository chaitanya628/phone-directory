import React, { Component } from "react";
import Header from "./Header";
import "./AddSubscribers.css";

class AddSubscribers extends Component{
    render(){
        return(
            <div>
                <Header heading = "Add Subscribers"/>
                <div className="main-body">
                    <button className="btn">Back</button>
                    <form className="subs-form">
                        <label htmlFor="name" className="label-form">Name:</label><br/>
                        <input type="text" className="input-form" id="name"/><br/><br/>
                       
                        <label htmlFor="phone" className="label-form">Phone:</label><br/>
                        <input type="text" className="input-form" id="phone"/><br/><br/>
                        <div className="subs-details">
                            <span className="subs-info-heading">Subscriber to be Added </span><br/>
                            <span className="subs-info">Name: </span><br/>
                            <span className="subs-info">Phone: </span><br/>

                        </div>
                        <button type="submit" id="add" className="btn add-btn">Add</button>
                    </form>
                </div>

            </div>
        )
    }
}
export default AddSubscribers;