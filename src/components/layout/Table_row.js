import styles from "./Table_row.module.css"
import Produto_carrinho from "./Produto_carrinho";
import { useState } from "react";

function Table_row(){

    const [cart , setCart] = useState([1])

    return (
        <table className={styles.tablerow}>

            <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>.</th>
            </tr>

            {cart.map(item =>(<Produto_carrinho />))}

            {cart.length === 0 && (
                <tr>
                    <td colSpan='5'style={{fontSize : '45px'}}>O seu Carrinho está vazio!</td>
                </tr>
            )} 

            


        </table>
    )
}
export default Table_row