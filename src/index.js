import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBQ4i1dsF1h3hVRfTTFr-fUIeD9uCI-UHE';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'wtf'}, videos => {
            this.setState({videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
