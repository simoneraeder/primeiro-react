import {useState} from "react";
import styles from "./ContadorStateless.module.css";

export function ContadorStateless({
    contador,
    adicionarContador
}) {
    return(
        <div className={styles.container}>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
        </div>    
    );
}

