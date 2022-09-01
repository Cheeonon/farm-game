import './styles/App.scss';
import Header from './components/Header/Header';
import Farm from './components/Farm/Farm';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <>
      <Header />
      <main className="main">
          <Inventory />
          <Farm />
      </main>
    </>
  );
}

export default App;
