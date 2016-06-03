import React from "react";

class VideoItem extends React.Component {
    render() {
        const imageUrl = this.props.video.snippet.thumbnails.default.url;

        return (
            <li className="list-group-item" onClick={this.props.onClick.bind(null, this.props.video)}>
                <div className="video-list-media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {this.props.video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoItem;