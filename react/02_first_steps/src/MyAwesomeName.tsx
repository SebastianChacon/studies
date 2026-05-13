import { useState } from "react";

interface Props {
  firstName: string;
  lastName: string;
}

export const MyAwesomeName = ({ firstName, lastName }: Props) => {
  const [count, setCount] = useState(10);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>
        {firstName} + {lastName}
      </h3>
      <section
        style={{
          gap: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <button onClick={handleAdd}>add</button>
        <p>{count}</p>
        <button onClick={handleSubtract}>subtract</button>
      </section>
    </>
  );
};
