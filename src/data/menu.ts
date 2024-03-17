import CheeseWhiteSauce from "/menu/classic/cheese_white_sauce.jpeg";
import CheeseTomatoSauce from "/menu/classic/cheese_tomato_sauce.jpeg";
import Pepperoini from "/menu/classic/pepperoni.jpeg";
import Hawaiian from "/menu/classic/hawaiian.jpeg";
import Beef from "/menu/classic/beef.jpeg";
import BaconMushroom from "/menu/classic/bacon_mushroom.jpeg";
import Veggie from "/menu/classic/veggie.jpeg";

export type MenuItem = {
  price: number;
  name: string;
  ingredients?: string;
  image: string;
};

export const classicPizzas: MenuItem[] = [
  {
    name: "Cheese With White Sauce",
    ingredients: "Creamy White Garlic Sauce, Mozzarella, Cheddar",
    image: CheeseWhiteSauce,
    price: 12.99,
  },
  {
    name: "Cheese With Tomato Sauce",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Cheddar",
    image: CheeseTomatoSauce,
    price: 11.99,
  },
  {
    name: "Pepperoni",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Pepperoni",
    image: Pepperoini,
    price: 13.99,
  },
  {
    name: "Hawaiian",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Ham, Pineapple",
    image: Hawaiian,
    price: 14.99,
  },
  {
    name: "Beef",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Beef",
    image: Beef,
    price: 13.99,
  },
  {
    name: "Bacon Mushroom",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Bacon, Mushroom",
    image: BaconMushroom,
    price: 14.99,
  },
  {
    name: "Veggie",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Mushroom, Onion, Capsicum",
    image: Veggie,
    price: 12.99,
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
    price: 15.99,
  },
  {
    name: "Butter Chicken Feast",
    ingredients: "Butter Chicken Sauce, Mozzarella, Chicken, Capsicum, Onion",
    image: ButterChickenFeast,
    price: 14.99,
  },
  {
    name: "Combo Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Pepperoni, Ham, Mushroom, Capsicum, Onion",
    image: ComboFeast,
    price: 16.99,
  },
  {
    name: "Fiesty Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Pepperoni, Beef, Capsicum, Onion, Jalapeno",
    image: FiestyFeast,
    price: 17.99,
  },
  {
    name: "Italian Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Pepperoni, Ham, Mushroom, Capsicum, Onion, Olives",
    image: ItalianFeast,
    price: 18.99,
  },
  {
    name: "Meat Lover Feast",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Pepperoni, Ham, Beef, Bacon",
    image: MeatLoverFeast,
    price: 19.99,
  },
  {
    name: "Mediterranean Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Feta, Spinach, Capsicum, Onion, Olives",
    image: MediterraneanFeast,
    price: 17.99,
  },
  {
    name: "Pesto Feast",
    ingredients: "Pesto Sauce, Mozzarella, Chicken, Mushroom, Capsicum, Onion",
    image: PestoFeast,
    price: 15.99,
  },
  {
    name: "Veggie Feast",
    ingredients:
      "Zesty Tomato Sauce, Mozzarella, Mushroom, Capsicum, Onion, Olives",
    image: VeggieFeast,
    price: 16.99,
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
    price: 1.99,
  },
  {
    name: "Diet Pepsi",
    image: DietPepsi,
    price: 1.99,
  },
  {
    name: "7Up",
    image: SevenUp,
    price: 1.99,
  },
  {
    name: "Mountain Dew",
    image: MountainDew,
    price: 1.99,
  },
  {
    name: "Mug",
    image: Mug,
    price: 1.99,
  },
  {
    name: "Brisk",
    image: Brisk,
    price: 1.99,
  },
  {
    name: "Orange Crush",
    image: Crush,
    price: 1.99,
  },
];

import CheesyBread from "/menu/extras/cheesy_bread.jpeg";
import ChickenWings from "/menu/extras/chicken_wings.jpeg";
import Brownie from "/menu/extras/brownie.jpeg";

export const extras: MenuItem[] = [
  {
    name: "Cheesy Bread",
    image: CheesyBread,
    price: 4.99,
  },
  {
    name: "Chicken Wings",
    image: ChickenWings,
    price: 6.99,
  },
  {
    name: "Brownie",
    image: Brownie,
    price: 3.99,
  },
];
