import './styles/App.scss';
import Header from './components/Header/Header';
import Farm from './components/Farm/Farm';
import Inventory from './components/Inventory/Inventory';
import {useState, useEffect} from "react";
import {getUserData} from "./utils/axiosUtils";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    getUserData((response)=>{
      console.log(response.data);
      console.log(typeof response.data);
      setUserData(response.data);
    });
  }, []);

  if (!userData) {
    return "Loading...";
  }
  return (
    <>
      <Header name={userData.name} balance={userData.balance} houseLevel={userData.currentHouseLevel}/>
      <main className="main">
          <Inventory />
          <Farm currentVeggies={userData.currentVegetables}/>
      </main>
    </>
  );
}

export default App;
