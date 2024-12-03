import styles from '../styles/styles.module.css';

import { useContext } from "react";
import { ProductContext } from "./ProductCard";


export const ProductTitle = ({ title }: { title: string }) => {

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
        <span className={ styles.productDescription }>{ productTitle }</span>
    )
}
