import React from 'react';
import '../css/components.css';

const PostWrapper = ({children}) => {
    return (
        <div className="PostWrapper">
            {children}
        </div>
    );
};

export default PostWrapper;
