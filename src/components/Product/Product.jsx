import './Product.css'
import React from 'react'

export class Product extends React.Component {
    
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
                    <div className='product'>
                        <p className='title'>{this.props.title}</p>
                        <p className='price'>Price: ${this.props.price}</p>
                        <p className='description'>{this.props.description}</p>
                        <p className='category'>Category: {this.props.category}</p>
                        <img src={this.props.image} alt="" className='image'/>
                    </div>
        </>
    )
    }
}