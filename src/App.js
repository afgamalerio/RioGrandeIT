import './App.css';
import { Banner } from './Components/Banner/Banner';
import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpeakersAgenda } from './Components/SpeakersAgenda/SpeakersAgenda';
import { Sponsors } from './Components/Sponsors/Sponsors'
import { Contact } from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SpeakersAgenda />
      <Sponsors />
      <Contact />
    </div>
  );
}

export default App;
