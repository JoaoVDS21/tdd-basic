import React from 'react';
import { Typography } from "@material-ui/core";

export const BookList = ({books}) => (
  <div data-test="book-list">
    {
      books.map(book => (
        <div className="book-item">
          <Typography variant="h5" component="h5" data-test="heading">
            {book.name}
          </Typography>
        </div>
      ))
    }
  </div>
)