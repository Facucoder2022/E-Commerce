import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"

const NavBar = ({background})=>{
const logo = ""
    return(
        
        <header className={`header background--${background}`}>

        <div className="header-container">

            <div className="menu-button">
            <FontAwesomeIcon icon="fa-solid fa-bars-filter" />
            <small>Menu</small>

            </div>

            <nav>
                <ul className="nav-container">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li className="products-item">
                        <a href="/">Products <span className="arrow"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className="logo-container">
                <img src="" alt="logo" />
            </div>


        </div>

        <div>
            <CartWidget/>
        </div>

        <div>
            <ItemListContainer/>
        </div>

        </header>
    )
}
export default NavBar