import { MyFirstSteps } from "./MyFirstSteps";

interface Props {
  firstName: string;
  lastName: string;
}

export interface Item {
  productName: string;
  quantity: number;
}

export const MyAwesomeName = ({ firstName, lastName }: Props) => {
  return (
    <>
      <h1 data-testid="first-name-tittle">{firstName}</h1>
      <h1>Mateo</h1>
      <h2>{lastName}</h2>
      <MyFirstSteps />
    </>
  );
};
