import React from 'react';
import { FaThumbsUp, FaThumbsDown, FaComment, FaTrash } from 'react-icons/fa';
import './PostFeed.css';
import { toggleComments, handleAddComment, handleDeletePost, handleDislike, handleLike, showComments, dislikedPosts, likedPosts, posts } from '../api/Api';

const PostFeed = () => {


    return (
        <div className="post-feed">

            <div className="posts">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <span className="author">{post.author}</span>
                            <span className="timestamp">{post.timestamp}</span>
                            <button onClick={() => handleDeletePost(post.id)}><FaTrash /></button>
                        </div>
                        {post.media && (
                            post.mediaType.startsWith('image') ? (
                                <img src={post.media} alt="Post media" className="post-media" />
                            ) : (
                                <video controls className="post-media">
                                    <source src={post.media} type={post.mediaType} />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        )}
                        <div className="post-content">{post.content}</div>
                        <div className="post-interactions">
                            <button
                                onClick={() => handleLike(post.id)}
                                disabled={likedPosts.includes(post.id)}
                            >
                                <FaThumbsUp /> {post.likes}
                            </button>
                            <button
                                onClick={() => handleDislike(post.id)}
                                disabled={dislikedPosts.includes(post.id)}
                            >
                                <FaThumbsDown /> {post.dislikes}
                            </button>
                            <button onClick={() => toggleComments(post.id)}>
                                <FaComment /> {post.comments.length}
                            </button>
                        </div>
                        {showComments === post.id && (
                            <div className="comments-popover">
                                <div className="comments-list">
                                    {post.comments.map((comment, index) => (
                                        <div key={index} className="comment">{comment}</div>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    placeholder="Add a comment..."
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && e.target.value.trim()) {
                                            handleAddComment(post.id, e.target.value);
                                            e.target.value = '';
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostFeed;
