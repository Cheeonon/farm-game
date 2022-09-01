import Board from '../Board/Board';
import './Farm.scss';

const Farm = ({currentVeggies}) => {


  return (
    <>
     <div className="farm">
        <Board currentVeggies={currentVeggies}/>
      </div>
    </>
  )
}

export default Farm