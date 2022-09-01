import './Items.scss';

const Items = () => {
      const itemsInInventory = 12;
      const itemsArr = [];

      // axios로 받아온 data로 만들기
      for (let i = 1; i <= itemsInInventory; i++){
             // prop으로 image 넘겨주기
            // 유저가 가지고 있는 아이템이 더이상 없을때는, 빈 img 넘겨주기
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