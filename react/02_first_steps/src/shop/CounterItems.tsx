import { useState } from "react";
import type { Item } from "../MyAwesomeName";

export const CounterItems = ({ productName, quantity }: Item) => {
  const [count, setCount] = useState(quantity);

  return (
    <section style={{ display: "flex", gap: 10 }}>
      <h1>{productName}</h1>

      <button onClick={() => setCount(count + 1)}>ADD</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>subtract</button>
    </section>
  );
};
