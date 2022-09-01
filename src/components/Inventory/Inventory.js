import ActionSection from "../ActionSection/ActionSection";
import Items from "../Items/Items";
import "./Inventory.scss";

const Inventory = () => {
    return (
        <>
            <div className="inventory">
                <ActionSection />
                <Items />
            </div>
        </>
    );
};

export default Inventory;
 