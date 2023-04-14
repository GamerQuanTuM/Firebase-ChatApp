import React from "react";

const Search = () => {
  const user = true;
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      {user && (
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="userChatInfo">
            <span>Jane</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
