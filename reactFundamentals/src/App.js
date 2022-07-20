import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

export default function App() {
  const [ posts, setPosts ] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 30 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 40 },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50 }
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState, 
      {
        id: Math.random(), 
        title: `Title#0${prevState.length + 1}`, 
        subtitle: `Sub#0${prevState.length + 1}`, 
        likes: (prevState.length != 0 ? prevState[prevState.length - 1].likes + 10 : 10)
      }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts of the week</h2>

        <button onClick={handleRefresh} on>Refresh</button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={{
            id: post.id,
            title: post.title, 
            subtitle: post.subtitle
          }}
        />
      ))}
    </>
  );
}