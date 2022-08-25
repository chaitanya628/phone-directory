import Header from "./Header";
import './App.css';

function App() {
  let subscribers = [
    {
      id: 1,
      name: 'Shilpi',
      phone: 137894903
    },
    {
      id: 2,
      name: 'Geeta',
      phone: 675900586
    }
  ];
  return (
    <>
      <Header />
      <div className="main-body">
        <button className="btn add-btn">Add</button>
        <div className="grid-container heading">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>


        {
          subscribers.map(subs => {
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
    </>
  );
}

export default App;
