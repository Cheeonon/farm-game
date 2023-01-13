import './styles/App.scss';
import Header from './components/Header/Header';
import Farm from './components/Farm/Farm';
import Inventory from './components/Inventory/Inventory';
import {useState, useEffect} from "react";
import {getUserData, waterPlant, fertilizePlant, sleep, buySeed, sellPlant} from "./utils/axiosUtils";

function App() {
  const [userData, setUserData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (id) => {
    console.log(id)
    const item = userData.currentVegetables.find((item) => item.id === id);
    setSelectedItem(item);
  }

  const handleWater = () => {
    waterPlant(()=>{
      getUserData((response) => {
        setUserData(response.data);
      })
    }, selectedItem.id)
  }

  const handleFertilize = () => {
      fertilizePlant(()=> {
        getUserData((response) => {
          setUserData(response.data);
        })
      }, selectedItem.id);
  }

  const handleSell = () => {
      console.log("clicked")
      sellPlant(()=>{
        getUserData((response) => {
          setUserData(response.data);
          setSelectedItem(response.data.currentVegetables[0])
        })
      }, selectedItem.id)
  }

  const handleSleep = () => {
      sleep(()=> {
        getUserData((response) => {
          setUserData(response.data);
          setSelectedItem(response.data.currentVegetables[0])
        })
      });
  }

  const handleBuy = (event) => {
    event.preventDefault();
    const boughtSeed = event.target.seed.value;
    buySeed(()=>{
      getUserData((response) => {
        setUserData(response.data);
        setSelectedItem(response.data.currentVegetables[0])
      })
    }, boughtSeed)
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
            currentVeggies={userData.currentVegetables}
            selectedItem={selectedItem} 
            handleWater={handleWater} 
            handleSell={handleSell}
            handleBuy={handleBuy}
            handleSleep={handleSleep}
            handleFertilize={handleFertilize}/>
          <Farm 
            currentVeggies={userData.currentVegetables} 
            handleSelect={handleSelect}/>
      </main>
    </>
  );
}

export default App;
