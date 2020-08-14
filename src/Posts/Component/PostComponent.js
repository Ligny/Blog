import React from 'react';
import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { type ListType } from './../Type/posttype';

type Props = {list: ListType[]}

const List = ({list, apiRequestPost}: Props): React$Element<*> => {

    useEffect(() => {
        if (list.length < 1) {
            apiRequestPost();
        }
    }, []);

    const memoizedList = useMemo((): array<ListType> => {
        return list?.map((item) => (
            <div key={item.id}>
                <hr/>
                <h4>{item.title}</h4>
                <h5>{item.body}</h5>
                <Link to={`/comments/${item.id}`}>comment</Link>
                <hr/>
            </div>
        ));
    }, [list]);

    return(
        <div>
            <center><h1>Blog</h1></center>
            {memoizedList}
        </div>
    )
};

export default List;