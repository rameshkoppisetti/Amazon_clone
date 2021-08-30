import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-3 h-11">
        <div className=" flex items-center flex-grow sm:flex-grow-0 pt-2 hover:border 1px solid white ">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>
        <div className="hidden sm:flex items-center h-7 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-2 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-4 mx-4 whitespace-nowrap">
          <div className=" cursor-pointer hover:border 1px solid white p-0.3 ">
            <p className="text-xs">hello ramesh</p>
            <p className="font-bold  md:text-sm">Account & Lists</p>
          </div>
          <div className=" cursor-pointer  hover:border 1px solid white p-0.3 ">
            <p className="text-xs">Returns</p>
            <p className="font-bold text-xs md:text-sm ">& Orders</p>
          </div>
          <div className=" cursor-pointer hover:border 1px solid white p-0.3 relative flex items-center ">
            <span className="absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Cart</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-1 pl-4 bg-amazon_blue-light text-white text-sm">
        <p className="link font-bold flex items-center">
          <MenuIcon className="h-4 mr-1" />
          All
        </p>
        <p className="link">Best Sellers</p>
        <p className="link">Mobiles</p>
        <p className="link">Fashion</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Amazon Pay</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">New Releases</p>
        <p className="link hidden lg:inline-flex">Customer Service</p>
        <p className="link hidden lg:inline-flex">Home & Kitchen</p>
        {/*<Image
            src=""/>
            width={100}
            height={20}
            objectFit="contain"
               */}
      </div>
    </header>
  );
}

export default Header;
