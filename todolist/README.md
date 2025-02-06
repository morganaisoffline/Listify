# React ToDoList

## Overview

This is a simple and sleek to-do list application built with React. It allows users to add and remove tasks, and toggle between light and dark modes by clicking on the title.

## Features

- Add tasks
- Remove tasks
- Toggle between light and dark modes
- Tasks are saved in the browser's local storage

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-todolist.git
   ```
2. Navigate to the project directory:
   ```sh
   cd react-todolist
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
react-todolist/
├── public/
├── src/
│   ├── assets/
│   │   ├── Footer.jsx
│   │   ├── Task.jsx
│   │   ├── Taskbar.jsx
│   │   ├── Title.jsx
│   ├── style/
│   │   ├── App.css
│   │   ├── LightMode.css
│   │   ├── Taskbar.css
│   │   ├── Title.css
│   ├── App.jsx
│   ├── index.js
├── README.md
├── package.json
```

## Components

- **Title**: Displays the title and subtitle. Clicking on the title toggles light/dark mode.
- **Taskbar**: Input field for adding new tasks.
- **Task**: Displays individual tasks with a remove button.
- **Footer**: Displays the footer with a message.

## Styling

- **LightMode.css**: Contains styles for light mode.
- **Taskbar.css**: Contains styles for the taskbar.
- **Title.css**: Contains styles for the title.

## Local Storage

Tasks are saved in the browser's local storage to persist between page reloads.

## License

This project is licensed under the MIT License.
