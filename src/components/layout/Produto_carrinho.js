import { IoMdClose } from "react-icons/io";
import { RiAddLine , RiSubtractLine } from "react-icons/ri";
import styles from './Produto_carrinho.module.css'

function Produto_carrinho(){
    return (

        <>
            <tr className={styles.produto_carrinho}>
                <td>
                    <div className={styles.img_produto}></div>
                    <div className={styles.info_produto}>
                        <h3>Nome do Produto</h3>
                        <p>categoria</p>
                    </div>
                </td>

                <td>R$120,00</td>

                <td>
                    <div className={styles.quantidade}>
                        <button> <RiSubtractLine /> </button>
                        <span>2</span>
                        <button> <RiAddLine /> </button>
                    </div>
                </td>

                <td>R$240,00</td>

                <td>
                    <button> <IoMdClose /> </button>
                </td>
            </tr>

        </>
    )
}

export default Produto_carrinho