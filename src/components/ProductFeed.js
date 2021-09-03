import Category from "./Category";
import Product from "./Product";
import Image from "next/image";
function ProductFeed({ products }) {
  const categories = [
    {
      id: 1000,
      title: "Up to 70% off | Electronics clearance store",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
    },
    {
      id: 1001,
      title: "4*+ rated kitchen products | Amazon Brands & mores",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/kitchenbaupccc/xcm_banners_bau_pc_cc_379x304_379x304_in-en._SY304_CB643325611_.jpg",
    },
    {
      id: 1002,
      title: "5% off | Pay your credit card bills on Amazon       ",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg",
    },
    {
      id: 1003,
      title: "Up to 50% off | on all New Chimney Brands  ",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Chimney_GW_CC_379x304._SY304_CB427965740_.jpg",
    },
  ];
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {categories.map(({ id, title, image }) => (
        <Category id={id} title={title} image={image} />
      ))}

      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt="an add"
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <img
        className="md:col-span-full"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2021/AW21/updated/mob/PC7.jpg"
        alt="an add"
      />
      {products
        .slice(5, products.length - 1)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
