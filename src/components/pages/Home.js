import styles from './Home.module.css'
import Infos_venda from '../layout/Infos_venda'
import Banner from '../layout/Banner'
import Promocoes from '../layout/Promocoes'

function Home(){
    return(
        <section className={styles.section}>
            
            <div className={styles.container}>

                <Banner />
                <Infos_venda />
                <Promocoes />
                
            </div>


        </section>
    )
}

export default Home