import React from "react";
import video from "../data/video";
import Likes from "./Likes"
function Description ({ title, views, createdAt }) {
    return (<div>
        <h1> 
            {title}
        </h1>
        <p>{views} views | {createdAt}</p>
        <Likes
        up={video.upvotes}
        down={video.downvotes}
        />
        <br />
        <button>Hide Comments</button>
         </div>
    )}

export default Description 