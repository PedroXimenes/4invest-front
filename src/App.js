import logo from './logo.svg';
import './App.css';
import Form from './form/Form';
import UserIdSection from './user-id/UserIdSection'; 
import Assets from './asset/Assets';
import Portfolio from './portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>4 Invest</h1>

      <UserIdSection />
      <Form />      
      <Portfolio/>
      <Assets />
      </header>
      


    </div>
    
  );
}

export default App;
