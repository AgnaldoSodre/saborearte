import styles from './Aside.module.css'
import Btn_pedir from '../form/Btn_pedir'

function Aside(){
    return (
        <aside className={styles.aside_compra}>

            <div className={styles.resumo_container}>
                <h2>Resumo da compra</h2>
            </div>

            <div className={styles.sub_total_container}>

                <div className={styles.span_flex}>

                    <span>Sub-total</span>
                    <span>R$480</span>

                </div>

                <div className={styles.span_flex}>

                    <span>Frete</span>
                    <span>Gratuito</span>

                </div>

            </div>

            <div className={styles.total_container}>

                <span>Total</span>
                <span>R$480</span>

            </div>

            <Btn_pedir url="/pagamento" text="Finalizar Compra" />

        </aside>
    )
}

export default Aside