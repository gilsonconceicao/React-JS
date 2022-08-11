// component 
import HierarquiaComponent from "./HierarquiaComponent";

const HeaderComponent = () => {
    const namePerson = 'Junior'; 

    const product = {
        name: 'Monitor',
        disponible: true, 
        price: 2100.00
    }

    return (
        <div>
            <h2>This is my component header</h2>
            <HierarquiaComponent/>
            <p>Hello, {namePerson}.</p>
            <p>
                name: {product.name}<br/>
                disponible: {product.disponible}<br/>
                price: {product.price}<br/>
            </p>
        </div>
    )
}

export default HeaderComponent; 