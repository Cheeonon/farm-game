import './Block.scss'
import cropImg from '../../assets/images/Crop_Spritesheet.png';
import dirtImg from "../../assets/images/dirt.png";
import dirtWateredImg from "../../assets/images/dirt-watered.png";

const Block = ({handleSelect, id, untilHarvest, isWatered, name, isFertilized}) => {

  
  const cropsArray = [
    {
      name: "tomato",
      positions: [
        {
          x: 0, y: -97
        },
        {
          x: -95, y: -97
        },
        {
          x: -240, y: -100
        }
      ]
    },
    {
      name: "watermelon",
      positions: [
        {
          x: -288, y: -98
        },
        {
          x: -330, y: -96
        },
        {
          x: -380, y: -98
        },
        {
          x: -380, y: -98
        },
        {
          x: -430, y: -98
        },
        {
          x: -480, y: -98
        },
        {
          x: -530, y: -98
        }
      ]
    },
    {
      name: "grape",
      positions: [
        {
          x: -285, y: -240
        },
        {
          x: -335, y: -240
        },
        {
          x: -380, y: -240
        },
        {
          x: -480, y: -245
        },
        {
          x: -530, y: -245
        }
      ]
    },
    {
      name: "pineapple",
      positions: [
        {
          x: 1, y: -190
        },
        {
          x: -45, y: -190
        },
        {
          x: -45, y: -190
        },
        {
          x: -93, y: -190
        },
        {
          x: -140, y: -195
        },
        {
          x: -190, y: -195
        },
        {
          x: -240, y: -195
        }
      ]
    },
    {
      name: "strawberry",
      positions: [
        {
          x: 0, y: -290
        },
        {
          x: -240, y: -290
        }
      ]
    },
    {
      name: "orange",
      positions: [
        {
          x: 1, y: -385
        },
        {
          x: -48, y: -382
        },
        {
          x: -240, y: -385
        }
      ]
    },
    {
      name: "corn",
      positions: [
        {
          x: 1, y: -430
        },
        {
          x: -50, y: -430
        },
        {
          x: -145, y: -430
        },
        {
          x: -240, y: -430
        }
      ]
    },
    {
      name: "eggplant",
      positions: [
        {
          x: 0, y: -142
        },
        {
          x: -240, y: -142
        }
      ]
    },
    {
      name: "potato",
      positions: [
        {
          x: 0, y: -333
        },
        {
          x: -190, y: -340
        }
      ]
    },
  ];


  let foundPlantObj = cropsArray.find(item => item.name === name); 

  let positionX = 0;
  let positionY = 0;

  if(foundPlantObj && !(untilHarvest < 0)){
    positionX =  foundPlantObj.positions[untilHarvest].x;
    positionY =  foundPlantObj.positions[untilHarvest].y;
  } else if(untilHarvest < 0){
    positionX =  foundPlantObj.positions[0].x;
    positionY =  foundPlantObj.positions[0].y;
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