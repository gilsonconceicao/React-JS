import ImageCity from './assets/city.jpg'
import UseStateReact from './components/UseStateReact'; 
import ListRender from './components/ListRender';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Avaançando no React JS</h1>
      <img src="img1.jpg"/>
      <img src={ImageCity} alt="" />
      <UseStateReact/>
      <ListRender/>
    </div>
  );
}

export default App;
