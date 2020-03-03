import React from 'react';
import "./videoList.scss";

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div
            onClick={()=> onVideoSelect(video)}
            className="ui list video-item"
        >
            <div className="item">
                <div className="image">
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                </div>

                <div className="content">
                    <div className="header">{video.snippet.title}</div>

                    <div className="meta">
                        <span>{video.snippet.channelTitle}</span>
                    </div>

                </div>

           </div>
       </div>
    )
}

export default VideoItem