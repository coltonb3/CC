import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './components/navbar';
import Banner from './components/banner';
function App() {
  return (
    <div className="App">
    <Header/>
    <NavBar /> 
      <h1> Champagne Wishes & Charcuterie Dreams </h1>
    <Banner />
    

    </div>
  );
}

export default App;
