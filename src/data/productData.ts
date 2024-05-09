import fourCheese from "../../public/images/products/4cheese.jpg";
import amstel from "../../public/images/products/amstel.jpg";
import banana_2 from "../../public/images/products/banana_2.jpg";
import banana from "../../public/images/products/banana.jpg";
import brigadeiro from "../../public/images/products/brigadeiro.jpg";
import catuperony from "../../public/images/products/catuperony.jpg";
import cheeseburger_2 from "../../public/images/products/cheeseburger_2.jpg";
import cheeseburger from "../../public/images/products/cheeseburger.jpg";
import catupiry from "../../public/images/products/chicken-catupiry.jpg";
import chicken_1 from "../../public/images/products/chicken-ccream-cheese.jpg";
import fried_chicken from "../../public/images/products/chicken.jpg";
import chili from "../../public/images/products/chili.jpg";
import chocolate from "../../public/images/products/chocolate.jpg";
import churros from "../../public/images/products/churros.jpg";
import coke_2 from "../../public/images/products/coke.jpg";
import mate_1 from "../../public/images/products/F_CHAMATE.jpg";
import mate_2 from "../../public/images/products/F_CMLIMAO.jpg";
import coke from "../../public/images/products/F_COKE.jpg";
import fanta from "../../public/images/products/F_ORANGE.jpg";
import citrus from "../../public/images/products/F_SCHWEPC.jpg";
import water from "../../public/images/products/F_WATER.jpg";
import water_2 from "../../public/images/products/F_WATERC.jpg";
import french_fries_2 from "../../public/images/products/french_fries_2.jpg";
import french_fries from "../../public/images/products/french_fries.jpg";
import garlic from "../../public/images/products/garlic.png";
import ham from "../../public/images/products/ham.jpg";
import hazelnut from "../../public/images/products/hazelnut.jpg";
import heineken from "../../public/images/products/heineken.jpg";
import marbled from "../../public/images/products/marbled.jpg";
import margherita from "../../public/images/products/margherita.jpg";
import mixed_salad from "../../public/images/products/mixed_salad.jpg";
import mushroom from "../../public/images/products/mushroom.jpg";
import neapolitan from "../../public/images/products/napolitan.png";
import pepperoni from "../../public/images/products/pepperoni-pizza.jpg";
import portuguese from "../../public/images/products/portuguese.jpg";
import rb_1 from "../../public/images/products/rb_1.jpg";
import rb_2 from "../../public/images/products/rb_2.jpg";
import rb_3 from "../../public/images/products/rb_3.jpg";
import romeu from "../../public/images/products/romeu.jpg";
import shrimp from "../../public/images/products/shrimp.jpg";
import peanuts from "../../public/images/products/toasts.jpg";
import toasts from "../../public/images/products/toasts.jpg";
import tuna from "../../public/images/products/tuna.jpg";
import veggie from "../../public/images/products/veggie.jpg";
import whiteChocolate from "../../public/images/products/white-chocolate.jpg";
import { Product } from "./@types/product";

const productData: Product[] = [
  {
    id: "1",
    type: "pizza",
    name: "Peperoni pizza",
    info: "Cheese, oregano, and pepperoni.",
    img: pepperoni,
    price: 26.99
  },
  {
    id: "2",
    type: "pizza",
    name: "Margherita pizza",
    info: "Cheese, tomato, oregano, and basil.",
    img: margherita,
    price: 27.75
  },
  {
    id: "3",
    type: "pizza",
    name: "Four cheese pizza",
    info: "Cheese, cream cheese, gorgonzola, oregano, and grated parmesan.",
    img: fourCheese,
    price: 32.99
  },
  {
    id: "4",
    type: "pizza",
    name: "Vegetarian pizza",
    info: "Cheese, mushrooms, black olives, onion, oregano, and green bell pepper.",
    img: veggie,
    price: 29.99
  },
  {
    id: "5",
    type: "pizza",
    name: "Chicken with Cream Cheese Pizza",
    info: "Cheese, ham, quail egg, black olive, onion, oregano, and green bell pepper.",
    img: chicken_1,
    price: 28.5
  },
  {
    id: "6",
    type: "pizza",
    name: "Portuguese pizza",
    info: "Cheese, ham, quail egg, black olive, onion, oregano, and green bell pepper.",
    img: portuguese,
    price: 30
  },
  {
    id: "7",
    type: "pizza",
    name: "Tuna pizza",
    info: "Cheese, onion, and tuna.",
    img: tuna,
    price: 31.99
  },
  {
    id: "8",
    type: "pizza",
    name: "Shrimp pizza",
    info: "Cheese, olive, tomato, bell pepper, and shrimp.",
    img: shrimp,
    price: 33.5
  },
  {
    id: "9",
    type: "pizza",
    name: "Garlic pizza",
    info: "Cheese, garlic, and oregano.",
    img: garlic,
    price: 26.99
  },
  {
    id: "10",
    type: "pizza",
    name: "Mushroom pizza",
    info: "Cheese, oregano, olive, and mushroom.",
    img: mushroom,
    price: 30
  },
  {
    id: "11",
    type: "pizza",
    name: "Ham pizza",
    info: "Cheese, oregano, and ham.",
    img: ham,
    price: 28.99
  },
  {
    id: "12",
    type: "pizza",
    name: "Neapolitan pizza",
    info: "Cheese, tomato, oregano, and grated parmesan.",
    img: neapolitan,
    price: 26.99
  },
  {
    id: "13",
    type: "pizza",
    name: "Chicken with catupiry pizza",
    info: "Shredded chicken, onion, oregano, and catupiry cheese.",
    img: catupiry,
    price: 31.99
  },
  {
    id: "14",
    type: "pizza",
    name: "Catuperony pizza",
    info: "Cheese, pepperoni, catupiry cheese, oregano, and grated parmesan.",
    img: catuperony,
    price: 29.99
  },
  {
    id: "15",
    type: "dessert",
    name: "Brigadeiro pizza",
    info: "Vanilla cream, chocolate brigadeiro, cherries, and sprinkles.",
    img: brigadeiro,
    price: 21.99
  },
  {
    id: "16",
    type: "dessert",
    name: "Churros pizza",
    info: "Dulce de leche, sugar, and cinnamon.",
    img: churros,
    price: 20.99
  },
  {
    id: "17",
    type: "dessert",
    name: "Banana with Cinnamon pizza",
    info: "Banana, cinnamon, condensed milk, and mozzarella.",
    img: banana,
    price: 19.99
  },
  {
    id: "18",
    type: "dessert",
    name: "Marbled piza",
    info: "Milk chocolate and white chocolate.",
    img: marbled,
    price: 22.5
  },
  {
    id: "19",
    type: "dessert",
    name: "Chocolate pizza",
    info: "Vanilla cream, milk chocolate, and chocolate sprinkles.",
    img: chocolate,
    price: 21.99
  },
  {
    id: "20",
    type: "dessert",
    name: "Hazelnut pizza",
    info: "Hazelnut cream, condensed milk, and strawberries.",
    img: hazelnut,
    price: 25
  },
  {
    id: "21",
    type: "dessert",
    name: "White chocolate pizza",
    info: "White chocolate and strawberries.",
    img: whiteChocolate,
    price: 21.99
  },
  {
    id: "22",
    type: "dessert",
    name: "Banana pizza",
    info: "Dulce de leche and bananas.",
    img: banana_2,
    price: 22.5
  },
  {
    id: "23",
    type: "dessert",
    name: "Romeu and Juliet pizza",
    info: "Guava paste, mozzarella, and cinnamon.",
    img: romeu,
    price: 23.5
  },
  {
    id: "24",
    type: "side",
    name: "French fries",
    info: "Fried potatoes and sauces.",
    img: french_fries,
    price: 9.99
  },
  {
    id: "25",
    type: "side",
    name: "French Fries with bacon",
    info: "French fries, bacon, cheddar, and sauces.",
    img: french_fries_2,
    price: 13.99
  },
  {
    id: "26",
    type: "side",
    name: "Mixed salad",
    info: "Fruits, green leaves, and vegetables.",
    img: mixed_salad,
    price: 8.99
  },
  {
    id: "27",
    type: "side",
    name: "Toasts",
    info: "Ham pate and toasted bread.",
    img: toasts,
    price: 11.99
  },
  {
    id: "28",
    type: "side",
    name: "Peanuts",
    info: "Salted roasted peanuts.",
    img: peanuts,
    price: 10
  },
  {
    id: "29",
    type: "side",
    name: "Chili",
    info: "Red beans, minced meat, and tomato paste.",
    img: chili,
    price: 15.99
  },
  {
    id: "30",
    type: "side",
    name: "Fried chicken",
    info: "Chicken wings and legs.",
    img: fried_chicken,
    price: 17.99
  },
  {
    id: "31",
    type: "side",
    name: "Cheeseburger",
    info: "Hamburger patty, lettuce, tomato, onion, pickles, and cheddar sauce.",
    img: cheeseburger,
    price: 12.99
  },
  {
    id: "32",
    type: "side",
    name: "Double cheeseburger",
    info: "Double hamburger patty, lettuce, tomato, onion, pickles, and cheddar sauce.",
    img: cheeseburger_2,
    price: 16.99
  },
  {
    id: "33",
    type: "drink",
    name: "Coke",
    img: coke,
    price: 4.99
  },
  {
    id: "34",
    type: "drink",
    name: "Zero coke",
    img: coke_2,
    price: 4.99
  },
  {
    id: "35",
    type: "drink",
    name: "Fanta",
    img: fanta,
    price: 3.99
  },
  {
    id: "36",
    type: "drink",
    name: "Water",
    img: water,
    price: 1.5
  },
  {
    id: "37",
    type: "drink",
    name: "Sparkling water",
    img: water_2,
    price: 2.5
  },
  {
    id: "38",
    type: "drink",
    name: "Schweppes Citrus",
    img: citrus,
    price: 2.5
  },
  {
    id: "39",
    type: "drink",
    name: "Natural mate",
    img: mate_1,
    price: 3
  },
  {
    id: "40",
    type: "drink",
    name: "Lemon mate",
    img: mate_2,
    price: 3
  },
  {
    id: "41",
    type: "drink",
    name: "Heineken",
    img: heineken,
    price: 5
  },
  {
    id: "42",
    type: "drink",
    name: "Amstel",
    img: amstel,
    price: 5
  },
  {
    id: "43",
    type: "drink",
    name: "Red bull",
    img: rb_1,
    price: 5
  },
  {
    id: "44",
    type: "drink",
    name: "Red bull sugarfree",
    img: rb_2,
    price: 5
  },
  {
    id: "45",
    type: "drink",
    name: "Red bull tropical",
    img: rb_3,
    price: 6
  }
];

export default productData;
