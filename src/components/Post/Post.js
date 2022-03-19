import React from 'react';
import Booster from '../Booster/Booster';
import './Post.css'

const Post = (props) => {
    // console.log(props.post)
    const { id, body } = props.post
    return (
        <div className='post'>
            <h4>ID: {id}</h4>
            <p>Details: {body}</p>
            <Booster></Booster>
        </div>
    );
};

export default Post;