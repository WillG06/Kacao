import pistachioEclair from "@/assets/menu/pistachio-eclair.png";
import croissantSandwich from "@/assets/menu/croissant-sandwich.png";
import chocolateCookie from "@/assets/menu/chocolate-cookie.png";
import mangoEntremet from "@/assets/menu/mango-entremet.png";
import raspberryDome from "@/assets/menu/raspberry-dome.png";
import tiramisu from "@/assets/menu/tiramisu.png";
import caramelCake from "@/assets/menu/caramel-cake.png";
import flatWhite from "@/assets/menu/flat-white-glass.png";
import pistachioMatcha from "@/assets/menu/pistachio-matcha.png";
import spanishLatte from "@/assets/menu/spanish-latte.png";
import sourdough from "@/assets/menu/sourdough.png";
import baguette from "@/assets/menu/baguette.png";
import painAuChocolat from "@/assets/menu/pain-au-chocolat.png";
import kouignAmann from "@/assets/menu/kouign-amann.png";
import canele from "@/assets/menu/canele.png";
import basqueCheesecake from "@/assets/menu/basque-cheesecake.png";
import cinnamonBun from "@/assets/menu/cinnamon-bun.png";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  tags?: string[];
};

export type MenuSection = {
  title: string;
  caption: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Pâtisserie",
    caption: "I — Sweet",
    items: [
      { name: "Pistachio Éclair", description: "Choux pastry, Sicilian pistachio cream, dark chocolate", price: "5.50", image: pistachioEclair },
      { name: "Mango Entremet", description: "Alphonso mango mousse, mirror glaze, almond sablé", price: "6.80", image: mangoEntremet, tags: ["Vegetarian", "Contains Nuts", "Contains Dairy"] },
      { name: "Raspberry Dome", description: "Raspberry confit, white chocolate, velvet shell", price: "6.20", image: raspberryDome },
      { name: "Caramel Cake", description: "Vanilla sponge, salted caramel, mascarpone", price: "5.80", image: caramelCake, tags: ["Vegetarian", "Contains Dairy"] },
      { name: "Basque Cheesecake", description: "Burnt top, vanilla cream, slow bake", price: "6.40", image: basqueCheesecake },
      { name: "Canelé de Bordeaux", description: "Rum, vanilla, beeswaxed copper mould", price: "3.80", image: canele },
      { name: "Tiramisu Pot", description: "Mascarpone cream, espresso soak, cocoa", price: "5.20", image: tiramisu },
    ],
  },
  {
    title: "Viennoiserie",
    caption: "II — From the laminator",
    items: [
      { name: "Pain au Chocolat", description: "36-hour lamination, two batons of 70% Valrhona", price: "4.20", image: painAuChocolat },
      { name: "Kouign-Amann", description: "Breton butter pastry, caramelised sugar crust", price: "4.40", image: kouignAmann },
      { name: "Cardamom Bun", description: "Slow-proved brioche, cardamom sugar, vanilla glaze", price: "4.20", image: cinnamonBun },
      { name: "Croissant au Jambon", description: "House croissant, Bayonne ham, raclette", price: "6.40", image: croissantSandwich },
    ],
  },
  {
    title: "Bakery",
    caption: "III — From the oven",
    items: [
      { name: "Country Sourdough", description: "Stone-milled wheat, 48-hour cold ferment", price: "6.50", image: sourdough, tags: ["Vegan"] },
      { name: "Baguette de Tradition", description: "T65 flour, hand-shaped, baked at six and twelve", price: "3.80", image: baguette },
      { name: "Cookie Coulant", description: "Chocolate cookie, molten ganache centre", price: "4.20", image: chocolateCookie },
    ],
  },
  {
    title: "Coffee & Cold",
    caption: "IV — From the bar",
    items: [
      { name: "Flat White", description: "Single origin, double ristretto, served in glass", price: "3.60", image: flatWhite },
      { name: "Iced Pistachio Matcha", description: "Ceremonial matcha, pistachio milk, ice", price: "4.80", image: pistachioMatcha },
      { name: "Spanish Latte", description: "Espresso, condensed milk, served over ice", price: "4.40", image: spanishLatte },
    ],
  },
];
