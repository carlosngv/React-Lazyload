import {  ProductCard } from '../components/index';
import '../styles/custom-styles.css';
import { products } from '../data/products.data';
import { useShoppingCart } from '../hooks/useShoppingCart';





export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>

            { 
                products.map( product => (
                    <ProductCard 
                        key={ product.id } 
                        product={ product } 
                        className="bg-dark" 
                        onChange={ ( e ) => onProductCountChange( e ) }
                        value={ shoppingCart[ product.id ]?.count || 0 }
                    >
                        <ProductCard.Image className="custom-image" />
                        <ProductCard.Title className="text-white" />
                        <ProductCard.Buttons className="custom-buttons" activeButtonClass="" />
                    </ProductCard>
                ))
            }
            </div>

            <div className="shopping-cart">

                {
                    Object.values(shoppingCart).map( product => (
                        <ProductCard 
                            key={ product.id } 
                            product={ product } 
                            className="bg-dark"
                            value={ product.count }
                            onChange={ onProductCountChange }
                            style={{
                                width: '100px',
                            }}
                        >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Buttons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
