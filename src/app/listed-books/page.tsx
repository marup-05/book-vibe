
"use client";

import React, { useContext } from "react";
import Image from "next/image";

import BookCard from "@/components/shared/BookCard";
import { BooksContext } from "@/context/BooksContext";
import { Ibooks } from "@/types/books.type";

const ListedBooks = () => {
  const { readBooks, Wishlist } = useContext(BooksContext);

  return (
    <div className="container mx-auto px-4 py-5">
      
      {/* Page Title */}
      <h2 className="my-4 rounded-3xl bg-amber-100 py-10 text-center text-4xl font-bold">
        Listed Books
      </h2>

      {/* Tabs */}
      <div className="tabs tabs-lift">

        {/* ================= READ BOOKS TAB ================= */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">

          {readBooks.length > 0 ? (
            <div className="space-y-6">

              {readBooks.map((book: Ibooks) => (
                <div
                  key={book.bookId}
                  className="w-full overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row">

                    {/* Book Image */}
                    <div className="flex shrink-0 items-center justify-center bg-base-200 p-5 md:w-56">
                      <Image
                        src={book.image}
                        alt={book.bookName}
                        width={220}
                        height={300}
                        className="h-[300px] w-full max-w-[220px] rounded-xl object-cover shadow-md"
                      />
                    </div>

                    {/* Book Details */}
                    <div className="flex-1 p-6 md:p-8">

                      {/* Category & Rating */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="badge badge-primary badge-outline">
                          {book.category}
                        </span>

                        <div className="flex items-center gap-1">
                          <span className="text-xl text-yellow-500">
                            ★
                          </span>

                          <span className="font-semibold">
                            {book.rating}
                          </span>
                        </div>
                      </div>

                      {/* Book Name */}
                      <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                        {book.bookName}
                      </h2>

                      {/* Author */}
                      <p className="mt-1 text-base-content/60">
                        Written by{" "}
                        <span className="font-semibold text-base-content">
                          {book.author}
                        </span>
                      </p>

                      {/* Review */}
                      <p className="mt-4 line-clamp-2 leading-7 text-base-content/70">
                        {book.review}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                          <span
                            key={tag}
                            className="badge badge-ghost"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Section */}
                      <div className="mt-6 flex flex-col gap-4 border-t border-base-200 pt-5 sm:flex-row sm:items-center sm:justify-between">

                        {/* Book Info */}
                        <div className="flex flex-wrap gap-5 text-sm text-base-content/60">
                          <span>
                            📖 {book.totalPages} pages
                          </span>

                          <span>
                            📅 {book.yearOfPublishing}
                          </span>

                          <span>
                            🏢 {book.publisher}
                          </span>
                        </div>

                        {/* Button */}
                        <button className="btn btn-primary px-7">
                          View Details
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="flex min-h-[250px] items-center justify-center">
              <p className="text-center text-lg font-semibold text-base-content/60">
                No Read Books Found
              </p>
            </div>
          )}

        </div>

        {/* ================= WISHLIST TAB ================= */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${Wishlist.length})`}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">

          {Wishlist.length > 0 ? (
            <div className="space-y-6">
              {Wishlist.map((book: Ibooks) => (
                <BookCard
                  key={book.bookId}
                  book={book}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[250px] items-center justify-center">
              <p className="text-center text-lg font-semibold text-base-content/60">
                No Wishlist Books Found
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ListedBooks;
