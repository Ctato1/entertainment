import "../styles/series.css";
import ItemCard from "../components/UI/ItemCard";
import { useState } from "react";

const Movies = () => {
  const itemData = require("../assets/data/data.json");

  const [movies, setMovies] = useState(
    itemData.items.filter((item) => item.category === "Movie")
  );
  return (
    <div className="series__section">
      <h3>Movies</h3>
      <ItemCard items={movies} />
    </div>
  );
};

export default Movies;
