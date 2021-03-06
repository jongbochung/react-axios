import React from 'react';
import {Comment} from './';
import '../css/components.css';

const CommentList = ({comments}) => {

    // map data to components
    const commentList = comments.map(
        (comment, index)=>(
            <Comment
                name={comment.name}
                body={comment.body}
                key={index}
            />
        )
    );

    return (
        <ul className="CommentList">
            {commentList}
        </ul>
    );
};

export default CommentList;
