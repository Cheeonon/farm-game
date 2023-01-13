import './ActionSection.scss';
import {getMarketData} from '../../utils/axiosUtils';
import { useEffect, useState } from 'react';
import coinImage from "../../assets/images/coin.png";
import cropImg from '../../assets/images/Crop_Spritesheet.png';

const ActionSection = ({selectedItem, handleWater, handleFertilize, handleSell, handleBuy, handleSleep}) => {
//    axiosUtils.getMarketItems()
//     .then(resolve => {
//         const itemsArr = resolve.data;
//         const itemsList = itemsArr.map(item => item.name);
//     })
    const [marketDataForSelectedItem, setMarketDataForSelectedItem] = useState(null);
    const isAbleToSell = selectedItem ? Number(selectedItem.untilHarvest) <= 0 : false;
    const [marketDataArr, setMarketDataArr] = useState(null);

    useEffect(()=>{
        getMarketData((response) => {
            setMarketDataArr(response.data);

            const singleMarketData = response.data.find((item) => {
                return item.name === selectedItem.name
            })
            setMarketDataForSelectedItem(singleMarketData);
        })
    }, [selectedItem]);

    const calculatePrice = (selectedItem) => {
      if(!selectedItem){
        return 0;
      }
        let price = marketDataForSelectedItem.sellingPrice;

        if (selectedItem.untilHarvest > 0) {
            price = 0;
        } else if (selectedItem.untilHarvest < 0) {
            price /= 2;
        }

        if (selectedItem.isFertilized) {
            price *= 2;
        }

        return price;
    }

    if(!marketDataArr){
      return;
    }

    let positionX = 0;
    let positionY = 0;

    if(selectedItem){
      switch (selectedItem.name) {
          case "tomato":
            positionX = 0;
            positionY = -95;
            break;
          case "watermelon":
            positionX = 290;
            positionY = -95;
            break;
          case "grape":
            positionX = 290;
            positionY = -240;
            break;
          case "pineapple":
            positionX = 0;
            positionY = -190;
            break;
          case "strawberry":
            positionX = 0;
            positionY = -288;
            break;
          case "orange":
            positionX = 0;
            positionY = -383;
            break;
          case "corn":
            positionX = 0;
            positionY = -430;
            break;
          case "eggplant":
            positionX = 0;
            positionY = -140;
            break;
          case "potato":
            positionX = 0;
            positionY = -335;
            break;
        }
    }
    return (
        <>
            <div className="action">
                  <div className="action__crop">
                        <div className="action__image"
                             style={{
                                background: `url(${cropImg}) ${positionX}px ${positionY}px`
                             }}
                        ></div>
                        <ul className="action__description">
                              <li>Name: {selectedItem ? selectedItem.name : ""}</li>
                              <li className='action__list-item'>Selling Price: 
                                {marketDataForSelectedItem ? " " + calculatePrice(selectedItem) : ""}
                                <img src={coinImage} alt="coin" className='action__coin'/>
                              </li>
                              <li>Days to maturity: {selectedItem ? selectedItem.untilHarvest : "" }</li>
                        </ul>
                  </div>
                  <div className="action__action-list">
                        <button className="action__btn" onClick={handleWater}>Water</button>
                        <button className="action__btn" onClick={handleFertilize}>Fertilize</button>
                        <button className={`action__btn ${isAbleToSell || "action__btn--disabled"}`} onClick={handleSell} disabled={!isAbleToSell}>Sell</button>
                  </div>
            </div>
            <button className="action__btn action__btn--sleep" onClick={handleSleep}>Sleep</button>
        </>
    );
};

export default ActionSection;
