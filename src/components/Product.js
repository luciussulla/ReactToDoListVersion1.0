import { BsFillTrashFill } from 'react-icons/bs';
import {AiOutlineEdit} from 'react-icons/ai';

const Product = ({product, editProduct, removeProduct})=> {
  const {name, id} = product
  
  return (
    <li className="product">
        <span>{name}</span>
        <span><BsFillTrashFill onClick={()=>removeProduct(id)}/></span>
        <span><AiOutlineEdit onClick={()=>editProduct(id)}/></span>
    </li>
  )
}

export default Product