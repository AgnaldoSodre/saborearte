import styles from './Catalogo.module.css'

function Catalogo() {
    return (
        <section className={styles.catalogo_section}>

            <div className={styles.container}>

                <div className={styles.h1_container}>
                    <h1>Catálogo</h1>
                </div>

                <div className={styles.writer}>
                    <p className={styles.text}>Confira nossos Produtos!</p>
                </div>

                <div className={styles.produtos_list}>

                    <div className={styles.chamada}>
                        <div className={styles.nome_produto_container}>
                            <h1>Bolos</h1>
                        </div>

                        <div className={`${styles.produtos} ${styles.bolo_chocolate}`}>
                            <p>bolo de chocolate <span>R$23,99</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.bolo_laranja}`}>
                            <p>bolo de laranja <span>R$22,49</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.bolo_limao}`}>
                            <p>bolo de limão <span>R$24,99</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.bolo_cenoura}`}>
                            <p>bolo de cenoura <span>R$22,99</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.bolo_aniversario}`}>
                            <p>bolo de aniversário <span>R$26,49</span></p>
                        </div>
                    </div>

                    <div className={styles.chamada}>
                        <div className={styles.nome_produto_container}>
                            <h1>Tortas</h1>
                        </div>

                        <div className={`${styles.produtos} ${styles.torta_chocolate}`}>
                            <p>torta de chocolate <span>R$10,00</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.torta_morango}`}>
                            <p>torta de morango <span>R$25,99</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.torta_maracuja}`}>
                            <p>torta de maracujá <span>R$10,00</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.torta_limao}`}>
                            <p>torta de limão <span>R$10,00</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.torta_banana}`}>
                            <p>torta de banana <span>R$25,99</span></p>
                        </div>
                    </div>

                    <div className={styles.chamada}>
                        <div className={styles.nome_produto_container}>
                            <h1>Doces</h1>
                        </div>

                        <div className={`${styles.produtos} ${styles.doce_chocolate}`}>
                            <p>doce de chocolate <span>R$8,99</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.doce_limao}`}>
                            <p>doce de limão <span>R$8,99</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.doce_morango}`}>
                            <p>morangoffe <span>R$8,99</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.banoffe}`}>
                            <p>banoffe <span>R$8,99</span></p>
                        </div>
                        <div className={`${styles.produtos} ${styles.doce_cenoura}`}>
                            <p>doce de cenoura <span>R$8,99</span></p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Catalogo