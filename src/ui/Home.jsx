import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
 const {username} = useSelector(store=>store.user)
  return (
    <div className='my-10 px-4 sm:my-16 text-center'>
      <h1 className='mb-8 text-center text-xl
       font-semibold md:text-3xl'>
        The best pizza.
        <br />
        <span className='text-yellow-400'>
        Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? <CreateUser/> : <Button to="/menu"
    type='primary'>Continure Ordering, {username}</Button>}
    </div>
  );
}

export default Home;
