const products = [
    {
        id: 1,
        title: 'Garlic',
        isFruit: false,
    },
    {
        id: 2,
        title: 'Cabbage',
        isFruit: false,
    },
    {
        id: 3,
        title: 'Apple',
        isFruit: true,
    }
];

export default function ListOFItems(){
    return (
        <ul>
            {products.map((product,productIndex) => (
                <li 
                    key={product.id} 
                    style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>

                    {product.title}
                    
                </li>
            ))}
        </ul>
    );
}