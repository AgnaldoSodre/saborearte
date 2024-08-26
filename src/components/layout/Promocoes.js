import styles from './Promocoes.module.css'
import { FaShoppingBasket } from "react-icons/fa";

function Promocoes(){
    return(
        <div className={styles.section}>
            <div className={styles.chamada}>
                <h2>Ofertas do Mês</h2>
                <span>disponíveis até o dia 01/09</span>
            </div>

            <div className={styles.produtos}>
                <div className={styles.produtos_solo}>
                    <div className={styles.img}></div>
                    <h4>nome do produto</h4>
                    <span>R$30,00</span>
                    <p>R$20,00</p>
                    <button> <FaShoppingBasket /></button>
                </div>

                <div className={styles.produtos_solo}>
                    <div className={styles.img}></div>
                    <h4>nome do produto</h4>
                    <span>R$30,00</span>
                    <p>R$20,00</p>
                    <button> <FaShoppingBasket /></button>
                </div>
                

                <div className={styles.produtos_solo}>
                    <div className={styles.img}></div>
                    <h4>nome do produto</h4>
                    <span>R$30,00</span>
                    <p>R$20,00</p>
                    <button> <FaShoppingBasket /></button>
                </div>
                

                <div className={styles.produtos_solo}>
                    <div className={styles.img}></div>
                    <h4>nome do produto</h4>
                    <span>R$30,00</span>
                    <p>R$20,00</p>
                    <button> <FaShoppingBasket /></button>
                </div>
                

                <div className={styles.produtos_solo}>
                    <div className={styles.img}></div>
                    <h4>nome do produto</h4>
                    <span>R$30,00</span>
                    <p>R$20,00</p>
                    <button> <FaShoppingBasket /></button>
                </div>
                
                
            </div>
        </div>
    )
}

export default Promocoes