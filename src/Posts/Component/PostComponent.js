import React from 'react';
import { useEffect, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { type ListType } from './../Type/posttype';

const List = ({elem, apiRequestPost, logOut}): React$Element<*> => {

    let history = useHistory();

    useEffect(() => {
        if (elem.postState.list.length < 1) {
            apiRequestPost();
        }
    }, []);

    const memoizedList = useMemo((): array<ListType> => {
        return elem.postState.list?.map((item) => (
            <div key={item.id}>
                <hr/>
                <h4>{item.title}</h4>
                <h5>{item.body}</h5>
                <Link to={`/comments/${item.id}`}>comment</Link>
                <hr/>
            </div>
        ));
    }, [elem.postState.list]);

    function handleLogout() {
        logOut();
        history.push("/");
    };

    return(
        <div>
            <center><h1>Blog</h1></center>
            <div onClick={handleLogout}>Log out</div>
            {memoizedList}
        </div>
    )
};

export default List;