import styles from './Carrinho.module.css'
import Table_row from '../layout/Table_row';
import Aside from '../layout/Aside';

function Carrinho(){


    return(
        <section className={styles.carrinho_section}>

        <div className={styles.container}>

            <div className={styles.writer}>
                <h1 className={styles.text}>Seu Carrinho</h1>
            </div>


            <div className={styles.table_container}>

                <Table_row />    

                <Aside />

            </div>


        </div>
    </section>
    )
}

export default Carrinho