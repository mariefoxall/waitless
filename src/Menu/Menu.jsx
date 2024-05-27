import "./Menu.css";
import menu from "../assets/menu-red.svg";
import sawblade from "../assets/sawblade.png";

function Menu() {
  return (
    <div className="nav-menu">
      <button className="menu-button">
        <img className="menu-icon" src={menu} />
        <img src={sawblade} className="sawblade" alt="Spinning sawblade icon" />
      </button>
      <nav className="nav-menu-links">
        <div className="nav-menu-links__container">
          <a href="/shows">shows</a>
          <a href="/videos">videos</a>
          <a href="/music">music</a>
          <a href="/shop">merch</a>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
