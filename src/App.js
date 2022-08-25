import Header from "./Header";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-body">
        <button className="btn add-btn">Add</button>
        <div className="grid-container heading">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

      </div>
    </>
  );
}

export default App;
