import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/nav';
import { BrowserRouter } from 'react-router-dom';
import Mypages from './pages/Mypages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNav></MyNav>
      <Mypages></Mypages>
      </BrowserRouter>

    </div>
  );
}

export default App;
