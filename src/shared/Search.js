import React, { useState } from 'react';

import PlayersList from '../pages/PlayersList';
import './Search.css';

function Search({ playerList, loading, error }) {

  const [searchField, setSearchField] = useState("");

  const filteredPlayer = playerList.filter(
    player => {
      return (
        player.PFName.toLowerCase().includes(searchField.toLowerCase()) ||
        player.TName.toLowerCase().includes(searchField.toLowerCase())      
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
        <PlayersList filteredPlayer={filteredPlayer} loading={loading} error={error} />
    );
  }

  return (
    <>
      <div>
        <input className="search-box" type = "search" placeholder = "Search Player"
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </>
  );
}

export default Search;