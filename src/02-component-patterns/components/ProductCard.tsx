import React, { ReactElement, createContext } from "react";
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/products.interfaces';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}


export const ProductCard = ( { product, children, className, style, onChange, value = 0}: Props ) => {

    const { counter, increaseBy } = useProduct( { onChange, product, value } );

    return (
        <Provider value={ { counter, increaseBy, product, value } }>
            <div style={ style } className={ `${ styles.productCard } ${ className }` }>
                { children }
            </div>
        </Provider>
    )
}
