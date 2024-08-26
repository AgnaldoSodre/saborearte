import { Link } from 'react-router-dom'
import styles from './Btn_pedir.module.css'

function Btn_pedir({url, text}){
    return(
        <Link className={styles.btn} to={url}>{text}</Link>
    )
}

export default Btn_pedir