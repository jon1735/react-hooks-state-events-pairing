import React from "react";
import CommentItem from "./CommentItem"

function Comments ({ comments }) {
    const commentsList = comments.map(com => {
        return (<CommentItem 
            key={com.id}
            user={com.user}
            comment={com.comment}

        />
    )})
    
    return (<div> 
        <p>2 Comments</p>
        {commentsList}
    </div>
    )} 


export default Comments; 