# ♘ Movimientos del Caballo en un Tablero de Ajedrez

Un tablero de ajedrez es una grilla de **8 × 8 casillas**. Cada celda puede ser representada mediante las coordenadas de su fila y su columna, numeradas desde **1 hasta 8**.

## 📌 Descripción del Proyecto

Este proyecto consiste en una aplicación web que simula los movimientos posibles de un **caballo** en el ajedrez.  
La aplicación recibe como entrada las coordenadas actuales del caballo y muestra todas las casillas a las que puede desplazarse siguiendo su patrón de movimiento.

---

## ♞ Movimiento del Caballo

El caballo se mueve en forma de **L**:
- Avanza dos casillas en una dirección (vertical u horizontal)
- Luego se desplaza una casilla en dirección perpendicular

Estas son las posibles combinaciones de movimiento:
(x ± 2, y ± 1)
(x ± 1, y ± 2)

---

## 🧠 Reglas de Validación

- Las coordenadas deben estar dentro del tablero (valores entre 1 y 8).
- Si el usuario ingresa una coordenada inválida, se mostrará un mensaje de error.

---

## 💻 Tecnologías Utilizadas

- **HTML**: Estructura de la interfaz.
- **CSS**: Estilos del tablero y las casillas.
- **JavaScript**: Lógica del movimiento del caballo y manipulación del DOM.

---

## 🖱 Interfaz de Usuario

- Formulario para ingresar fila y columna (valores entre 1 y 8).
- Botón para calcular y mostrar movimientos.
- Visualización del tablero con:
  - El caballo en su posición actual (`♘`)
  - Casillas posibles resaltadas donde puede moverse.

---

## ✅ Cómo Ejecutar

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en un navegador.
3. Ingresa coordenadas válidas y haz clic en "Mostrar movimientos".

---

## 📁 Estructura del Proyecto

/proyecto-caballo-ajedrez
│
├── index.html # Interfaz y formulario
├── styles.css # Estilos del tablero y colores
├── script.js # Lógica del caballo y DOM
└── README.md # Este archivo


---

## 📸 Vista previa del tablero

- 🟩 Casilla donde está el caballo  
- 🟨 Casillas posibles a donde puede moverse

---

## ✍️ Autor

Este proyecto fue desarrollado con fines educativos para practicar HTML, CSS y JavaScript usando el DOM.
Karolain Reyes
Edgar Andres Leal

