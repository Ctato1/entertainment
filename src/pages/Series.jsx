import "../styles/series.css";
import ItemCard from "../components/UI/ItemCard";
import { useState } from "react";

const Series = () => {
  const itemData = require("../assets/data/data.json");

  const [series, setSeries] = useState(
    itemData.items.filter((item) => item.category === "TV Series")
  );
  return (
    <div className="series__section">
      <h3>TV Series</h3>
      <ItemCard items={series} />
    </div>
  );
};

export default Series;
