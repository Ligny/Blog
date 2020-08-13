import React from 'react';
import { useEffect } from 'react';

import { Link } from "react-router-dom";

const List = ({list, apiRequestPost}) => {

    useEffect(() => {
        if (list.length < 1) {
            apiRequestPost();
        }
    }, []);

    return(
        <div>
            <center><h1>Blog</h1></center>
            {list?.map((item) => (
                <div key={item.id}>
                    <hr/>
                    <h4>{item.title}</h4>
                    <h5>{item.body}</h5>
                    <Link to={`/comments/${item.id}`}>comment</Link>
                    <hr/>
                </div>
            ))}
        </div>
    )
};

export default List;