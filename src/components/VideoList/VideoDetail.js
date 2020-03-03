import React from 'react'

const VideoDetail = ( {video} ) => {

    if (!video) {
        return(
            <p>Loading...</p>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div className="ui segment">

            <div className="ui embed">
                <iframe title="Youtube Video Player" src={videoSrc} />
            </div>

            <h4 className="ui">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            
        </div>
    )

}

export default VideoDetail;