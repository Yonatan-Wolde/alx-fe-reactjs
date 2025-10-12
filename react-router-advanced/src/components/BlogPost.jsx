import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  return <h3>Blog Post ID: {postId}</h3>;
};

export default BlogPost;
