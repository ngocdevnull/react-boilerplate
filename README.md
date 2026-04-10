# React Boilerplate

This is a high-performance, strictly typed React starter kit architected with **Clean Architecture** and **Feature-Based** principles. It is designed to handle large-scale applications while maintaining high developer velocity and code quality.

---

## 🚀 Getting Started

### 1. Setup
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Build & Quality
```bash
npm run build   # Production build
npm run lint    # ESLint check
npm run format  # Prettier formatting
```

---

## 🏗 Architecture & Design Philosophy

The project is split into three main layers to ensure a high degree of decoupling and maintainability.

### 1. Core Layer (`src/core`)
The **"System Infrastructure"** (The Brain). It establishes the rules and services that power the entire application.
-   **Why this exists**: To ensure global concerns (Auth, Network, Security) are handled centrally and remain independent of any UI or business feature. It is the lowest layer and **must never depend on modules** (Rule 8).
-   **Contents**: API clients, Route Guards, Request Interceptors, Global Stores (Auth), System-wide Types, and I18n setup.

### 2. Module Layer (`src/modules`)
The **"Business Features"** (The Heart). Each folder represents a self-contained domain or feature of the application (e.g., `sign-in`, `home`).
-   **Structure**: Each module maintains its own components, constants, hooks, services, converters, types, and utils.
-   **Why this exists**: To keep features isolated. If you delete a module, the rest of the application remains functional. It bridges the gap between raw data (Core) and visual display (UI).

### 3. Shared & UI Layer (`src/shared` & `src/_widgets/ui`)
The **"Visual Components"** (The Body). This layer is strictly presentational and handles how things look.

#### 🟢 UI Widgets (`src/_widgets/ui`) - The Primitives
-   **Purpose**: Atomic-level building blocks like `Button`, `Input`, `Select`.
-   **Why this is separate**: These are context-free "bricks" that could be moved to any project. They follow a flat structure (Rule 1) and focus purely on base design tokens.

#### 🔵 Shared Components (`src/shared`) - The Composites
-   **Purpose**: Application-specific components like `Header`, `Sidebar`, or specialized `Layouts`.
-   **Why this is separate**: These are built by composing multiple UI Widgets together. While they remain "dumb" (no API calls - Rule 3), they represent the specific layout structures of *this* project.

---

## 🔄 The Data Flow (Converter Pattern)

This project strictly enforces the **Converter/Mapper Pattern** to decouple the UI from the Backend API schema:

1.  **Request**: UI calls a Hook $\rightarrow$ Hook calls a Service $\rightarrow$ Service calls an API.
2.  **Response**: API returns a **DTO** (Data Transfer Object).
3.  **Transformation**: The Service passes the DTO through a **Converter**. The Converter maps raw backend fields to clean, camelCase frontend properties.
4.  **Consumption**: The UI consumes the **Application Model**. If the backend schema changes, you only update the Converter, not the UI.

---

## 📜 Engineering Standards (Golden Rules)

The project follows a set of strict rules (defined in `AGENTS.md`) to ensure consistency across the codebase:

-   **Import Order (Rule 5)**: 
    1. External libraries 2. Project aliases (@core, @ui) 3. Relative paths (./, ../).
-   **Design Tokens (Rule 6)**: No hardcoded HEX colors. Always use global design tokens (e.g., `bg-primary`, `text-black-10`).
-   **No Comments (Rule 7)**: Code must be self-documenting through clear naming and modularity.
-   **Explicit Typing (Rule 11)**: All types must reside in `types.ts` files or `types` folders. No inline type definitions in `.tsx` or `.ts` files.
-   **Global Utility Types (Rule 9)**: Use `Nullable<T>`, `Maybe<T>`, or `Nillable<T>` instead of raw `| null` or `| undefined`.

---

## 🛠 Tech Stack

-   **Runtime**: React 18 & Vite 6.
-   **Language**: TypeScript 5 (Strict Mode).
-   **Styling**: Tailwind CSS v4 (Glassmorphism & Modern Aesthetics).
-   **State**: Zustand 5 (Global) & TanStack Query v5 (Server State).
-   **Validation**: Zod (Schema-based runtime validation).
-   **Forms**: React Hook Form.
-   **Icons**: Lucide React.
-   **I18n**: i18next & react-i18next (Multi-language support).
-   **Routing**: React Router Dom v6 (with Protected Routes).

---

© 2026 - Developed by Ngoc Le.
