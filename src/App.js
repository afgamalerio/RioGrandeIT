import './App.css';
import { Banner } from './Components/Banner/Banner';
import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpeakersAgenda } from './Components/SpeakersAgenda/SpeakersAgenda';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SpeakersAgenda />
    </div>
  );
}

export default App;
