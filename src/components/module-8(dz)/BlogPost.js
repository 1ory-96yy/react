import React, { useRef } from 'react';

const BlogPost = ({ post }) => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2 style={{ cursor: 'pointer' }} onClick={scrollToContent}>
        {post.title}
      </h2>
      <p><em>{post.date}</em></p>
      <div ref={contentRef}>
        <p>{post.text}</p>
        <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
      </div>
      <hr />
    </div>
  );
};

const Blog = ({ posts }) => (
  <div>
    <h1>📝 Блог</h1>
    {posts.map((post, i) => (
      <BlogPost key={i} post={post} />
    ))}
  </div>
);

export default Blog;