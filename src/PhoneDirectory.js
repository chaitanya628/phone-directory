import { Component } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'cheenu',
                phone: '999999999'
            },
            {
                id: 2,
                name: 'Gagan',
                phone: '888888888'
            }
            ]
        }
    }
    deleteSubscriberHandler = (subsId) => {
        let subscribersList = this.state.subscribersList
        let subIndex = 0;
        subscribersList.forEach((subscriber, index) => {
            if (subscriber.id === subsId) {
                subIndex = index

            }
        }, this);
        let newList = subscribersList;
        newList.splice(subIndex, 1)
        this.setState({ subscriber: newList })

    }
    addsubscriberHandler = (newsubs) => {
        let subsList = this.state.subscribersList
        if (subsList.length > 0) {
            newsubs.id = subsList[subsList.length - 1].id + 1
        } else {
            newsubs.id = 1
        }
        subsList.push(newsubs)
        this.setState({ subscriberList: subsList })

    }
    render() {

        return (
            // <AddSubscribers addsub={this.addsubscriberHandler} />
            // <ShowSubscribers subscriberList={this.state.subscriberList} />
            <Router>
                <div>
                    <Route exact path='/' element={<ShowSubscribers />} render={(props) => <ShowSubscribers {...props} subscriberList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                    <Route path='/add' element={<AddSubscribers />} render={({ history }, props) => <AddSubscribers history={history} {...props} addsub={this.addsubscriberHandler} />} />
                </div>

            </Router>

        )
    }
}
export default PhoneDirectory;