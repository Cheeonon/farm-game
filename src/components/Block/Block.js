import './Block.scss'
import cropImg from '../../assets/images/Crop_Spritesheet.png';
import dirtImg from "../../assets/images/dirt.png";
import dirtWateredImg from "../../assets/images/dirt-watered.png";

const Block = ({handleSelect, id, untilHarvest, isWatered, name, isFertilized}) => {
  let positionX = 0;
  let positionY = 0;

  switch (name) {
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
      <div className="block" style={{
        background: `url(${isWatered ? dirtWateredImg : dirtImg}) center no-repeat`,
        border: isFertilized? "3px dashed springgreen" : ""
      }}>
            <div 
              className={id ? "block__crop" : ""}
              onClick={()=> {handleSelect(id)}}
              style={{
                background: `url(${cropImg}) ${positionX}px ${positionY}px`
              }}
              ></div>
      </div>
  )
}

export default Block 