import { useDispatch, useSelector } from "react-redux";
import {  toast } from 'react-hot-toast';
import {add, remove} from "../redux/Slices/cartSlice";

const Product = ({post}) => {

  const {cart}= useSelector((state) =>  state);
  const dispatch = useDispatch();
  
  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart =()=>{
    dispatch(remove(post.id));
    toast.error("Item removed Form Cart")
  }
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110
     transition duration-300 ease-in shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] gap-3 p-4 mt-10 ml-5 rounded-xl">
      <div >
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0,10).join(" ")+"..."}
        </p>
      </div>
      <div>
        <img alt="photo" src={post.image} className="h-[180px]"/>
      </div>
      <div className="flex justify-between gap-12">
        <div>
          <p className="text-green-600 font-bold ">${post.price}</p>
        </div>
        {
          cart.some((p) => p.id == post.id) ?
          (<button onClick={removeFromCart} 
            className="text-gray-700 border-2 border-gray-700 rounded-full font-bold 
            text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-200">Remove Item</button>) :
          (<button onClick={addToCart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-bold 
            text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-200">Add to cart</button>)
        }
      </div>
    </div>
  );
};

export default Product;
