import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBQ4i1dsF1h3hVRfTTFr-fUIeD9uCI-UHE';
YTSearch({key: API_KEY, term: 'wtf'}, data => {
    console.log(data);
});

const App = () => (
    <div><SearchBar /></div>
);
ReactDOM.render(<App />, document.getElementById('app'));
