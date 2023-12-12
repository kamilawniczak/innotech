import Images from "@/components/productPage/Images";
import ProductInfo from "@/components/productPage/ProductInfo";
import Rating from "@/components/productPage/Rating";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

type Props = {
  params: {
    productId: string;
  };
};

const page = ({ params }: Props) => {
  return (
    <main className="w-full lg:px-16 xl:px-32 px-2 max-w-[110rem]">
      <div className="text-xs flex items-center gap-1 text-gray-600 py-6">
        <Link href={"/"}>InnoTech</Link>
        <FaChevronRight />
        <Link href={"/category/9-smartphones-and-phones"}>Smartphones</Link>
      </div>
      <div className="flex gap-2 flex-col md:flex-row">
        <Images />
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            Xiaomi POCO X5 5G 8/256GB Black
          </h1>
          <Rating rating={5.5} />
          <p className="text-sm text-gray-400">
            product id: {params.productId}
          </p>
          <ProductInfo />
        </div>
      </div>
    </main>
  );
};

export default page;
