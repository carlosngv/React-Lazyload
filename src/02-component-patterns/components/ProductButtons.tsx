import styles from '../styles/styles.module.css';

import { useContext } from "react";
import { ProductContext } from "./ProductCard";



export const ProductButtons = () => {

    const { counter, increaseBy } = useContext(ProductContext);

    return (
        <div className={ styles.buttonsContainer }>
            <button
                className={ styles.buttonMinus}
                onClick={ () => increaseBy( -1 ) }
            >-</button>
            <button
                className={ styles.countLabel}
            >{ counter }</button>
            <button
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( 1 ) }
            >+</button>
        </div>
    );
}
