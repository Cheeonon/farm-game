import Block from '../Block/Block';
import './Board.scss';

const Board = () => {
      const blocksInBoard = 9;
      const blockArr = []

      for (let i = 1; i <= blocksInBoard; i++){
            blockArr.push(<Block />);
      }

      return (
            <div className="board">
                  {blockArr}
            </div>
      )
}

export default Board