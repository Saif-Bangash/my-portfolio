# React + Vite Setup

This template provides a minimal setup to get **React** working in **Vite** with **Hot Module Replacement (HMR)** and **ESLint** integration for code quality enforcement.

## Overview

This project is a lightweight boilerplate for getting started with React and Vite. It includes:

- **React** for building user interfaces.
- **Vite** for fast development and build times.
- **Hot Module Replacement (HMR)** for faster development.
- **ESLint** configuration to maintain code quality.

## Official Plugins

There are two official Vite plugins available for React development:

1. **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**  
   This plugin uses [Babel](https://babeljs.io/) for **Fast Refresh**. It provides a smooth development experience by updating only the changed components without a full page reload.

2. **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**  
   This plugin uses [SWC](https://swc.rs/) for **Fast Refresh**. It is a faster alternative to Babel and can be used for improved performance in large projects.

## Installation

### Step 1: Clone the Repository

First, clone this repository:

```bash
git clone https://github.com/your-username/react-vite-template.git
cd react-vite-template
