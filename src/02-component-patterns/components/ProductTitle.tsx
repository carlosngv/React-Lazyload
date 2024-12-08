import styles from '../styles/styles.module.css';

import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";


export interface Props { 
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductTitle = ( { title, className, style } : Props ) => {

    const { product } = useContext(ProductContext);
    let productTitle: string;

    if( title ) {
        productTitle = title;
    } else if( product.title ){
        productTitle = product.title
    } else {
        productTitle = 'Product';
    }


    return (
        <span style={ style } className={ `${ styles.productDescription } ${ className }`  }>{ productTitle }</span>
    )
}
