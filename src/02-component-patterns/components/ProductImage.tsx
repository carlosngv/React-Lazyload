import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'

import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductImage = () => {

    const { product } = useContext(ProductContext);

    return (
        <img className={ styles.productImg } src={ product.img ? product.img : noImage } alt="Product image"/>
    );

}
