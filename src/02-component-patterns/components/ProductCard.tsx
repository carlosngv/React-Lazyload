import React, { createContext } from "react";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/products.interfaces';

import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children?: (args: ProductCardHandlers ) => JSX.Element,
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}


export const ProductCard = ( { product, children, className, style, onChange, value, initialValues }: Props ) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialValues } );

    return (
        <Provider value={ { counter, increaseBy, product, value, maxCount } }>
            <div style={ style } className={ `${ styles.productCard } ${ className }` }>
                { children!({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    increaseBy,
                    product,
                    reset
                }) }
                
            </div>
        </Provider>
    )
}
