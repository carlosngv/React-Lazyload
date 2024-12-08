import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'

import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ( { img = noImage, className, style }: Props ) => {

    const { product } = useContext(ProductContext);

    return (
        <img style={ style } className={ ` ${ styles.productImg } ${ className }` } src={ product.img ? product.img : img } alt="Product image"/>
    );

}
