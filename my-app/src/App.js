import Header from './Header';
import './App.css';

function App() {
  return (
    <Header name="Menu" links={["sobre", "comprar", "contato"]}></Header>
  );
}

export default App;
