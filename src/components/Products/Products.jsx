import './Products.css'
import { Product } from '../Product/Product'

export function Products(props) {
    return(
        <Product products={props.products}/>
    )
}