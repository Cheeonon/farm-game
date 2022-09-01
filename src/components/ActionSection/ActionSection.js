import './ActionSection.scss'

const ActionSection = () => {
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
                        <button className="action__btn">Water</button>
                        <button className="action__btn">Fertilize</button>
                        <button className="action__btn">Sell</button>
                  </div>
            </div>
            <form action="" className="action__form">
                <button className="action__btn">Sleep</button>
                <select className="action__btn" name="" id="">
                    <option value="carrot">Carrot</option>
                    <option value="carrot">Tomato</option>
                    <option value="carrot">Cucumber</option>
                </select>
                <button className="action__btn">Buy</button>
            </form>
        </>
    );
};

export default ActionSection;
