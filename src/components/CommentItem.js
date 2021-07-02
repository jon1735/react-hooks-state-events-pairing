import React from "react";
import CommentLikes from "./CommentLikes"

function CommentItem ({ user, comment}) {
    return (
    <div>
        <h2>
            {user}
        </h2>
        <p>
            {comment} <CommentLikes />
        </p>
    </div>
    )
}

export default CommentItem;