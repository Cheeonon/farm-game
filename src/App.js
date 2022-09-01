import './styles/App.scss';
import Header from './components/Header/Header';
import Farm from './components/Farm/Farm';
import Inventory from './components/Inventory/Inventory';
import {useState, useEffect} from "react";
import {getUserData, waterPlant, fertilizePlant} from "./utils/axiosUtils";

function App() {
  const [userData, setUserData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // 누른 block id확인해서 inventory한테 넘겨주기 - state (currentItem)
  const handleSelect = (id) => {
    const item = userData.currentVegetables.find((item) => item.id === id);
    setSelectedItem(item);
  }

  const handleWater = () => {
    // water = true 만드는 axios post
    waterPlant(()=>{
      getUserData((response) => {
        setUserData(response.data);
      })
    }, selectedItem.id)
  }

  const handleFertilize = () => {
      // Fertilize = true 만드는 axios post
      fertilizePlant(()=> {
        getUserData((response) => {
          setUserData(response.data);
        })
      }, selectedItem.id);
  }

  const handleSell = () => {
      // balance 올라가고
      // 해당하는 item axios delete
      console.log("clicked")
  }

  const handleSleep = () => {
      // axios get?
      // update each items?
  }

  const handleBuy = () => {
      // 누르면 array update
      // axios post
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
          <Inventory 
            selectedItem={selectedItem} 
            handleWater={handleWater} 
            handleSell={handleSell}
            handleBuy={handleBuy}
            handleSleep={handleSleep}
            handleFertilize={handleFertilize}/>
          <Farm currentVeggies={userData.currentVegetables} handleSelect={handleSelect}/>
      </main>
    </>
  );
}

export default App;
