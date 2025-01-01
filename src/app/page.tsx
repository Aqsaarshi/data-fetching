import React from "react";
import Link from "next/link";
import Footer from "./Footer";

const page = () => {
  return (
    <>
      <div className="bg-purple-900 w-screen h-screen font-serif  text-white flex flex-col items-center justify-center">
        <div className="mb-6 text-xl sm:text-xl text-center">
          Assignment-7 :
          <br /> Data Fetching From Client-Side and Server-Side
          <p className="text-slate-400"> Select Your Page</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Client Side Render Button */}
          <Link href="/Client-Data-Fetching">
            <button className="px-4 py-2 bg-fuchsia-500 text-white rounded hover:bg-fuchsia-800 transition">
              Client Side Data Fetching
            </button>
          </Link>

          {/* Server Side Render Button */}
          <Link href="/Server-Side-Fetching">
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 transition">
              Server Side Data Fetching
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
