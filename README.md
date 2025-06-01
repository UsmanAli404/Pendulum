# Pendulum

A visually-rich and interactive pendulum simulation built using p5.js. This simulation not only models the oscillatory motion of a pendulum but also visualizes the physical forces at play, including weight, velocity, and the component of gravitational force.

[![Run on p5.js](https://img.shields.io/badge/Try%20Live%20Demo-p5.js-blue?style=for-the-badge)](https://editor.p5js.org/Usman_Ali/full/2SJMPfWxD)

## 🔍 Features

- **Realistic Pendulum Dynamics**: Accounts for gravitational acceleration and damping/friction.
- **Force Visualization**:
  - **Weight vector**
  - **Tangential velocity**
  - **Cosine component of gravity**
- **Interactive Controls**:
  - Drag the pendulum to a new position with the mouse.
  - Real-time updates of force vectors.
- **Visual Aids**:
  - Dashed construction lines
  - Reference arc for angular displacement
  - Color-coded arrows and labels

## 📁 File Structure

- `sketch.js` – Main p5.js setup and draw loop.
- `pendulum.js` – Contains all classes and logic related to the pendulum:
  - `Pendulum`
  - `DashedLine`
  - `ArrowLine`
  - Utility functions for arrow vector calculations

## 🚀 Getting Started

### Prerequisites
- A modern browser
- [p5.js](https://p5js.org/) library

### Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/UsmanAli404/Pendulum.git
   cd Pendulum
