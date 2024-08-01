import { useParams } from 'react-router-dom'
import useProducts from '../utils/useProducts';

const ProductDetail = () => {
  const {id} = useParams();
  const product  = useProducts(id);

  return !product ? ('Loading') : (
    <div className = "p-2 w-60 bg-slate-300 shadow-lg shadow-slate-800">
        <img src={product?.image} alt="img" className=" h-40 w-40 object-contain"/>
        <h1 className=" font-medium text-lg text-gray-800">{product?.name}</h1>
        <p className="font-medium text-base text-gray-800">Rs. {product?.price}</p>
        </div>
  )
}

export default ProductDetail