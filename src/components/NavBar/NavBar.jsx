import Logo from "./img/Logo.png"
import Cart from "./img/cart.jpg"
import "./navBar.css"
const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar"> 
        <div className="navbar-logo"> 
            <img src={Logo} alt="logo laboratoria"/>
            <p className="">MarketPlace<span className="">Labarotaria</span></p>
        </div>
        <div className="navbar-functions">
            <p> Categoria</p>
            <img src={Cart} alt="carrito de compras" />
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
