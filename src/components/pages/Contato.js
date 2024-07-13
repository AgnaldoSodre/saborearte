import styles from './Contato.module.css'

function Contato(){
    return(
        <section className={styles.section}>
            

                <h1>Contato</h1>
            
                <div className={styles.writer}>
                    <p className={styles.text}>Mande a Sua Mensagem!</p>
                </div>

                <form className={styles.form}>
                    <input className={styles.input_text} type="text" placeholder="digite seu nome" />
                    <input className={styles.input_text} type="email" name="email" id="email" placeholder="digite seu email" />
                    <select className={styles.input_select} name="assunto" id="assunto">
                        <option value="reportar erro">reportar erro</option>
                        <option value="Duvida">Dúvida</option>
                        <option value="anuncios">anúncios</option>
                        <option value="outros">outros</option>
                    </select>
                    <textarea className={styles.input_textarea} name="mensagem" id="text_area" placeholder="digite sua mensagem"></textarea>
                    <input className={styles.input_submit} type="submit" />
                </form>

            </section>
    )
}

export default Contato