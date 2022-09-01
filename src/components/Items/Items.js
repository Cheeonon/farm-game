import './Items.scss';

const Items = () => {
      const itemsInInventory = 12;
      const itemsArr = [];
      for (let i = 1; i <= itemsInInventory; i++){
            itemsArr.push(i);
      }
  return (
   <>
      <div className="items">            
            {itemsArr.map(item => (
                  <div className="item">
                        <div className="item__image"></div>
                  </div>
            ))}
      </div>
   </>
  )
} 

export default Items