'use client';
import { Ibooks } from '@/types/books.type';
import React, { useContext } from 'react';
import Books from '../homepage/Books';
import { BooksContext } from '@/context/BooksContext';
import { toast } from 'react-toastify';



const ReadButton = ({book}: {book: Ibooks}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);
    const handleReadBook = () => {
        console.log('read book button trigerd', book);
        setReadBooks([...readBooks, book])
        toast.success(`you have read "${book.bookName}"`);
    }
    
       return  <button className="btn btn-primary px-8" onClick={()=>handleReadBook()}>
            Read
          </button>      
    
};

export default ReadButton;