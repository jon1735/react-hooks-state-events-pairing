import React, { useState } from "react"

const CommentLikes = () => {
 
 const [likeCount, setLikes] = useState(0)
 const [dislikeCount, setDislikes] = useState(0)

const newLike = () => setLikes(likeCount + 1)
const newDislike = () => setDislikes(dislikeCount - 1)
 
  return (<>
  <button onClick={newLike}>{likeCount} 👍</button>
  <button onClick={newDislike}>{dislikeCount} 👎</button>
  </>
 ) 
}

export default CommentLikes