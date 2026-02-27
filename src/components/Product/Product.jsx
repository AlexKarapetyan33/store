import './Product.css'
import React from 'react'

export class Product extends React.Component {
    
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
            {
                this.props.products.map((elem) => {
                    return <div className='product'>
                        <p className='title'>{elem.title}</p>
                        <p className='price'>Price: ${elem.price}</p>
                        <p className='description'>{elem.description}</p>
                        <p className='category'>Category: {elem.category}</p>
                        <img src={elem.image} alt="" className='image'/>
                    </div>
                })
            }
        </>
    )
    }
}