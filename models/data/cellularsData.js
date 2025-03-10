import 'dotenv/config.js';
import "../../config/database.js";
import Cellular from "../Cellular.js";

let cellulars = [
  {
    "models": "iPhone 13",
    "color": "Azul",
    "version": "iOS 15"
  },
  {
    "models": "Samsung Galaxy S22",
    "color": "Negro",
    "version": "Android 12"
  },
  {
    "models": "Google Pixel 6",
    "color": "Verde",
    "version": "Android 12"
  },
  {
    "models": "Xiaomi Redmi Note 11",
    "color": "Blanco",
    "version": "Android 11"
  },
  {
    "models": "OnePlus 9 Pro",
    "color": "Plata",
    "version": "Android 11"
  },
  {
    "models": "iPhone SE (3rd gen)",
    "color": "Rojo",
    "version": "iOS 15"
  },
  {
    "models": "Samsung Galaxy A53",
    "color": "Naranja",
    "version": "Android 12"
  },
  {
    "models": "Motorola Moto G Power",
    "color": "Gris",
    "version": "Android 11"
  },
  {
    "models": "Huawei P50 Pro",
    "color": "Dorado",
    "version": "Android 11 (EMUI 12)"
  },
  {
    "models": "Sony Xperia 1 IV",
    "color": "Morado",
    "version": "Android 12"
  },
  {
    "models": "iPhone 12 Mini",
    "color": "Verde",
    "version": "iOS 14"
  },
  {
    "models": "Samsung Galaxy Z Fold 3",
    "color": "Negro",
    "version": "Android 11"
  },
  {
    "models": "Google Pixel 5a",
    "color": "Verde",
    "version": "Android 11"
  },
  {
    "models": "Xiaomi Poco X3 Pro",
    "color": "Azul",
    "version": "Android 11"
  },
  {
    "models": "LG Velvet",
    "color": "Blanco",
    "version": "Android 10"
  }
];

Cellular.insertMany(cellulars);