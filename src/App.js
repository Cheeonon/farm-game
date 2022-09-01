import './styles/App.scss';
import Header from './components/Header/Header';
import Farm from './components/Farm/Farm';

function App() {
  return (
    <>
      <Header />
        <Farm />
        <div className="inventory">
          <form action="">
            <select name="" id="">
              <option value="carrot">Carrot</option>
              <option value="carrot">Tomato</option>
              <option value="carrot">Cucumber</option>
            </select>
            <button>Buy</button>

            <button>Sleep</button>
          </form>
        </div>
    </>
  );
}

export default App;
