import Header from "./Header";
import './App.css';
import { Component } from "react";

// function App() {
// let subscribers = [
//   {
//     id: 1,
//     name: 'Shilpi',
//     phone: 137894903
//   },
//   {
//     id: 2,
//     name: 'Geeta',
//     phone: 675900586
//   }
// ];
class App extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: []
    }
  }

  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="main-body">
          <button className="btn add-btn">Add</button>
          <div className="grid-container heading">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>


          {
            this.state.subscribersList.map(subs => {
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

export default App;
