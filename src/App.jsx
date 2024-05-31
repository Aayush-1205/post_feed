import React, { useState, useEffect } from 'react';
import PostFeed from './comp/PostFeed';
import './App.css'
import Form from './comp/Form';
import { setPosts, setLikedPosts, setDislikedPosts } from './api/Api';

const App = () => {

  // const [posts, setPosts] = useState([]);
  // const [newPost, setNewPost] = useState('');
  // const [media, setMedia] = useState(null);
  // const [showForm, setShowForm] = useState(false);
  // const [likedPosts, setLikedPosts] = useState([]);
  // const [dislikedPosts, setDislikedPosts] = useState([]);
  // const [showComments, setShowComments] = useState(null);
  // const [userName, setUserName] = useState('');

  // const handlePostChange = (event) => {
  //   setNewPost(event.target.value);
  // };

  // const handleMediaChange = (event) => {
  //   setMedia(event.target.files[0]);
  // };

  // const handleNameChange = (event) => {
  //   setUserName(event.target.value);
  // };

  // const handleAddPost = () => {
  //   if (newPost.trim() || media) {
  //     const post = {
  //       id: Date.now(),
  //       author: userName,
  //       content: newPost,
  //       timestamp: new Date().toLocaleString(),
  //       media: media ? URL.createObjectURL(media) : null,
  //       mediaType: media ? media.type : null,
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     };
  //     const updatedPosts = [post, ...posts];
  //     setPosts(updatedPosts);
  //     localStorage.setItem('posts', JSON.stringify(updatedPosts));
  //     setNewPost('');
  //     setMedia(null);
  //     setShowForm(false);
  //   }
  // };

  // const handleLike = (postId) => {
  //   if (!likedPosts.includes(postId)) {
  //     const updatedPosts = posts.map(post =>
  //       post.id === postId ? { ...post, likes: post.likes + 1 } : post
  //     );
  //     setPosts(updatedPosts);
  //     localStorage.setItem('posts', JSON.stringify(updatedPosts));
  //     const updatedLikedPosts = [...likedPosts, postId];
  //     setLikedPosts(updatedLikedPosts);
  //     localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
  //     if (dislikedPosts.includes(postId)) {
  //       const updatedDislikedPosts = dislikedPosts.filter(id => id !== postId);
  //       setDislikedPosts(updatedDislikedPosts);
  //       localStorage.setItem('dislikedPosts', JSON.stringify(updatedDislikedPosts));
  //     }
  //   }
  // };

  // const handleDislike = (postId) => {
  //   if (!dislikedPosts.includes(postId)) {
  //     const updatedPosts = posts.map(post =>
  //       post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
  //     );
  //     setPosts(updatedPosts);
  //     localStorage.setItem('posts', JSON.stringify(updatedPosts));
  //     const updatedDislikedPosts = [...dislikedPosts, postId];
  //     setDislikedPosts(updatedDislikedPosts);
  //     localStorage.setItem('dislikedPosts', JSON.stringify(updatedDislikedPosts));
  //     if (likedPosts.includes(postId)) {
  //       const updatedLikedPosts = likedPosts.filter(id => id !== postId);
  //       setLikedPosts(updatedLikedPosts);
  //       localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
  //     }
  //   }
  // };

  // const handleDeletePost = (postId) => {
  //   const updatedPosts = posts.filter(post => post.id !== postId);
  //   setPosts(updatedPosts);
  //   localStorage.setItem('posts', JSON.stringify(updatedPosts));
  // };

  // const handleAddComment = (postId, comment) => {
  //   const updatedPosts = posts.map(post =>
  //     post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
  //   );
  //   setPosts(updatedPosts);
  //   localStorage.setItem('posts', JSON.stringify(updatedPosts));
  // };

  // const toggleComments = (postId) => {
  //   setShowComments(showComments === postId ? null : postId);
  // };

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const savedLikes = JSON.parse(localStorage.getItem('likedPosts')) || [];
    const savedDislikes = JSON.parse(localStorage.getItem('dislikedPosts')) || [];
    setPosts(savedPosts);
    setLikedPosts(savedLikes);
    setDislikedPosts(savedDislikes);
  }, []);

  return (
    <div className="App">

      <Form />

      <PostFeed />

    </div>
  );
};

export default App;
