import React from 'react';
import OccasionTilesFour from '../occasion-four-wide/OccasionTilesFour';
// import '../../../styles/VideoBackground';

function VideoBackground() {

    return (
        <>
        <div className="videoBackground">
            <iframe frameborder="0" height="100%" width="100%"
                src="https://youtube.com/embed/hQAHSlTtcmY?autoplay=1&controls=0&showinfo=0&autohide=1">
            </iframe>
        </div>
            <OccasionTilesFour/>
            <OccasionTilesFour/>
            <OccasionTilesFour/>
            <OccasionTilesFour/>
            <OccasionTilesFour/>
            <OccasionTilesFour/>
        </>
    )
}

export default VideoBackground;