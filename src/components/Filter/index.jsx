import { useState } from "react";
// import { useWaiterContext } from "../../../context/WaiterContext";
// import { CardProducts } from "./ContainerProducts/CardProducts";
import "./style.css";

export const Filter = () => {

      const [typeMenu, setTypeMenu] = useState("Filtar");
    //   const { products } = useWaiterContext();


      const handleTypeMenu = (e) => {
        setTypeMenu(e.target.value);
      };


    return (
        <div class="containerFilter">
            <div class="searchBox">
                <input type="text" value="" placeholder="Buscar" class="search_text"></input>
                <div class="searchBox_icon-lupa"></div>
            </div>

            <select className="filter_select" name="select_type" value={typeMenu} onChange={handleTypeMenu}>
                <option >1</option>
                <option >2</option>
                <option >3</option>
            </select>
        </div>
    );
};
