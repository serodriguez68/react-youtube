import _ from 'lodash';

// Import react from my installed modules
// Import the varialbe React from the node_module 'react'
// React library is used for manipulating components in js.
import React, {Component} from 'react';
// ReacDOM is used to manipulate the DOM.
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

// Import SearchBar component.  The SearchBar variable here gets the value
// of whatever is exported in the 'search_bar' file.
// For files made by us we need to give js the path. For libraries this is not
// necessary
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube API_KEY
const API_KEY = "AIzaSyDfcE8kKfHKQp9BI64t_ANDEMh6h2BXOPo";


// Create a new component. This component should produce some HTML.
// Always one component per file
// const: ES6 syntax to declare a constant (once set it is the final value and
// will not change)
// html like js is jsx. jsx produces the actual html.
// A component is a class of component (there may be many instances of the App class)
// You use instances of components for the DOM.
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // The last argument is is a fat arrow callback function to handle
    // the success of the Youtube Call
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // Equivalent to
      // this.setState({ videos: videos });
    });
  }

  render(){
    // returns a function that can only be called once every 300 ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// The code above is identical to the following code.  It is using ES6 syntax.
// (There is a subtle difference in the this keyword inside both functions)
// const App = function () {
//   return <div>Hi!</div>;
// }

// Take this component's generated HTML and put it in the DOM
// <App></App> == <App />creates an instance of App.
// #render gets what to render and where to render it
ReactDOM.render(<App />, document.querySelector('.container'));
