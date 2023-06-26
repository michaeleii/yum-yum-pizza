import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import IMenuItem from "../../interfaces/IMenuItem";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData() as IMenuItem[];
  return (
    <ul className="divide-y-2 divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

export { menuLoader };
