import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/products.interfaces";

interface ProductInCart extends Product {
    count: number;
}

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [ key: string ]: ProductInCart }>({});

    const onProductCountChange = ( { product, count }: onChangeArgs ) => {

        console.log( count  )
        setShoppingCart( ( prev ) => {
          
            // ? Ubica el producto en el carrito.
            // ? Si no existe, de una vez lo crea
            const productInCart: ProductInCart = prev[ product.id ] || { ...product, count: 0 };

            if( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return {
                    ...prev,
                    [ product.id ]: productInCart,
                }
            } 

            // ? Borrar el producto, cuando el count === -1
            const { [ product.id ]: _, ...rest } = prev;
            return rest;
        
        })
    }


    return {
        shoppingCart,
        onProductCountChange
    }
}
