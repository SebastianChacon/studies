import "./style.css";
import { getHeroByOwner, OwnerId } from "./base/getHeroById";

console.log(getHeroByOwner(OwnerId.Marvel));

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

<section id="center">
  <h1>Hi world!!!</h1>
</section>

`;
