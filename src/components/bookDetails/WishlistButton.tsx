'use client';
import { Ibooks } from '@/types/books.type';
import React, { useContext } from 'react';
import { BooksContext } from '@/context/BooksContext';
import { toast } from 'react-toastify';


const WishListButton = ({book}: {book: Ibooks}) => {

    const {Wishlist, setWishlist} = useContext(BooksContext);
    const handleAddToWishlist = () => {
        console.log('read book button trigerd', book);
        setWishlist([...Wishlist, book])
        toast.success(`you have added "${book.bookName}" to your wishlist`);
    }
    
       return  <button className="btn btn-primary px-8" onClick={()=>handleAddToWishlist()}>
            Add to wishlist
          </button>      
    
};

export default WishListButton;