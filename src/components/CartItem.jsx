import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"

const CartItem = (item, itemIndex) => {
  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
  <div>
    <div>
      <div>
        <img src={item.image}/>
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default CartItem;
