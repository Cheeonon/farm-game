import Board from '../Board/Board';
import './Farm.scss';

const Farm = ({currentVeggies, handleSelect}) => {


  return (
    <>
     <div className="farm">
        <Board currentVeggies={currentVeggies} handleSelect={handleSelect}/>
      </div>
    </>
  )
}

export default Farm