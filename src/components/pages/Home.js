import styles from './Home.module.css'
import Btn_pedir from '../layout/Btn_pedir'
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlusG } from 'react-icons/fa'

function Home(){
    return(
        <section className={styles.section}>
            
            <div className={styles.container}>

                <h1>Bolos, Tortas e Doces</h1>
            
                <div className={styles.writer}>
                    <p className={styles.text}>Faça Já o seu Pedido!</p>
                </div>

            </div>

            <Btn_pedir url="/catalogo" text="pedir agora!!!" />

            <div className={styles.redes_socias}>
                <h2>Siga-nos</h2>
                <div className={styles.social_list}>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaGooglePlusG />
                </div>
            </div>



        </section>
    )
}

export default Home