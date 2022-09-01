import Block from '../Block/Block';
import './Board.scss';

const Board = () => {
      const blocksInBoard = 9;
      const blockArr = []


      // 누른 block id확인해서 inventory한테 넘겨주기 - state (currentItem)
      const handleSelect = () => {

      }

      // axios로 data 받아와서 blockArr에 push 하기
      for (let i = 1; i <= blocksInBoard; i++){
            // prop으로 image 넘겨주기
            // 유저가 가지고 있는 아이템이 더이상 없을때는, 빈 img 넘겨주기
            blockArr.push(<Block onClick={handleSelect}/>);
      }

      return (
            <div className="board">
                  {blockArr}
            </div>
      )
}

export default Board