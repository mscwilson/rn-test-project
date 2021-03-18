import axios from 'axios';
import React from 'react';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts/1',
});
