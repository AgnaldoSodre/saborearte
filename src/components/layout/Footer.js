import { FaWhatsapp, FaInstagram, FaGooglePlusG } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaWhatsapp /></li>
                <a href="https://www.instagram.com/_saboreartedanono/" target='_blank'><li><FaInstagram /></li></a>
                <a href="https://photos.google.com/share/AF1QipOAlRW50YgW1s7-wuG-7-HQe_SdRj5NwadsVyo7DPyxMdOzbXJCUySfi3EFWKIRaQ?key=RWRBdl94NUhvdFhDc0dlZlBtakhXUWdIYXFOTFN3" target='_blank'> <li><FaGooglePlusG /></li> </a>
            </ul>
            <p><span>Sabor e Arte da Nonô</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer