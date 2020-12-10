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
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-up-fill" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </Button>
      </Link>
    </div>
  );
}

export default App;
