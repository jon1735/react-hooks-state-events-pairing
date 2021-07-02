import React, { useState } from "react";

function Likes ({ up, down }) {
    const [upVotes, setUpVotes] = useState(up)
    const [downVotes, setDownVotes] = useState(down)
    
   const newLike = () => (setUpVotes(upVotes + 1))
   const newDislike = () => (setDownVotes(downVotes - 1))

    return (
    <div>
       <button onClick={newLike}>{upVotes} 👍 </button> 
        <button onClick={newDislike}>{downVotes} 👎 </button>
    </div>
    )}

export default Likes;