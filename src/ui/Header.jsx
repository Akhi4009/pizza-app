import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className=' flex items-center justify-around px-4 sm:px-6 py-3 bg-yellow-500
     uppercase border-b border-stone-200'>
    <Link to='/' className='tracking-widest'>Pizza App</Link>
    <SearchOrder/>
    <Username/>
    </header>
  )
}

export default Header