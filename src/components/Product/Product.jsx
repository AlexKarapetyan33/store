import './Product.css'
import React from 'react'

export class Product extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {count: 1}
        this.increment = this.increment.bind(this)
        this.discrement = this.discrement.bind(this)
    }

    discrement(){
        this.setState({count: --this.state.count})
    }

    increment(){
        this.setState({count : ++this.state.count})
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
                        <button onClick={this.discrement}>-</button>
                        <h1>{this.state.count}</h1>
                        <button onClick={this.increment}>+</button>
                    </div>
        </>
    )
    }
}