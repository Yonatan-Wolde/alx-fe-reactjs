import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // param name changed to id
  return <h3>Blog Post ID: {id}</h3>;
};

export default BlogPost;
