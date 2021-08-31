import Image from "next/image";
import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/outline";
function Footer() {
  return (
    <div className="footer">
      <Link href="/" scroll={true}>
        <div className="cursor-pointer  text-center bg-amazon_blue-bu text-white py-3 hover:bg-gray-600">
          <span className="text-sm ">Back to top</span>
        </div>
      </Link>

      <div className="items-center    bg-amazon_blue-light text-gray-300 text-sm">
        <div className=" py-12 pl-7 place-content-center grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ul className="space-x-3 mx-4 p-4">
            <li>
              <p className="link font-bold mx-2 text-white">Get to Know Us</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Careers</p>
            </li>
            <li>
              <p>Press Releases</p>
            </li>
            <li>
              <p>Amazon Cares</p>
            </li>
            <li>
              <p>Gift a Smile</p>
            </li>
          </ul>
          <ul className="space-x-3 mx-4 p-4 ">
            <li>
              <p className="link font-bold mx-2 text-white">Connect with Us</p>
            </li>
            <li>
              <p>Facebook</p>
            </li>
            <li>
              <p>Twitter</p>
            </li>
            <li>
              <p>Instagram</p>
            </li>
          </ul>
          <ul className="space-x-3 mx-4 p-4  ">
            <li>
              <p className="link font-bold mx-2 text-white">
                Make Money with Us
              </p>
            </li>
            <li>
              <p>Sell on Amazon</p>
            </li>
            <li>
              <p>Sell under Amazon Accelerator</p>
            </li>
            <li>
              <p>Amazon Global Selling</p>
            </li>
            <li>
              <p>Become an Affiliate</p>
            </li>
            <li>
              <p>Advertise Your Products</p>
            </li>
            <li>
              <p>Fulfillment by Amazon</p>
            </li>
            <li>
              <p>Amazon Pay on Merchants</p>
            </li>
          </ul>

          <ul className="space-x-3 mx-4 p-4 ">
            <li>
              <p className="link font-bold mx-2 text-white  ">
                Let Us Help You
              </p>
            </li>
            <li>
              <p>COVID-19 & Amazon</p>
            </li>
            <li>
              <p>Your Account</p>
            </li>
            <li>
              <p>Returns Center</p>
            </li>
            <li>
              <p>100% Purchase Protection</p>
            </li>
            <li>
              <p>Amazon App Download</p>
            </li>
            <li>
              <p>Amazon Assistant Download</p>
            </li>
            <li>
              <p>Help</p>
            </li>
          </ul>
        </div>

        <div className="place-content-center py-7">
          <ul className="place-content-center flex flex-row ">
            <li>
              <Image
                src="https://links.papareact.com/f90"
                width={90}
                height={60}
                objectFit="contain"
                className="cursor-pointer "
              />
            </li>
            <li>
              <div className="flex flex-row border 0.5px solid white rounded-sm px-4 py-1.5 ml-6">
                <GlobeAltIcon className="h-4 mr-2" />
                <h>English</h>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="pl-9 text-vs bg-amazon_blue text-gray-100">
        <div className="place-items-center align-items-center pt-5">
          <ul className="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
            <li className="p-3">
              <p>
                <span className="text-xs">Amazon Music </span>
                <br />
                <span>
                  Stream millions
                  <br />
                  of songs
                </span>
              </p>
            </li>
            <li className="p-3">
              <p>
                <span className="text-xs">AmazonFresh</span>
                <br />
                <span>
                  Groceries &amp; More
                  <br />
                  Right To Your Door
                </span>
              </p>
            </li>
            <li className="p-3">
              <p>
                <span className="text-xs">Amazon Web Services</span>

                <br />
                <span>
                  Scalable Cloud
                  <br />
                  Computing Services
                </span>
              </p>
            </li>
            <li className="p-3">
              <p>
                <span className="text-xs">East Dane</span>
                <br />
                <span>
                  Designer Men's
                  <br />
                  Fashion
                </span>
              </p>
            </li>
            <li className="p-3">
              <p>
                <span className="text-xs">East Dane</span>
                <br />
                <span>
                  FREE 2-Hour Delivery
                  <br />
                  on Everyday Items
                </span>
              </p>
            </li>
          </ul>

          <ul className="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <li className="p-3">
              <p>
                <span className="text-xs">Amazon Drive</span>
                <br />
                <span>
                  Cloud storage
                  <br />
                  from Amazon
                </span>
              </p>
            </li>
            <li className="p-3">
              <p>
                <span className="text-xs">AmazonGlobal</span>
                <br />
                <span>
                  Ship Orders
                  <br />
                  Internationally
                </span>
              </p>
            </li>
            <li className="p-3">
              <p>
                <span className="text-xs">Audible</span>
                <br />
                <span>
                  Download
                  <br />
                  Audio Books
                </span>
              </p>
            </li>
            <li className="p-3">
              <p>
                <span className="text-xs">Fabric</span>
                <br />
                <span>
                  Sewing, Quilting
                  <br />
                  &amp; Knitting
                </span>
              </p>
            </li>
            <li className="p-3">
              <p>
                <span className="text-xs">Prime Photos</span>
                <br />
                <span>
                  Unlimited Photo Storage
                  <br />
                  Free With Prime
                </span>
              </p>
            </li>
          </ul>
        </div>

        <ul className="place-content-center flex flex-column ">
          <li className="p-3 text-xs">
            <p>Conditions of Use</p>
          </li>
          <li className="p-3 text-xs">
            <p>Privacy Notice</p>
          </li>
          <li className="p-3 text-xs">
            <p>Interest-Based Ads</p>
          </li>
          <li className="p-3 text-xs">
            &copy; 1996-2017, Amazon.in, Inc. or its affiliates
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
