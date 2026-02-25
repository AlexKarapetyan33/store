import './App.css'
import { Products } from './components/Products/Products'

function App(props) {
  return(
    <>
    <main>
      <div>
        <Products products={props.products}/>
      </div>
    </main>
    </>
  )
}

export default App
