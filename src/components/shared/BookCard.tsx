import { Ibooks } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps{
    book: Ibooks
}

const BookCard = ({book}: IBookCardProps) => {
    return (
        <div
            
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden bg-gray-100">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                    {book.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-bold px-3 py-1.5 rounded-full shadow">
                    ⭐ {book.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Book Name */}
                <h3 className="text-2xl font-bold text-gray-900 line-clamp-1 group-hover:text-indigo-600 transition">
                  {book.bookName}
                </h3>

                {/* Author */}
                <p className="text-gray-500 mt-1">
                  by{" "}
                  <span className="font-medium text-gray-700">
                    {book.author}
                  </span>
                </p>

                {/* Review */}
                <p className="text-gray-600 text-sm leading-6 mt-4 line-clamp-3">
                  {book.review}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Book Information */}
                <div className="grid grid-cols-3 gap-2 border-t border-gray-100 mt-5 pt-5">
                  <div>
                    <p className="text-xs text-gray-400">Pages</p>
                    <p className="font-semibold text-gray-800">
                      {book.totalPages}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Published</p>
                    <p className="font-semibold text-gray-800">
                      {book.yearOfPublishing}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Publisher</p>
                    <p className="font-semibold text-gray-800 truncate">
                      {book.publisher}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                <button className="w-full mt-6 bg-gray-900 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition-colors duration-300">
                  View Details →
                </button>
                </Link>
              </div>
            </div>
    );
};

export default BookCard;