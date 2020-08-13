import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom";

const Comment = ({comment, apiRequestComment, match}) => {

    // const dispatch = useDispatch()

    useEffect(() => {
        apiRequestComment(match.params.id);
        // return(dispatch(comment));
    }, []);

    return(
        <div>
            <center><h1>Post {match.params.id}</h1></center>
            <Link to={"/"}>Back to Posts</Link>
             {comment?.map((item) => (
                <div key={item.id}>
                    <hr/>
                        <h4>{item.name}</h4>
                        <h4>{item.email}</h4>
                        <p>{item.body}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
};

export default Comment;