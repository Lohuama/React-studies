import Header from './Header';
import './App.css';

function App() {
  return (
    <Header name="Menu" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
  );
}

export default App;
