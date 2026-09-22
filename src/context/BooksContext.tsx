'use client';
import { Ibooks } from '@/types/books.type';
import React, { ReactNode, useState, createContext } from 'react';

interface IBooksContext {
    readBooks : Ibooks[];
    setReadBooks : React.Dispatch<React.SetStateAction<Ibooks[]>>;
    Wishlist : Ibooks[];
    setWishlist : React.Dispatch<React.SetStateAction<Ibooks[]>>;

}


export const BooksContext = createContext<IBooksContext>({
    readBooks: [],
    setReadBooks: () => {},
    Wishlist: [],
    setWishlist: () => {},
})

const BooksProvider = ({children}: {children: ReactNode}) => {
   const [readBooks, setReadBooks] = useState<Ibooks[]>([])
   const [Wishlist, setWishlist] = useState<Ibooks[]>([])

   const sharedData = {
    readBooks,
    setReadBooks,
    Wishlist,
    setWishlist,
   }

    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksProvider;