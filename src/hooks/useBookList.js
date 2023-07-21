import React , { useState, useEffect } from 'react';

import { api } from '../services/api'; 

export const useBookList = (initial) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState(initial);
  
  useEffect(() => {
    fetchBooks();
  }, [])
  
  async function fetchBooks() {
    setLoading(true);
    setError(false);
    
    try {
      const response = await api.get('/books');
      setBooks(response.data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
    
  }
  
  return {
    books,
    loading,
    error
  };
}
