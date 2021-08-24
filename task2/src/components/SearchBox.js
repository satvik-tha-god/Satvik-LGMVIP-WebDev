import React from 'react';
import "./components.css";

const SearchBox = ({
  searchfeild,
  searchChange
}) => {
  return ( <
    div className = 'pa2' >
    <
    input className = 'Search'
    type = "search"
    placeholder = 'search by name'
    onChange = {
      searchChange
    }
    /> <
    /div>
  );
}

export default SearchBox;
