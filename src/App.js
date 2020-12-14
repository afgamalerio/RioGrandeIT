import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './Components/Banner';
import { Header } from './Components/Header';
import { Schedule } from './Components/Schedule';
import { Sponsors } from './Components/Sponsors';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Mark } from './Components/Mark';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Schedule />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
      <Mark />
    </div>
  );
}

export default App;
