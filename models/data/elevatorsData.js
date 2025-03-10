import 'dotenv/config.js';
import "../../config/database.js";
import Elevator from '../Elevator.js';

let elevators = [
    {
      "model": "Modelo A1",
      "speed": "2 m/s",
      "security": "Sistema de frenado avanzado, sensores de puerta",
      "energyEfficiency": "Clase A"
    },
    {
      "model": "Modelo B2",
      "speed": "1.5 m/s",
      "security": "Frenos de emergencia, cámara de vigilancia",
      "energyEfficiency": "Clase B"
    },
    {
      "model": "Modelo C3",
      "speed": "1 m/s",
      "security": "Sensores de sobrecarga, botón de alarma",
      "energyEfficiency": "Clase C"
    },
      {
      "model": "Modelo D4",
      "speed": "2.5 m/s",
      "security": "Sistema de frenado magnético, sensores de movimiento",
      "energyEfficiency": "Clase A+"
    },
    {
      "model": "Modelo E5",
      "speed": "1.8 m/s",
      "security": "Frenos regenerativos, comunicación bidireccional",
      "energyEfficiency": "Clase B+"
    },
    {
      "model": "Modelo F6",
      "speed": "1.2 m/s",
      "security": "Sensores de alineación de puertas, sistema de rescate automático",
      "energyEfficiency": "Clase C+"
    },
    {
      "model": "Modelo G7",
      "speed": "3 m/s",
      "security": "Sistema de inteligencia artificial, sensores de vibración",
      "energyEfficiency": "Clase A++"
    },
    {
      "model": "Modelo H8",
      "speed": "2.2 m/s",
      "security": "Frenos hidráulicos de alta seguridad, sensores térmicos",
      "energyEfficiency": "Clase B++"
    },
    {
      "model": "Modelo I9",
      "speed": "1.6 m/s",
      "security": "Sensores de humo, sistema de evacuación de emergencia",
      "energyEfficiency": "Clase C++"
    },
      {
      "model": "Modelo J10",
      "speed": "1.9 m/s",
      "security": "Sistema de monitoreo remoto, frenos de tracción",
      "energyEfficiency": "Clase B"
    },
    {
      "model": "Modelo K11",
      "speed": "1.3 m/s",
      "security": "Sensores de peso, sistema de bloqueo de puertas",
      "energyEfficiency": "Clase C"
    },
    {
      "model": "Modelo L12",
      "speed": "2.8 m/s",
      "security": "Sistema de autodiagnóstico, sensores de proximidad",
      "energyEfficiency": "Clase A"
    },
    {
      "model": "Modelo M13",
      "speed": "2.1 m/s",
      "security": "Frenos de doble circuito, sistema de comunicación de voz",
      "energyEfficiency": "Clase B"
    },
    {
      "model": "Modelo N14",
      "speed": "1.4 m/s",
      "security": "Sensores de nivelación, sistema de llamada de emergencia",
      "energyEfficiency": "Clase C"
    },
      {
      "model": "Modelo O15",
      "speed": "2.3 m/s",
      "security": "Sistema de control de acceso, sensores infrarrojos",
      "energyEfficiency": "Clase B"
    }
  ];

Elevator.insertMany(elevators);