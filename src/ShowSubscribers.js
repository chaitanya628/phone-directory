import Header from "./Header";
import './ShowSubscribers.css';
import { Component } from "react";
import { Link } from "react-router-dom";


class ShowSubscribers extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         subscribersList: []
    //     }
    // }

    render() {
        
        return (
            <div>
                <Header heading="Phone Directory" />
                <div className="main-body">
                    <Link to="/add"><button className="btn add-btn">Add</button></Link>
                    <div className="grid-container heading">
                        <span className="grid-item name-heading">Name</span>
                        <span className="grid-item phone-heading">Phone</span>
                    </div>


                    {
                        this.props.subscriberList.map(subs => {
                            return <div className="grid-container" key={subs.id}>
                                <span className="grid-item">{subs.name}</span>
                                <span className="grid-item">{subs.phone}</span>
                                <span className="grid-item">
                                    <button className="btn del-btn">Delete</button>
                                </span>
                            </div>
                        })
                    }
                </div>
            </div>

        )

    }
}

export default ShowSubscribers;
