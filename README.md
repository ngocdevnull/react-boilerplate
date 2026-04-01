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
The "Brain" of the application. It handles cross-cutting concerns that are independent of any specific UI module.
-   **APIs**: Centralized Axios clients and service classes (BaseApi).
-   **Store**: Global state management (Zustand) for shared data like authentication and settings.
-   **Guards & Interceptors**: Authentication gates and network-level request/response processing.
-   **System Types**: Global DTOs and system-wide models.
-   **I18n**: Internationalization handling (i18next) for multi-language support.
-   **Rules**: Internal `core` logic must never depend on `modules` (Rule 8).

### 2. Module Layer (`src/modules`)
The "Features" of the application. Each folder represents a self-contained domain (e.g., `sign-in`, `dashboard`).
Each module follows a consistent internal structure:
-   `components/`: UI specific to this feature.
-   `hooks/`: Feature-specific side effects and state management.
-   `services/`: Business logic and orchestration.
-   `converters/`: Maps external API DTOs into clean internal Application Models.
-   `types/`: Domain-specific type declarations (Rule 11).

### 3. Shared & UI Layer (`src/shared` & `src/_widgets/ui`)
-   **`_widgets/ui`**: A flat, atomic-style UI kit (Button, Input, Checkbox). These are strictly presentational (Rule 1).
-   **`shared/components`**: Cross-feature components (Header, Sidebar). These are "dumb" components and **must not make API calls** (Rule 3).
-   **`shared/layout`**: High-level page structures.

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
-   **Explicit Typing (Rule 11)**: All types must reside in `.type.ts` files or `types` folders. No inline type definitions in `.tsx` or `.ts` files.
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
