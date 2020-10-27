import React from 'react';
import PostListItem from '../post-list-item/';
import './post-list.css';
import { ListGroup} from 'reactstrap';
const PostList = ({data, remove, update}) => {
    const elements = data.map((item) => {
         return (
             <li key={item.id}  className="list-group-item">
                  <PostListItem 
                  removeTodo={() => remove(item.id)}
                  update={update}
                  {...item}
                  />
             </li>
         )
     });
   
    
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}



export default PostList;