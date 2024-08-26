import { GiPieSlice } from "react-icons/gi";
import Navbar from './Navbar';
import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
      <header className={styles.App_header}>

        <Link to="/" className={styles.logo}>

        <a>sabor e arte</a>
          <GiPieSlice /> 
          

        </Link>

        <Navbar className={styles.navbar} />

      </header>
    )
}

export default Header