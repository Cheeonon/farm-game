import './styles/App.scss';
import Header from './components/Header/Header';
import Farm from './components/Farm/Farm';
import Inventory from './components/Inventory/Inventory';
import {useState, useEffect} from "react";
import {getUserData} from "./utils/axiosUtils";

function App() {
  const [userData, setUserData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // 누른 block id확인해서 inventory한테 넘겨주기 - state (currentItem)
  const handleSelect = (id) => {
    const item = userData.currentVegetables.find((item) => item.id === id);
    setSelectedItem(item);
  }

  useEffect(()=>{
    getUserData((response)=>{
      setUserData(response.data);
      setSelectedItem(response.data.currentVegetables[0])
    });
  }, []);

  if (!userData) {
    return "Loading...";
  }
  return (
    <>
      <Header name={userData.name} balance={userData.balance} houseLevel={userData.currentHouseLevel}/>
      <main className="main">
          <Inventory selectedItem={selectedItem}/>
          <Farm currentVeggies={userData.currentVegetables} handleSelect={handleSelect}/>
      </main>
    </>
  );
}

export default App;
