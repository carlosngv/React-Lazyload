import styles from '../styles/styles.module.css';

import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
    className?: string;
    activeButtonClass?: string;
    style?: React.CSSProperties;

}

export const ProductButtons = ({ className, style }: Props ) => {

    // TODO: desestructurar maxCount
    const { counter, increaseBy, maxCount } = useContext(ProductContext);
    
    // TODO: useCallback isMaxReached cuando el counter cambie, retorna un boolean
    const isMaxReached = useCallback(
        () => !!maxCount && maxCount === counter
        , [ counter ]);

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
                className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }` }
                onClick={ () => increaseBy( 1 ) }
                disabled={ isMaxReached() }
            >+</button>
        </div>
    );
}
