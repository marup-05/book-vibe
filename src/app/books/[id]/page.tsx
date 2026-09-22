import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishlistButton";
import { Ibooks } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

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

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: Ibooks) => String(book.bookId) === String(id),
  ) as Ibooks;
  console.log(book);
 return (
  <div className="container mx-auto px-4 py-12">
    <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">
      
      {/* Book Image */}
      <figure className="lg:w-2/5 bg-base-200 p-6">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={300}
          className="object-cover h-[650px] w-full rounded-2xl shadow-md"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body lg:w-3/5 p-8 lg:p-10">
        
        {/* Category */}
        <div>
          <span className="badge badge-primary badge-outline">
            {book.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold mt-2">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-base-content/60 text-lg">
          by <span className="font-semibold text-base-content">{book.author}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-2">
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name="book-rating"
                className="mask mask-star-2 bg-orange-400"
                checked={Math.round(book.rating) === star}
                readOnly
              />
            ))}
          </div>

          <span className="font-semibold">{book.rating}</span>
          <span className="text-base-content/50">/ 5</span>
        </div>

        {/* Review */}
        <p className="text-base-content/70 leading-7 mt-4">
          {book.review}
        </p>

        {/* Book Information */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-base-200 rounded-xl p-4">
            <p className="text-sm text-base-content/50">Pages</p>
            <p className="font-bold text-lg">{book.totalPages}</p>
          </div>

          <div className="bg-base-200 rounded-xl p-4">
            <p className="text-sm text-base-content/50">Published</p>
            <p className="font-bold text-lg">{book.yearOfPublishing}</p>
          </div>

          <div className="bg-base-200 rounded-xl p-4">
            <p className="text-sm text-base-content/50">Publisher</p>
            <p className="font-bold text-lg truncate">{book.publisher}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6">
          <p className="font-semibold mb-3">Tags</p>

          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-lg badge-ghost"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="card-actions justify-end mt-8">
          <ReadButton book={book}/>
          <WishListButton book={book}/>
        </div>

      </div>
    </div>
  </div>
);
};

export default BookDetailsPage;
