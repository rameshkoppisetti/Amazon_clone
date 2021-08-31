import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const router = useRouter();
  const [session] = useSession();
  const items = useSelector(selectItems);

  const checkInput = () => {
    const input = prompt("Do you want to Log Out?");
    if (!input || input == "no") return null;
    else {
      signOut();
      return null;
    }
  };
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-3 h-14 ">
        <div
          onClick={() => router.push("/")}
          className=" flex items-center flex-grow sm:flex-grow-0 pt-2 hover:border 1px solid white "
        >
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>
        <div className="hidden sm:flex items-center h-9 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-2 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-3" />
        </div>
        <div className="text-white font-sans flex items-center text-xs space-x-4 mx-4 whitespace-nowrap">
          <div
            onClick={!session ? signIn : checkInput}
            className=" p-1  cursor-pointer hover:border 1px solid white "
          >
            <p className="font-sans text-xs">
              {session ? "Hello, " + session.user.name : "Hello SignIn"}
            </p>
            <p className="font-bold  md:text-sm">Account & Lists</p>
          </div>
          <div className="p-1 cursor-pointer  hover:border 1px solid white ">
            <p className="font-sans text-xs">Returns</p>
            <p className="font-bold text-xs md:text-sm ">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="p-1 cursor-pointer hover:border 1px solid white  relative flex items-center "
          >
            <span className="absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-9" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Cart</p>
          </div>
        </div>
      </div>
      <div className="flex h-10 items-center space-x-3  pl-5 bg-amazon_blue-light text-white text-sm">
        <p className="link  font-bold flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link p-2">Best Sellers</p>
        <p className="link p-2">Mobiles</p>
        <p className="link p-2">Fashion</p>
        <p className="link p-2">Today's Deals</p>
        <p className="link p-2 hidden lg:inline-flex">Electronics</p>
        <p className="link p-2 hidden lg:inline-flex">Amazon Pay</p>
        <p className="link p-2 hidden lg:inline-flex">Prime</p>
        <p className="link p-2 hidden lg:inline-flex">New Releases</p>
        <p className="link p-2 hidden lg:inline-flex">Customer Service</p>
        <p className="link p-2 m hidden lg:inline-flex">Home & Kitchen</p>
        <div className=" hover:border 1px solid white   hidden md:inline-flex absolute right-0 mt-0.7.5">
          <Image
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
            height={38}
            width={400}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
