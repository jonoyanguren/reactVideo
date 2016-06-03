import React from "react";
import ReactDom from "react-dom";
import SearchBar from "./components/search-bar";
import VideoList from "./components/video-list";
import YTSearch from "youtube-api-search";
import VideoDetail from "./components/video-detail";

const API_KEY = 'AIzaSyChN5frBeiJMXvCxx49hSrUSpRSmpA-Iws';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount = () => {
        // YTSearch({key: API_KEY, term: 'skate'}, (data) => {
        //     console.log(data);
        //     this.setState({
        //         videos: data,
        //         selectedVideo: data[0]
        //     });
        // });
    };

    videoSelect = (video) => {
        if (video) {
            this.setState({selectedVideo: video});
            console.log("Select video");
        }
    };

    videoSearch = (value) => {
        YTSearch({key: API_KEY, term: value}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    };

    render() {
        if (this.state.selectedVideo == null) {
            return (
                <div>
                    <SearchBar onClick={this.videoSearch}/>
                    <div>Busca algún video en la barra de búsqueda</div>
                </div>
            )
        }

        return (
            <div>
                <SearchBar onClick={this.videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onClick={this.videoSelect}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("container"));