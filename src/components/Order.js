import moment from "moment";
import Image from "next/image";
import Currency from "react-currency-formatter";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  const im = [];
  images.forEach((img) => {
    im.push(img.slice(1, img.length - 1));
  });
  return (
    <div className="relative rounded-xl border">
      <div className="flex items-center space-x-10 p-5 bg-gray-200 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">Order Placed</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="font-bold text-xs">Total</p>
          <p>
            <Currency quantity={amount} currency="INR" /> - Next Day delivery{" "}
            <Currency quantity={amountShipping} currency="INR" /> -
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-base self-end flex-1 text-right text-gray-900">
          {items?.length} Items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          Order <b># {id}</b>
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images &&
            im?.map((im1) => (
              <Image
                className="rh-20 object-contain sm:h-32"
                src={im1}
                height={60}
                width={50}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
