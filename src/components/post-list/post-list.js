import React from 'react';
import PostListItem from '../post-list-item/';
import './post-list.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    
    const elements = posts.map(item => {
       if( typeof item === 'object' && isEmpty(item) ) {
        return (
            <li key={item.id} className="list-group-item">
                 <PostListItem 
                 onDelete={ () => onDelete(item.id)}
                 {...item}
                 onToggleImportant={ () => onToggleImportant(item.id)}
                 onToggleLiked={ () => onToggleLiked(item.id)}
                 />
            </li>
        )
       }
    });
    
    return (
        <ListGroup className="app-list">
           {elements}
        </ListGroup>
    )
}

function isEmpty(obj) {
    for(let key in obj) {
        return true;
    }
    return false;
}

export default PostList;