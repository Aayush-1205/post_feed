import React from 'react'
import './PostFeed.css'
import { showForm, setShowForm, userName, newPost, handleNameChange, handlePostChange, handleMediaChange, handleAddPost } from '../api/Api'

const Form = () => {
    return (
        <div className='button_bg'>
            <button className="new-post-button" onClick={() => setShowForm(true)}>New Post</button>

            {showForm && (
                <div className="popover-form">
                    <div className="form-content">
                        <input
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                            placeholder="Your Name"
                        />
                        <textarea
                            value={newPost}
                            onChange={handlePostChange}
                            placeholder="What's on your mind?"
                        ></textarea>
                        <input type="file" onChange={handleMediaChange} accept="image/*,video/*" />
                        <div className='form_btn'>
                            <button onClick={handleAddPost}>Post</button>
                            <button onClick={() => setShowForm(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Form