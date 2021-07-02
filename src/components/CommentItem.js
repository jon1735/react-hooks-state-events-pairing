import React from "react";

function CommentItem ({ user, comment}) {
    return (<div>
        <h2>
        {user}
        </h2>
        <p>
           {comment} 
        </p>
    </div>
    )}

export default CommentItem;