import React from "react";
import video from "../data/video.js";
import Description from "./Description"
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
    <Description 
    title={video.title}
    views={video.views}
    createdAt={video.createdAt}
    />
    <br /> 
    <hr size="1px" width="1000px" color="black" style= {{ opacity: 0.5}}/>
    <Comments 
    comments={video.comments}
    />
    </div>
  );
}

export default App;

