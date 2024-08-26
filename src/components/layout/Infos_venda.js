import { FaPix } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { BsCreditCard2Front } from "react-icons/bs";
import styles from "./Infos_venda.module.css"

function Infos_venda(){
    return(
        <div className={styles.infos}>
            <div className={styles.infos_solo}>
                <BsCreditCard2Front />
                <div className={styles.solo_text}>
                    <h5>Parcelamento</h5>
                    <span>em até 6x sem juros</span>
                </div>
            </div>

            <div className={styles.infos_solo}>
                <TbTruckDelivery />
                <div className={styles.solo_text}>
                    <h5>Frete Grátis</h5>
                    <span>Para todo o RJ</span>
                </div>
            </div>

            <div className={styles.infos_solo}>
                <FaPix />
                <div className={styles.solo_text}>
                    <h5>10% de desconto</h5>
                    <span>em pagamentos via Pix</span>
                </div>
            </div>

            <div className={styles.infos_solo}>
                <FaWhatsapp />
                <div className={styles.solo_text}>
                    <h5>Compre pelo Whatsapp</h5>
                    <span>fala com um vendedor</span>
                </div>
            </div>
        </div>
    )
}

export default Infos_venda