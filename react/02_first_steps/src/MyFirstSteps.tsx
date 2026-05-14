import type { Item } from "./MyAwesomeName";
import { CounterItems } from "./shop/CounterItems";

const itemsProduct: Item[] = [
  {
    productName: "Nintendo Switch",
    quantity: 3,
  },
  {
    productName: "Playstation",
    quantity: 6,
  },
  {
    productName: "XBOX",
    quantity: 2,
  },
  {
    productName: "Steam",
    quantity: 2,
  },
];

export const MyFirstSteps = () => {
  return (
    <section
      style={{
        gap: 10,
        display: "flex-column",
        alignItems: "center",
        flex: "",
      }}
    >
      {itemsProduct.map((item: Item) => {
        return (
          <CounterItems
            key={item.productName}
            productName={item.productName}
            quantity={item.quantity}
          />
        );
      })}
    </section>
  );
};
