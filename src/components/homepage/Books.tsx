import Image from "next/image";
import React from "react";
import BookCard from "../shared/BookCard";
import { Ibooks } from "@/types/books.type";

const getBooks = async () => {
  try{
 const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
  );
  const data = await response.json();
  return data;
}catch(error){
  console.error("Eror Fetching book data", error);
  return [];
}

};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Explore Our Collection
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Discover Your Next Book
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
          Explore timeless classics, exciting stories, and unforgettable
          characters from our collection.
        </p>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {booksData.map((book:Ibooks, ind:number) => {
          return <BookCard key={ind} book={book}/>
          
        })}
      </div>
    </section>
  );
};

export default Books;
