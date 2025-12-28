# VectorShift Frontend Assessment

This repository contains my implementation of the VectorShift Frontend Technical Assessment. It includes a React frontend and a FastAPI backend to build and submit node-based pipelines.

---

## Features

### 1. Node Abstraction
- Reusable `Node` component to create multiple node types (text, input, output, LLM, etc.)
- Easily extendable to add new node types without rewriting code

### 2. Styling
- Clean, modern, and consistent design
- Node headers, dynamic handles, and responsive text areas
- CSS in `NodeStyles.css` for easy customization

### 3. Text Node Logic
- Dynamic resizing of text input as the user types
- Automatic creation of input handles for variables in `{{variable}}` format

### 4. Backend Integration
- FastAPI backend receives nodes and edges from the frontend
- Calculates number of nodes, number of edges, and checks if the graph is a Directed Acyclic Graph (DAG)
- Frontend displays an alert with the pipeline summary
