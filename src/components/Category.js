import Image from "next/image";
function Category({ id, title, image }) {
  return (
    <div className="cursor-pointer relative flex flex-col m-5 bg-white z-30 p-5">
      <h1 className="mt-3 pb-2 text-lg font-bold">{title}</h1>
      <Image src={image} height={300} width={200} objectFit="contain" />
      <p1 className="hover:text-yellow-500 link ">click here</p1>
    </div>
  );
}

export default Category;
