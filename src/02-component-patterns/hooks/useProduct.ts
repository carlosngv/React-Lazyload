import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/products.interfaces";


interface UseProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ( { product, onChange, value = 0, initialValues }: UseProductArgs ) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef( false );

    console.log({counter});

    const increaseBy = ( value: number ) => {
        const newValue = Math.max( counter + value, 0 );
        
        if( initialValues?.maxCount && newValue > initialValues?.maxCount ) return;

        setCounter( newValue );
        onChange && onChange({ product, count: newValue } );
    }


    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    useEffect(() => {
        if( !isMounted.current ) return;
        // ? Setea el valor del counter cuando ya está montado el componente.
        setCounter( value );
    }, [ value ]);

    // ? En el ciclo de vida del functional component, el useEffect se llama cuando ya se monta el componente
    // useEffect(() => {
    //     isMounted.current = true;
    // }, [])


    
    

    return {
        counter,
        increaseBy,
        reset,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
    };
}
