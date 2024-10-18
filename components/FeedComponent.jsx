"use client";

import { useState, useEffect } from "react";

import PromptCardListComponent from "./PromptCardListComponent";

const FeedComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");

      const data = await response.json();

      setPosts(data);
    };

    fetchPost();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardListComponent data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default FeedComponent;
