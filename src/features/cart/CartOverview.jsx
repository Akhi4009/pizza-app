import {Link} from "react-router-dom"
import LinkButton from "../../ui/LinkButton";
function CartOverview() {
  return (
    <div className='flex items-center justify-between bg-stone-800 text-sm md:text-base text-stone-200 uppercase
     py-4 px-4 sm:px-6'>
      <p className='space-x-4 sm:space-x-6 font-semibold text-stone-300'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <LinkButton to='/cart'>Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
