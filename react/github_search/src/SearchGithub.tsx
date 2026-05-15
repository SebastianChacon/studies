import { useState } from "react";
import "./index.css";

export const SearchGithub = () => {
  const [search, setSearch] = useState("hi");

  return (
    <section>
      <h1>Github Search</h1>

      <input
        className="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>{search}</p>

      <h3>Least Search</h3>
    </section>
  );
};
