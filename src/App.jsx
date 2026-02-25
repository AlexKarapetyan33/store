import './App.css'
import { Products } from './components/Products/Products'

function App(props) {
  return(
    <>
    <main className='main'>
      
        <Products products={props.products}/>
      
    </main>
    </>
  )
}

export default App
