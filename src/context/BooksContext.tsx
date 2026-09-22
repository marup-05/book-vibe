'use client';
import React, { ReactNode, useState, createContext } from 'react';



export const BooksContext = createContext({})

const BooksProvider = ({children}: {children: ReactNode}) => {
   const [readBooks, setReadBooks] = useState([])
   const [Wishlist, setWishlist] = useState([])

   const sharedData = {
    readBooks,
    setReadBooks,
    Wishlist,
    setWishlist,
   }

    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksProvider;