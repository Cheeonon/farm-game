import './ActionSection.scss';
import {} from '../../utils/axiosUtils';


const ActionSection = () => {
//    axiosUtils.getMarketItems()
//     .then(resolve => {
//         const itemsArr = resolve.data;
//         const itemsList = itemsArr.map(item => item.name);
//     })

    const handleWater = () => {
        // water = true 만드는 axios post
    }

    const handleFertilize = () => {
        // Fertilize = true 만드는 axios post
    }

    const handleSell = () => {
        // balance 올라가고
        // 해당하는 item axios delete
    }

    const handleSleep = () => {
        // axios get?
        // update each items?
    }

    const handleBuy = () => {
        // 누르면 array update
        // axios post
    }

    return (
        <>
            <div className="action">
                  <div className="action__crop">
                        <div className="action__image"></div>
                        <ul className="action__description">
                              <li>Name: Tomato</li>
                              <li>Current Selling Price: </li>
                              <li>Days to maturity: </li>
                        </ul>
                  </div>
                  <div className="action__action-list">
                        <button className="action__btn" onClick={handleWater}>Water</button>
                        <button className="action__btn" onClick={handleFertilize}>Fertilize</button>
                        <button className="action__btn" onClick={handleSell}>Sell</button>
                  </div>
            </div>
            <form action="" className="action__form">
                <button className="action__btn" onClick={handleSleep}>Sleep</button>
                <select className="action__btn" name="" id="">
                    {/* {itemsList.map(item => <option value={item}>{item}</option> )} */}
                    <option value="carrot">Carrot</option>
                    <option value="Tomato">Tomato</option>
                    <option value="Cucumber">Cucumber</option>
                </select> 
                <button className="action__btn" onClick={handleBuy}>Buy</button>
            </form>
        </>
    );
};

export default ActionSection;
