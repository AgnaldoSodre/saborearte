import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import { FaShoppingBasket } from "react-icons/fa";

function Navbar(){
    return(
        <div>
                <ul className={styles.lista}>

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/catalogo">Catálogo</Link>
                    </li>

                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>

                    <li>
                        <Link to="/carrinho">
                            <FaShoppingBasket />
                        </Link>
                    </li>

                </ul>
        </div>
    )
}

export default Navbar