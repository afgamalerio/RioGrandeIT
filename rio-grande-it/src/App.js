import './App.css';
import { Banner } from './Components/Banner/Banner';
import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
