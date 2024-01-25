import { Link } from 'react-router-dom';

function Button({children,disable,to}) {

  const className =`bg-yellow-400 uppercase font-semibold
  text-stone-800 py-3 px-4 tracking-wide rounded-full inline-block
   transition-all duration-300 hover:bg-yellow-300 focus:outline-none
   focus:ring focus:ring-yellow-300 focus:ring-offset-2
   disabled:cursor-not-allowed sm:px-6 sm:py-4`

  if(to)
  return(<Link className={className} to={to}>{children}</Link>)
  
  return (
    <button
    disabled={disable}
    className={className}
    >
    {children}
    </button>
  )
}

export default Button