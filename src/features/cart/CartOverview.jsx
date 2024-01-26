import { useSelector } from "react-redux";
import LinkButton from "../../ui/LinkButton";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;
  return (
    <div className='flex items-center justify-between bg-stone-800 text-sm md:text-base text-stone-200 uppercase
     py-4 px-4 sm:px-6'>
      <p className='space-x-4 sm:space-x-6 font-semibold text-stone-300'>
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <LinkButton to='/cart'>Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
