import Block from '../Block/Block';
import './Board.scss';

const Board = ({currentVeggies, handleSelect}) => {
      const blocksInBoard = 9;
      const blockArr = []

 
      for (let i = 0; i < blocksInBoard; i++){
            if (currentVeggies[i]) {
                  blockArr.push(<Block 
                  handleSelect={handleSelect} 
                  id={currentVeggies[i].id} 
                  name={currentVeggies[i].name}
                  untilHarvest={currentVeggies[i].untilHarvest}
                  isFertilized={currentVeggies[i].isFertilized}
                  isWatered={currentVeggies[i].isWatered}/>)
            } else {
                  blockArr.push(<Block handleSelect={handleSelect}/>);
            }
      }

      return (
            <div className="board">
                  {blockArr}
            </div>
      )
}

export default Board