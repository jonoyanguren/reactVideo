import React from "react";
import VideoItem from "./video-list-item";

class VideoList extends React.Component {
    render() {
        return (
            <div className="row">
                <ul>
                    {
                        this.props.videos.map(function (video, index) {
                            return <VideoItem
                                onClick={this.props.onClick}
                                key={index}
                                video={video}
                            />
                        }, this)
                    }
                </ul>
            </div>
        )
    }
}

export default VideoList;