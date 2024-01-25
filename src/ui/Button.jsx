import { Link } from 'react-router-dom';

function Button({children,disable,to,type}) {

 const base =`bg-yellow-400 text-sm uppercase font-semibold
   text-stone-800  tracking-wide rounded-full inline-block
    transition-all duration-300 hover:bg-yellow-300 focus:outline-none
    focus:ring focus:ring-yellow-300 focus:ring-offset-2
    disabled:cursor-not-allowed`;
   const style= {
    primary:base + ' py-3 px-4 sm:px-6 sm:py-4',
    small:base+ ' px-4 py-2 md:px-5 md:py-2.5 text-xs',

    secondary:`uppercase text-sm font-semibold border-2 border-stone-300
    text-stone-400  tracking-wide rounded-full inline-block
     transition-all duration-300 hover:bg-stone-300 hover:text-stone-800
      focus:outline-none focus:text-stone-800
     focus:ring focus:ring-stone-200 focus:ring-offset-2
     disabled:cursor-not-allowed py-2.5 px-4 sm:px-6 sm:py-3.5`
   }

  if(to)
  return(<Link className={style[type]} to={to}>{children}</Link>)
  
  return (
    <button
    disabled={disable}
    className={style[type]}
    >
    {children}
    </button>
  )
}

export default Button