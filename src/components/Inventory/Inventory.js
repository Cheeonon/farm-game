import ActionSection from "../ActionSection/ActionSection";
import Items from "../Items/Items";
import "./Inventory.scss";

const Inventory = ({selectedItem, handleWater, handleFertilize, handleSell, handleBuy, handleSleep}) => {
    return (
        <>
            <div className="inventory">
                <ActionSection 
                    selectedItem={selectedItem} 
                    handleWater={handleWater} 
                    handleSell={handleSell}
                    handleBuy={handleBuy}
                    handleSleep={handleSleep}
                    handleFertilize={handleFertilize}/>
                <Items />
            </div>
        </>
    );
};

export default Inventory;
 