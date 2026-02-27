import './App.css'
import React from 'react'
import { Products } from './components/Products/Products'

class App extends React.Component {

  

  render(){
    return(
    <>
    <main className='main'>
      
        <Products products={this.props.products}/>
      
    </main>
    </>
  )
  }
}

export default App
