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
                        <button>Water</button>
                        <button>Fertilize</button>
                        <button>Sell</button>
                  </div>
            </div>
            <form action="">
                <button>Sleep</button>
                <select name="" id="">
                    <option value="carrot">Carrot</option>
                    <option value="carrot">Tomato</option>
                    <option value="carrot">Cucumber</option>
                </select>
                <button>Buy</button>
            </form>
        </>
    );
};

export default ActionSection;
