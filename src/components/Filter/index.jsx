import { useState } from "react";
import "./style.css";

export const Filter = () => {

      const [typeMenu, setTypeMenu] = useState("Filtar");
      const [search, setSearch] = useState("");


      const handleTypeMenu = (e) => {
        setTypeMenu(e.target.value);
      };

      const handleSearch = (event) => {
        setSearch(event.target.value);
      };

    return (
        <div className="containerFilter">
            <h1 className="container-title"> ¿Qué quieres comprar hoy? </h1>
            <div class="searchBox">
                <input type="text" value={search} placeholder='Buscar "iphone.."' class="search_text" onChange={handleSearch}></input>
                <div class="searchBox_icon-lupa"></div>
            </div>

           {/*  <select className="filter_select" name="select_type" value={typeMenu} onChange={handleTypeMenu}>
                <option >1</option>
                <option >2</option>
                <option >3</option>
            </select> */}
        </div>
    );
};
