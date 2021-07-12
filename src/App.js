import './App.css';
import {useState} from 'react'
import InfoModal from './components/InfoModal'
import List from './components/List'

function App() {
const [products, setProducts] = useState([])
const [value, setValue] = useState('')
const [status, setStatus] = useState('')
const [isModalVisible, setIsModalVisible] = useState(false)

const clearList = ()=> {
  setProducts([])
}

const handleNewProduct = (e)=> {
  setValue(e.target.value)
}

const handleAddProduct = ()=> {
  const product = {
    id: Math.floor(Math.random()*2014), 
    name: value
  }
  setProducts(prevProducts=> {
      return [...prevProducts, product]
  })
  setValue('')
  setStatus('ok')
  setIsModalVisible(true)
}

const handleRemoveProduct = (id)=> {
  console.log("return product")
  setStatus('warning')
  setIsModalVisible(true)

  setProducts(prevProducts => {
    return prevProducts.filter(product => product.id !== id)
  })

}

const handleEditProduct = ()=> {
  console.log("edit product")
}
return (
  <div className="App">
    <header className="App-header">
      <div className="wrapper">

      <section className="section-box">
        {isModalVisible && <InfoModal status={status} setIsModalVisible={setIsModalVisible}/>}
        <h2 className="title">Grocery bud</h2>
        <div className="form-fields">
          <input className="input" type="text" value={value} placeholder="enter product" onChange={handleNewProduct}/>
          <button className="add-button" onClick={handleAddProduct}>Add to list</button>
        </div>
        <List products={products} editProduct={handleEditProduct} removeProduct={handleRemoveProduct} status={status}/>
        <div className="separator-div"></div>
        <button className="add-button clear-list" onClick={clearList}>Clear List</button>
      </section>
      </div>
    </header>
  </div>
);
}

export default App;
