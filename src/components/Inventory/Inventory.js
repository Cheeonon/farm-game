import ActionSection from "../ActionSection/ActionSection";
import Items from "../Items/Items";
import "./Inventory.scss";

const Inventory = ({currentVeggies}) => {
    return (
        <>
            <div className="inventory">
                <ActionSection currentVeggies={currentVeggies}/>
                <Items />
            </div>
        </>
    );
};

export default Inventory;
 