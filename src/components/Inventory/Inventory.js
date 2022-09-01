import ActionSection from "../ActionSection/ActionSection";
import Items from "../Items/Items";
import "./Inventory.scss";

const Inventory = ({selectedItem}) => {
    return (
        <>
            <div className="inventory">
                <ActionSection selectedItem={selectedItem}/>
                <Items />
            </div>
        </>
    );
};

export default Inventory;
 