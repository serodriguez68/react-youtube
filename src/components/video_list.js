import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    // A key needs to be added to each element of a list for helping
    // react to identify each element.  This helps react for updating
    // ONLY the information that changed when needed.
    // The key needs to be a unique identifier for te component (etag in
    // the case of Youtube)
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect} />
    );
  });

  return (
    <ul className="col-md-4 list-group" >
      {videoItems}
    </ul>
  );
};

export default VideoList;
