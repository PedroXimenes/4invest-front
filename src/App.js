import logo from './logo.svg';
import './App.css';
import Form from './Form';
import UserIdSection from './UserIdSection'; 
import Assets from './Assets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <h1>Form Example</h1>
      <Form />

      <UserIdSection />
      
      <Assets />
      </header>


    </div>
    
  );
}

export default App;
