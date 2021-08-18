import './App.css';
import Greet from './commonents/Greet';
import Welcome from './commonents/Welcome';
import Hello from './commonents/Hello';
import Card from './commonents/Card/Card';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Ali" heroname="Betman" >
        <p>salom</p>
      </Greet>
      <Greet name="Axmad" heroname="Temir odam" >
        <button>Salom</button>
      </Greet> */}
      {/* <Greet name="Siroj" heroname="Orgimchak odam" />
      <Welcome name="Ali" heroname="Betman" />
      <Welcome name="Axmad" heroname="Temir odam" />
      <Welcome name="Siroj" heroname="Orgimchak odam" /> */}
      {/* <Hello /> */}

      <Card />
    </div>
  );
}

export default App;
