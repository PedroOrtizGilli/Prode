# 🏎️ Prode F1

Aplicación para armar y gestionar **pronósticos de carreras de Fórmula 1** entre amigos. Permite crear prodes, ingresar predicciones por carrera y llevar el puntaje de forma automática.

## 📌 Funcionalidades

- Crear y unirse a prodes
- Ingresar predicciones por carrera (posición final, pole, mejor vuelta, etc.)
- Puntaje automático al cerrar cada carrera
- Tabla de posiciones en tiempo real
- Noticias y novedades de F1 integradas

## 🛠️ Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | Angular |
| Backend | Nest.Js |
| Datos de carrera | [OpenF1 API](https://openf1.org) |
| Noticias | [RSS2JSON](https://rss2json.com) + feed oficial de [Formula1.com](https://www.formula1.com/en/latest/all.xml) |

## 🏗️ Arquitectura

| Frontend | # SPA con Angular |
| Backend | prode-api/ # API REST |

### Fuentes de datos

- **OpenF1** → resultados, posiciones, tiempos, pilotos, sesiones
- **RSS2JSON** → noticias y actualizaciones de F1 (feed oficial)

## 🚀 Instalación

### Backend

```bash
cd backend/prode-api
npm install
cp .env.example .env
npm run start:dev
```

### Frontend
```bash
cd frontend/Prode
npm install
npm start
```

## 🔮 Visión

El proyecto está diseñado con una capa de datos abstracta que permite
conectar nuevas fuentes de datos por deporte. El objetivo a mediano
plazo es soportar múltiples disciplinas (fútbol, tenis, etc.) reutilizando
la lógica de prodes y puntaje.