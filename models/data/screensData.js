import 'dotenv/config.js';
import "../../config/database.js";
import Screen from '../Screen.js';

let screens = [
  {
    "brightness": "300 nits",
    "contrast": "1000:1",
    "resolution": "1920x1080",
    "size": "24 pulgadas",
    "model": "Monitor A1"
  },
  {
    "brightness": "350 nits",
    "contrast": "1200:1",
    "resolution": "2560x1440",
    "size": "27 pulgadas",
    "model": "Monitor B2"
  },
  {
    "brightness": "400 nits",
    "contrast": "1500:1",
    "resolution": "3840x2160",
    "size": "32 pulgadas",
    "model": "TV C3"
  },
  {
    "brightness": "250 nits",
    "contrast": "800:1",
    "resolution": "1366x768",
    "size": "19 pulgadas",
    "model": "Monitor D4"
  },
  {
    "brightness": "450 nits",
    "contrast": "1800:1",
    "resolution": "3440x1440",
    "size": "34 pulgadas",
    "model": "Monitor E5"
  },
  {
    "brightness": "500 nits",
    "contrast": "2000:1",
    "resolution": "3840x2160",
    "size": "55 pulgadas",
    "model": "TV F6"
  },
  {
    "brightness": "320 nits",
    "contrast": "1100:1",
    "resolution": "1920x1080",
    "size": "27 pulgadas",
    "model": "Monitor G7"
  },
  {
    "brightness": "380 nits",
    "contrast": "1400:1",
    "resolution": "2560x1440",
    "size": "32 pulgadas",
    "model": "Monitor H8"
  },
  {
    "brightness": "420 nits",
    "contrast": "1600:1",
    "resolution": "3840x2160",
    "size": "43 pulgadas",
    "model": "TV I9"
  },
  {
    "brightness": "280 nits",
    "contrast": "900:1",
    "resolution": "1600x900",
    "size": "21.5 pulgadas",
    "model": "Monitor J10"
  },
  {
    "brightness": "480 nits",
    "contrast": "1900:1",
    "resolution": "3440x1440",
    "size": "38 pulgadas",
    "model": "Monitor K11"
  },
  {
    "brightness": "550 nits",
    "contrast": "2200:1",
    "resolution": "3840x2160",
    "size": "65 pulgadas",
    "model": "TV L12"
  },
  {
    "brightness": "330 nits",
    "contrast": "1150:1",
    "resolution": "1920x1080",
    "size": "28 pulgadas",
    "model": "Monitor M13"
  },
  {
    "brightness": "390 nits",
    "contrast": "1450:1",
    "resolution": "2560x1440",
    "size": "34 pulgadas",
    "model": "Monitor N14"
  },
  {
    "brightness": "430 nits",
    "contrast": "1700:1",
    "resolution": "3840x2160",
    "size": "50 pulgadas",
    "model": "TV O15"
  }
];

Screen.insertMany(screens);