import './Items.scss';
import {getMarketData} from '../../utils/axiosUtils';
import { useEffect, useState } from 'react';
import cropImg from "../../assets/images/Crop_Spritesheet.png";

const Items = ({handleBuy}) => {
      const [marketDataArr, setMarketDataArr] = useState(null);

      useEffect(()=>{
          getMarketData((response) => {
              setMarketDataArr(response.data);
          })
      }, []);


      if(!marketDataArr){
            return null
      }
  return (
   <>
      <div className="items">            
            {marketDataArr.map(item => {

                  let positionX = 0;
                  let positionY = 0;

                  switch (item.name) {
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
                  return (
                        <div className="item"> 
                              <div 
                                    className="item__image" 
                                    style={{
                                    background: `url(${cropImg}) ${positionX}px ${positionY}px`
                              }}>
                              </div>
                        </div>
                  )
            })}
      </div>
      <form action="" className="action__form" onSubmit={handleBuy}>
            <select className="action__btn" name="seed" id="">
                  {marketDataArr.map(item => <option value={item.name}>{item.name}: {item.seedPrice}G</option> )}
            </select> 
            <button className="action__btn">Buy</button>
      </form>
   </>
  )
} 

export default Items