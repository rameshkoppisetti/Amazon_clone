import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";


export default function Home({ products }) {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>

      <span>
        <Header className="sticky-top" />
        <main className="max-w-screen-2xl mx-auto">
          <Banner />
          <ProductFeed products={products} />
          <Footer />
        </main>
      </span>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
      session,
    },
  };
}
