import React, { useState } from "react";
import "../styles/home.css";
import ItemCard from "../components/UI/ItemCard";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  const itemData = require("../assets/data/data.json");


  const [trending, setTrending] = useState(
    itemData.items.filter((item) => item.isTrending)
  );
  const [recomended, setRecomended] = useState(itemData.items.slice(0, 18));
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [resultMovie, setResultMovie] = useState(0);
  const [resultName, setResultName] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = itemData.items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
   setResultMovie(prev=> prev = filteredItems.length)
   setResultName(prev=> prev = e.target.value)
    setSearchedMovie(filteredItems);
    if (e.target.value === "") {
      setSearchedMovie(null);
    }
    console.log(itemData.items.length);
  };
  return (
    <div className="home">
      <div className="search__section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <rect opacity="0.01" width="32" height="32" fill="black" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.08 21.2L27.6133 25.72C27.8657 25.9704 28.0077 26.3111 28.0077 26.6667C28.0077 27.0222 27.8657 27.363 27.6133 27.6133C27.363 27.8657 27.0222 28.0077 26.6667 28.0077C26.3111 28.0077 25.9704 27.8657 25.72 27.6133L21.2 23.08C19.3366 24.5426 17.0355 25.3363 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667C25.3363 17.0355 24.5426 19.3366 23.08 21.2ZM14.6667 6.66667C10.2484 6.66667 6.66667 10.2484 6.66667 14.6667C6.66667 19.0849 10.2484 22.6667 14.6667 22.6667C19.0849 22.6667 22.6667 19.0849 22.6667 14.6667C22.6667 10.2484 19.0849 6.66667 14.6667 6.66667Z"
            fill="white"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for movies or TV series"
          onChange={handleSearch}
        />
      </div>
      {!searchedMovie ? (
        <>
          {" "}
          <section className="trending__section">
            <h2 style={{ color: "#fff", fontSize: "2rem", margin: "40px 0" }}>
              Trending 
            </h2>
            <Testimonial aboutData={trending} />
          </section>
          <section className="recomended__section" style={{paddingBottom:'30px'}}>
            <h2 style={{ color: "#fff", fontSize: "2rem", margin: "40px 0" }}>
              Recommended for you
            </h2>
            <ItemCard items={recomended} />
          </section>
        </>
      ) : (
        <>
          <section className="searched__section">
            <h2 style={{ color: "#fff", fontSize: "2rem", margin: "40px 0" }}>
            Found {resultMovie} results for ‘{resultName}’
            </h2>
            <ItemCard items={searchedMovie} />
          </section>
        </>
      )}

    </div>
  );
};

export default Home;
