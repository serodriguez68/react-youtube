// React needs to be imported even if it is not explicityly used becaused it
// is used implicitly when parsing jsx into pure js (React.createElement...)
import React, { Component } from 'react';

// Functional component: the component is a function
// (as opposed to class component: when a component needs internal record keeping)
// const SearchBar = () => {
//   return <input />;
// }

// Class based component
// The class inherits functionality from React.component
// class SearchBar extends React.Component is equivalent

class SearchBar extends Component {

  // Each class based component has state:
  //   State is a plain js object to record and react to user events.
  //   Whenever a component's state changes, the component re-renders and
  //   forces all nested components (children) to re-render
  //   State must be initialized through js constructor method (called when
  //   a class is instanciated)
  constructor(props){
    super(props); //Uses React.component constructor.
    // We are recording the search term in the input in the component instance's state.
    // Here we are initializing the state.
    // This syntax is ONLY used for initializing state (use this.setState for updating state)
    this.state = { term: '' };
  }

  // Every class component must have a defined render method
  // that defines how to render itself (it must return jsx)
  // onChange (react property), handle with onInputChange
  render(){

    // return <input onChange={this.onInputChange} />;


    // Alternative way with no external function and using an arrow function directly
    return (
      <div className="search-bar">

        <input
          // Here value is controlled by the state (controlled component)
          // state tells the input what it's value should be
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // Event handler: runs whenever the event is done
  // (note the naming convention for event handlers)
  onInputChange(term) {
    // this.setState is used to change state.
    // setState causes the component to re-render
    // NEVER update state with this.state = { term: '' };
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// Export controls what gets imported when another file imports this file.
export default SearchBar;
