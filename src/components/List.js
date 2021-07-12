import Product from './Product'

const List = ({products, editProduct, removeProduct})=> {
  return (
    <ul className="list">
      {
        products.map(product=> {
        return <Product key={product.id} product={product} editProduct={editProduct} removeProduct={removeProduct} />
        })
      }
    </ul>
  )
}

export default List