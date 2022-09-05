import { Component } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from "./ShowSubscribers";

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: [{
                id: 1,
                name: 'Sheetal',
                phone: '999999999'
            },
            {
                id: 2,
                name: 'cheenu',
                phone: '888888888'
            }
            ]
        }
    }
    addsubscriberHandler = (newsubs) => {
        let subsList = this.state.subscriberList
        if (subsList.length > 0) {
            newsubs.id = subsList[subsList.length - 1].id + 1
        } else {
            newsubs.id = 1
        }
        subsList.push(newsubs)
        this.setState({ subscriberList: subsList })
        console.log(this.state.subscriberList);
    }
    render() {
        return (
            // <AddSubscribers addsub={this.addsubscriberHandler} />
            <ShowSubscribers subscriberList={this.state.subscriberList} />

        )
    }
}
export default PhoneDirectory;