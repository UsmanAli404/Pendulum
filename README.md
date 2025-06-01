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

## 🧠 Interactivity

This simulation provides rich and intuitive interactivity features to help users explore the dynamics of a pendulum:

### 🖱️ Mouse Controls
- **Drag the bob**: Click and drag the pendulum bob to a new position. When released, it will begin oscillating from that position.
- **Mouse-over feedback**: Hovering over elements like the pendulum string or bob provides smooth transitions and accurate positioning.

### 🎯 Real-Time Physics Feedback
- **Live Arrow Updates**:
  - **Weight vector** (blue): Constant downward gravitational force acting on the bob.
  - **Tangential velocity** (yellow): Always perpendicular to the string and changes direction during oscillation.
  - **Cosine component of gravity** (orange): Points along the string; changes magnitude based on current angle.
- **Dashed Construction Lines**:
  - **Central Line**: Vertical dashed line helps visualize angular deviation.
  - **Top Reference Line**: Helps maintain context for horizontal displacement and maximum amplitude.

### 🔁 Motion Control & Physics
- **Friction factor**: The simulation models energy loss using a customizable damping factor.
- **Real-time equations**: Angular velocity and acceleration are computed on every frame using realistic physics.

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
