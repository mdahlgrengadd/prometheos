# PrometheOS

PrometheOS is a browser‑based desktop shell built with React. It mimics the look and feel of a native operating system’s graphical desktop, while providing a plugin architecture for “applications” that can run in multiple modes: full window, background worker, and live widget.

Demo: https://mdahlgrengadd.github.io/prometheos/?open=wordeditor

---
![image](https://github.com/user-attachments/assets/d574ffd6-c9f0-426c-a20f-0fde4f3d04f6)

## Features

* **Windowed Applications**
  Run plugins in a resizable, draggable window with full React UI and access to shell services.

  * **Background Workers**
    Keep apps alive when minimized to perform data fetching, timers, or computations off the main thread.
  * **Plugin Manifest**
    Simple JSON manifest to declare entry points and supported modes.
  * **Live Desktop Widgets**
    Render small, updating elements (e.g. clock, weather) directly on the desktop canvas.
* **API‑Driven Design**
  All UI components (buttons, sliders, textareas, etc.) are automatically exposed as FastAPI‑style endpoints, ready to be called from anywhere in the environment.

  * \*\*Swagger UI - \*\*Integrated documentation with try‑it‑out functionality, viewable online for testing and exploring all API endpoints.
  * \*\*Graph Editor - \*\*Visual workflow builder to connect API endpoints end‑to‑end (e.g., fetch data from a REST server → filter → process with WebLLM → send to a Word editor).

- **Event Bus**
  Built-in pub/sub system for cross-plugin and shell-plugin communication.

- **Theming & Styling**
  Tailwind CSS–powered design with support for custom plugin styles.

  * Automatically theme Shadcn UI components to match OS styles (e.g., Windows 7, macOS, BeOS) for a seamless desktop experience.

---

##
