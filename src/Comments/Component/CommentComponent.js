import React from 'react';
import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { type CommentType } from './../Type/CommentType';

type Props = {comment: CommentType[]}

const Comment = ({comment, apiRequestComment, match}: Props): React$Element<*> => {


    useEffect(() => {
        apiRequestComment(match.params.id);
    }, []);

    const memoizedcomment = useMemo(() => {
        return comment?.map((item): array<CommentType> => (
            <div key={item.id}>
                <hr/>
                <h4>{item.name}</h4>
                <h4>{item.email}</h4>
                <p>{item.body}</p>
                <hr/>
            </div>
        ));
    }, [comment]);

    return(
        <div>
            <center><h1>Post {match.params.id}</h1></center>
            <Link to={"/"}>Back to Posts</Link>
            {memoizedcomment}
        </div>
    )
};

export default Comment;