import CheeseWhiteSauce from "/menu/classic/cheese_white_sauce.jpeg";
import CheeseTomatoSauce from "/menu/classic/cheese_tomato_sauce.jpeg";
import Pepperoini from "/menu/classic/pepperoni.jpeg";
import Hawaiian from "/menu/classic/hawaiian.jpeg";
import Beef from "/menu/classic/beef.jpeg";
import BaconMushroom from "/menu/classic/bacon_mushroom.jpeg";
import Veggie from "/menu/classic/veggie.jpeg";

export type MenuItem = {
  name: string;
  ingredients?: string;
  image: string;
};

export const classicPizzas: MenuItem[] = [
  {
    name: "Cheese With White Sauce",
    ingredients: "Creamy White Garlic Sauce, Mozzarella, Cheddar",
    image: CheeseWhiteSauce,
  },
  {
    name: "Cheese With Tomato Sauce",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Cheddar",
    image: CheeseTomatoSauce,
  },
  {
    name: "Pepperoni",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Pepperoni",
    image: Pepperoini,
  },
  {
    name: "Hawaiian",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Ham, Pineapple",
    image: Hawaiian,
  },
  {
    name: "Beef",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Beef",
    image: Beef,
  },
  {
    name: "Bacon Mushroom",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Bacon, Mushroom",
    image: BaconMushroom,
  },
  {
    name: "Veggie",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Mushroom, Onion, Capsicum",
    image: Veggie,
  },
];

import BBQChickenBaconFeast from "/menu/feast/bbq_chicken_bacon_feast.jpeg";
import ButterChickenFeast from "/menu/feast/butter_chicken_feast.jpeg";
import ComboFeast from "/menu/feast/combo_feast.jpeg";
import FiestyFeast from "/menu/feast/fiesty_feast.jpeg";
import ItalianFeast from "/menu/feast/italian_feast.jpeg";
import MeatLoverFeast from "/menu/feast/meat_lover_feast.jpeg";
import MediterraneanFeast from "/menu/feast/mediterranean_feast.jpeg";
import PestoFeast from "/menu/feast/pesto_feast.jpeg";
import VeggieFeast from "/menu/feast/veggie_feast.jpeg";

export const feastPizzas: MenuItem[] = [
  {
    name: "BBQ Chicken Bacon Feast",
    ingredients: "BBQ Sauce, Mozzarella, Chicken, Bacon, Onion",
    image: BBQChickenBaconFeast,
  },
  {
    name: "Butter Chicken Feast",
    ingredients: "Butter Chicken Sauce, Mozzarella, Chicken, Capsicum, Onion",
    image: ButterChickenFeast,
  },
  {
    name: "Combo Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Pepperoni, Ham, Mushroom, Capsicum, Onion",
    image: ComboFeast,
  },
  {
    name: "Fiesty Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Pepperoni, Beef, Capsicum, Onion, Jalapeno",
    image: FiestyFeast,
  },
  {
    name: "Italian Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Pepperoni, Ham, Mushroom, Capsicum, Onion, Olives",
    image: ItalianFeast,
  },
  {
    name: "Meat Lover Feast",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Pepperoni, Ham, Beef, Bacon",
    image: MeatLoverFeast,
  },
  {
    name: "Mediterranean Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Feta, Spinach, Capsicum, Onion, Olives",
    image: MediterraneanFeast,
  },
  {
    name: "Pesto Feast",
    ingredients: "Pesto Sauce, Mozzarella, Chicken, Mushroom, Capsicum, Onion",
    image: PestoFeast,
  },
  {
    name: "Veggie Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Mushroom, Capsicum, Onion, Olives",
    image: VeggieFeast,
  },
];

import Pepsi from "/menu/drinks/pepsi.jpeg";
import DietPepsi from "/menu/drinks/diet_pepsi.jpeg";
import SevenUp from "/menu/drinks/7up.jpeg";
import MountainDew from "/menu/drinks/mountain_dew.jpeg";
import Mug from "/menu/drinks/mug.jpeg";
import Brisk from "/menu/drinks/brisk.jpeg";
import Crush from "/menu/drinks/orange_crush.jpeg";

export const drinks: MenuItem[] = [
  {
    name: "Pepsi",
    image: Pepsi,
  },
  {
    name: "Diet Pepsi",
    image: DietPepsi,
  },
  {
    name: "7Up",
    image: SevenUp,
  },
  {
    name: "Mountain Dew",
    image: MountainDew,
  },
  {
    name: "Mug",
    image: Mug,
  },
  {
    name: "Brisk",
    image: Brisk,
  },
  {
    name: "Orange Crush",
    image: Crush,
  },
];

import CheesyBread from "/menu/extras/cheesy_bread.jpeg";
import ChickenWings from "/menu/extras/chicken_wings.jpeg";
import Brownie from "/menu/extras/brownie.jpeg";

export const extras: MenuItem[] = [
  {
    name: "Cheesy Bread",
    image: CheesyBread,
  },
  {
    name: "Chicken Wings",
    image: ChickenWings,
  },
  {
    name: "Brownie",
    image: Brownie,
  },
];
