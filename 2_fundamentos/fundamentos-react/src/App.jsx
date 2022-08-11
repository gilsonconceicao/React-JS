//components
import HeaderComponent from './components/HeaderComponent';
import TextComponent from './components/TextComponent';
import EventsButton from './components/EventsButton';
import Challange from './components/Challange';
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React JS</h1>
      <HeaderComponent/>
      <TextComponent/>
      <EventsButton/>
      <Challange/>
    </div>
  );
}

export default App;
