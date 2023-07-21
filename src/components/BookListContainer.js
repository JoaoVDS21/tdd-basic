import React , { useState, useEffect } from 'react';
import { BookList } from "./BookList";
import { Typography } from "@material-ui/core";

import { api } from '../services/api'; 
import { useBookList } from '../hooks/useBookList';

export const BookListContainer = () => {
  const { books, loading, error } = useBookList([]);
  
  return (
    <>
      {<BookList books={books} loading={loading} error={error}/>}
    </>
  );
}
