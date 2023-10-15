import './App.css';
import NewPortfolio from './new-portfolio/NewPortfolio';
import MyPortfolio from './my-portfolio/MyPortfolio'; 
import Assets from './asset/Assets';
import AssetsByPortfolio from './assets-by-portfolio/AssetsByPortfolio';
import Calculator from './calculator/Calculator'
import NavBar from './header/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <MyPortfolio />
      <NewPortfolio />      
      <AssetsByPortfolio/>
      <Assets />
      <Calculator/>
      </header>   
    </div>    
  );
}

export default App;
