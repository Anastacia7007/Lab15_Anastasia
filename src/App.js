import Footer from './components/Footer/index.jsx'
import Header from './components/Head/index.jsx'
import Main from './components/Main/index.jsx'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Main />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
