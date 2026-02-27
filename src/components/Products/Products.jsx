import './Products.css'
import { Product } from '../Product/Product'
import React from 'react'

export class Products extends React.Component {

    constructor(props){
        super(props)
    }

     render(){
        return(
            <>
                {
                    this.props.products.map((product) => <Product product={product}/>)
                }
            </>
        )
     }
}