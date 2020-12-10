import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './Components/Banner';
import { Header } from './Components/Header';
import { SpeakersAgenda } from './Components/SpeakersAgenda';
import { Sponsors } from './Components/Sponsors'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
import { Mark } from './Components/Mark';
import { Link } from 'react-scroll';
import { Button } from 'react-bootstrap';
import HomeButton from './Images/Home-Button/home-button.png'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <SpeakersAgenda />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
      <Mark />
      <Link to='home' smooth={true}>
        <Button className='home-button'>
          <img src={HomeButton} alt='Ir Arriba'/>
        </Button>
      </Link>
    </div>
  );
}

export default App;
