import Block from '../Block/Block';
import './Board.scss';

const Board = ({currentVeggies, handleSelect}) => {
      const blocksInBoard = 9;
      const blockArr = []


      // axios로 data 받아와서 blockArr에 push 하기
      for (let i = 0; i < blocksInBoard; i++){
            // prop으로 image 넘겨주기
            // 유저가 가지고 있는 아이템이 더이상 없을때는, 빈 img 넘겨주기
            if (currentVeggies[i]) {
                  blockArr.push(<Block 
                  handleSelect={handleSelect} 
                  id={currentVeggies[i].id} 
                  name={currentVeggies[i].name}
                  untilHarvest={currentVeggies[i].untilHarvest}
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