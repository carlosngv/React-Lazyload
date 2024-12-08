import styles from '../styles/styles.module.css';

import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
    className?: string;
    activeButtonClass?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props ) => {

    const { counter, increaseBy } = useContext(ProductContext);

    return (
        <div style={ style } className={ `${ styles.buttonsContainer } ${ className }` }>
            <button
                className={ styles.buttonMinus}
                onClick={ () => increaseBy( -1 ) }
            >-</button>
            <div
                className={ styles.countLabel}
            >{ counter }</div>
            <button
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( 1 ) }
            >+</button>
        </div>
    );
}
