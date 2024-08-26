import Btn_pedir from "../form/Btn_pedir"
import styles from "./Banner.module.css"

function Banner(){
    return(
        <div className={styles.banner}>

            <div className={styles.banner_info}>
                <h1>Mais <br />Vendidos</h1>
                <Btn_pedir text="Compre agora" url="/catalogo" />
            </div>

            <div className={styles.banner_img}>
                <div className={`${styles.img_solo} ${styles.img1}`}></div>
                <div className={`${styles.img_solo} ${styles.img2}`}></div>
                <div className={`${styles.img_solo} ${styles.img3}`}></div>
            </div>

        </div>
    )
}

export default Banner