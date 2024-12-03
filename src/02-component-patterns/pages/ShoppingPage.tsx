
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../components/index';

const product = {
    id: 'ABC',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'

}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                <ProductCard product={ product }>
                    <ProductImage />
                    <ProductTitle title={ '' } />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
