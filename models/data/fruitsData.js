import 'dotenv/config.js';
import "../../config/database.js";
import Fruit from '../Fruit.js';

let fruits = [
  {
    "name": "Apple",
    "fruitColor": "Red",
    "size": "Medium",
    "weight": "150g",
    "type": "Pome",
    "price": 0.75
  },
  {
    "name": "Banana",
    "fruitColor": "Yellow",
    "size": "Medium",
    "weight": "120g",
    "type": "Berry",
    "price": 0.50
  },
  {
    "name": "Orange",
    "fruitColor": "Orange",
    "size": "Medium",
    "weight": "180g",
    "type": "Citrus",
    "price": 0.60
  },
  {
    "name": "Strawberry",
    "fruitColor": "Red",
    "size": "Small",
    "weight": "30g",
    "type": "Berry",
    "price": 0.25
  },
  {
    "name": "Grapes",
    "fruitColor": "Purple",
    "size": "Small",
    "weight": "5g",
    "type": "Berry",
    "price": 0.10
  },
  {
    "name": "Watermelon",
    "fruitColor": "Green/Red",
    "size": "Large",
    "weight": "5000g",
    "type": "Melon",
    "price": 5.00
  },
  {
    "name": "Mango",
    "fruitColor": "Yellow/Orange",
    "size": "Medium",
    "weight": "300g",
    "type": "Drupe",
    "price": 1.50
  },
  {
    "name": "Pineapple",
    "fruitColor": "Yellow/Brown",
    "size": "Large",
    "weight": "1500g",
    "type": "Multiple",
    "price": 3.00
  },
  {
    "name": "Blueberry",
    "fruitColor": "Blue",
    "size": "Small",
    "weight": "2g",
    "type": "Berry",
    "price": 0.15
  },
  {
    "name": "Kiwi",
    "fruitColor": "Green/Brown",
    "size": "Small",
    "weight": "75g",
    "type": "Berry",
    "price": 0.40
  },
  {
    "name": "Pear",
    "fruitColor": "Green/Yellow",
    "size": "Medium",
    "weight": "170g",
    "type": "Pome",
    "price": 0.80
  },
  {
    "name": "Cherry",
    "fruitColor": "Red",
    "size": "Small",
    "weight": "5g",
    "type": "Drupe",
    "price": 0.20
  },
  {
    "name": "Avocado",
    "fruitColor": "Green",
    "size": "Medium",
    "weight": "200g",
    "type": "Berry",
    "price": 1.25
  },
  {
    "name": "Lemon",
    "fruitColor": "Yellow",
    "size": "Small",
    "weight": "100g",
    "type": "Citrus",
    "price": 0.30
  },
  {
    "name": "Raspberry",
    "fruitColor": "Red",
    "size": "Small",
    "weight": "4g",
    "type": "Berry",
    "price": 0.18
  }
];

Fruit.insertMany(fruits);