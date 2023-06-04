import CartWidget from "./CartWidget.jsx/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (    
    <header>
        <h1>NavBar</h1>
    
    <nav>
        <ul>
            <li>limpieza</li>
            <li>lacteos</li>
            <li>almacen</li>
        </ul>
    </nav>

    <CartWidget/>
    </header>
  )
}

export default NavBar