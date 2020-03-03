import React from 'react'
import { Spinner } from 'reactstrap';

const VideoDetail = ( {video} ) => {

    if(!video) {
        return(
            <p><Spinner /> Loading...</p>
        );
    }

    return(
        <div className="ui segment">
            <h4 className="ui">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    )

}

export default VideoDetail;