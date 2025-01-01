import Footer from "../Footer";

export default async function Server() {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const data = await response.json();

  return (
    <div className=" w-screen h-screen">
      <h1 className="text-[3rem] text-center font-bold text-purple-950 uppercase">
        Books
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
        {data.map((book: any, index: number) => (
          <div
            key={index}
            className=" p-10 mb-6 border-2 border-purple-900 rounded-lg text-black  text-xl shadow-md hover:shadow-lg transition-shadow bg-purple-100"
          >
            <h2 className="font-bold">{book.name}</h2>
            <p>Author: {book.author}</p>
            <p>Available: {book.available ? "Yes" : "No"}</p>
            <button className="mt-4 px-4 py-2  bg-purple-500 text-white rounded hover:bg-purple-700 transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
