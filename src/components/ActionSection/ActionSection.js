import './ActionSection.scss';
import {getMarketData} from '../../utils/axiosUtils';
import { useEffect, useState } from 'react';
import coinImage from "../../assets/images/coin.png";

const ActionSection = ({selectedItem}) => {
//    axiosUtils.getMarketItems()
//     .then(resolve => {
//         const itemsArr = resolve.data;
//         const itemsList = itemsArr.map(item => item.name);
//     })
    const [marketDataForSelectedItem, setMarketDataForSelectedItem] = useState(null);
    const isAbleToSell = Number(selectedItem.untilHarvest) <= 0;

    useEffect(()=>{
        getMarketData((response) => {
            const marketDataArray = response.data;
            const singleMarketData = marketDataArray.find((item) => {
                return item.name === selectedItem.name
            })
            setMarketDataForSelectedItem(singleMarketData);
        })
    }, [selectedItem]);

    const calculatePrice = (selectedItem) => {
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

    const handleWater = () => {
        // water = true 만드는 axios post
    }

    const handleFertilize = () => {
        // Fertilize = true 만드는 axios post
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

    return (
        <>
            <div className="action">
                  <div className="action__crop">
                        <div className="action__image"></div>
                        <ul className="action__description">
                              <li>Name: {selectedItem.name}</li>
                              <li className='action__list-item'>Selling Price: 
                                {marketDataForSelectedItem ? " " + calculatePrice(selectedItem) : ""}
                                <img src={coinImage} alt="coin" className='action__coin'/>
                              </li>
                              <li>Days to maturity: {selectedItem.untilHarvest}</li>
                        </ul>
                  </div>
                  <div className="action__action-list">
                        <button className="action__btn" onClick={handleWater}>Water</button>
                        <button className="action__btn" onClick={handleFertilize}>Fertilize</button>
                        <button className={`action__btn ${isAbleToSell || "action__btn--disabled"}`} onClick={handleSell} disabled={!isAbleToSell}>Sell</button>
                  </div>
            </div>
            <form action="" className="action__form">
                <button className="action__btn" onClick={handleSleep}>Sleep</button>
                <select className="action__btn" name="" id="">
                    {/* {itemsList.map(item => <option value={item}>{item}</option> )} */}
                    <option value="carrot">Carrot</option>
                    <option value="Tomato">Tomato</option>
                    <option value="Cucumber">Cucumber</option>
                </select> 
                <button className="action__btn" onClick={handleBuy}>Buy</button>
            </form>
        </>
    );
};

export default ActionSection;
