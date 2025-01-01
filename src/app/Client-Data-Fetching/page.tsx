"use client";

import { useEffect, useState } from "react";
import Footer from "../Footer";
import React from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Page = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto p-8 bg-white">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.map((item) => (
            <li
              key={item.id}
              className="p-4 border-2 border-purple-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={160}
                height={160}
                className="mb-2"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <span className="font-bold text-purple-900 mb-2 block">
                ${item.price}
              </span>
              <div className="text-sm text-red-900 align-text-bottom">
                <span className="font-medium">Rating: </span>
                {item.rating.rate} / 5 ({item.rating.count} reviews)
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Page;
