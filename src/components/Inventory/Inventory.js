import ActionSection from "../ActionSection/ActionSection";
import Items from "../Items/Items";
import "./Inventory.scss";

const Inventory = () => {
    return (
        <>
            <div className="inventory">
                <h1 className="inventory__title">Inventory</h1>
                <ActionSection />
                <Items />
            </div>
        </>
    );
};

export default Inventory;
 