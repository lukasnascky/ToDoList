# To Do List

## 📄 About the project

This project is a simple to-do list application developed using React, TypeScript, and Material UI (MUI). It allows users to manage tasks through a clean and responsive interface. Users can add new tasks, view all tasks in a list, and mark them as completed or not. Completed tasks are visually distinguished for better usability.

The application is entirely client-side and does not persist data between sessions, meaning all tasks are reset when the page is refreshed. The goal of this project is to demonstrate fundamental concepts of React development with TypeScript, including componentization, state management, and integration with a modern UI library.

- [Technologies Used](#-technologies-used)
- [Component Structure](#-component-structure)
- [State Management](#-state-management-usestate)
- [Typing with TypeScript](#️-typing-with-typescript)

---

## 💡 Technologies Used

* **React** - A JavaScript library for building user interfaces.

* **TypeScript** - A typed superset of JavaScript that adds static type definitions for better code safety and maintainability.

* **Vite** - A modern and fast build tool used to scaffold and run React projects with TypeScript support.

* **Material UI (MUI)** - A comprehensive UI component library based on Google's Material Design system.

---

## 🧩 Component Structure

The application is organized into reusable and functional components, each with a clear and focused responsibility. Here's an overview of the main components and how they communicate:

### ``App.tsx``

**Responsibility:** Acts as the root component of the application. It manages the state of the task list (``tasks``) and contains the core logic for adding and toggling tasks.

**Communication:** Passes state and handler functions as props to child components (TaskInput, TaskList).

### ``Header.tsx``

**Responsibility:** Displays the title of the application. A purely presentational component with no logic or props.

**Communication:** Does not receive or send any props.

### ``TaskInput.tsx``

**Responsibility:** Contains the input field and button to add a new task.

**Communication:** Receives the ``onAddTask`` function from ``App.tsx`` via props. When the user submits a task, it calls this function and sends the new task title back to the parent.

### ``TaskList.tsx``

**Responsibility:** Renders the list of tasks.

**Communication:** Receives the array of tasks (tasks) and the toggle handler function (onToggleTask) from App.tsx via props. It maps through the task array and renders one TaskItem for each task.

### ``types/Task.ts``

**Purpose:** Centralizes the task typing in a single location to avoid *repeating* the same interface across multiple components.

**Responsibility:** Defines the structure of a Task using a TypeScript interface.

**Usage:** All components that deal with tasks (``App.tsx``, ``TaskList.tsx``, ``TaskItem.tsx``) import the ``Task`` type from this file using a type-only import:

    import type { Task } from './components/types/Task';

---

## 🔄 State Management (``useState``)

The application uses React's useState hook to manage two main pieces of state:

### **1. Task List State**

**Purpose:** Stores the array of tasks (each task has an id, title, and completed flag).

**Usage:** Allows the application to dynamically update the UI whenever a new task is added or an existing task is toggled as completed.

    // App.tsx
    const [tasks, setTasks] = useState<Task[]>([]);

Every time a new task is created or updated, the state is updated through ``setTasks``, which re-renders the list in the UI.

### **2. Input State**

**Purpose:** Stores the value typed in the input field before adding a new task.

**Usage:** Ensures that the input field is controlled and reflects the current user input.

    // TaskInput.tsx
    const [newTask, setNewTask] = useState<string>('');

The value of the input is bound to ``newTask``, and the ``setNewTask`` function is called every time the user types something. When the user clicks the **Add Task** button, the value is sent to the parent component (``App.tsx``) and then cleared.

For better understanding:

``tasks`` ---> array that holds all task objects.

``newTask`` ---> string that stores the current input value for creating a new task.

This approach keeps the application reactive: whenever the state changes, React automatically re-renders the components that depend on it.

---

## ⚛️ Typing with TypeScript

To ensure type safety and consistency across the application, a custom interface was created to represent the structure of a task object. This interface is stored in a dedicated file inside the ``types`` folder.

    // types/Task.ts
    export interface Task {
      id: number;              // Unique identifier for each task
      title: string;           // The text of the task
      completed: boolean;      // Indicates whether the task is done
    }

* **``id: number``** ---> A unique identifier for each task defined by ``Date``. Defined as a number to simplify operations like searching, updating, or toggling tasks.

* **``title: string``** ---> Stores the text or description of the task (e.g., "Learn React"). Defined as a string since it represents user input text.

* **``completed: boolean``** ---> Indicates whether the task has been completed (``true``) or not (``false``). Defined as a boolean to allow simple toggle functionality.

### Usage in Components

Whenever a component needs to work with tasks, it imports and uses the ``Task`` type.

*Example in ``App.tsx``*:

    import type { Task } from './types/Task';

    const [tasks, setTasks] = useState<Task[]>([]);

Here, ``tasks`` is strictly typed as an array of ``Task`` objects, which means each item must follow the defined structure (``id``, ``title``, ``completed``).

*Example in `TaskItem.tsx`*

    import type { Task } from '../types/Task';

    interface TaskItemProps {
      task: Task;
      onToggle: (id: number) => void;
    }

* The ``task`` prop must be a valid ``Task`` object.

* The ``onToggle`` function must receive a ``number`` as the ``id``.

---
