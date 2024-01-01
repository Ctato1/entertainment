import "../styles/series.css";
import ItemCard from "../components/UI/ItemCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const [favorited, setFavorited] = useState(null);
  const isClicked = useSelector((state) => state.user.isClicked);
  const [clicked, setClicked] = useState(0);
  useEffect(() => {
    let favoritedMovies = localStorage.getItem("favorites");
    favoritedMovies = favoritedMovies ? JSON.parse(favoritedMovies) : [];
    setFavorited(favoritedMovies);
    console.log(clicked);
  }, [isClicked]);



  return (
    <div className="series__section">
      <h3>Bookmarked Movies</h3>
      <ItemCard items={favorited} />
    </div>
  );
};

export default Favorites;
