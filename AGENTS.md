# AGENTS.md

## Purpose

This file defines mandatory implementation rules for this project.
Do not change these rules unless the user explicitly asks to update them.

## Rules

### Rule 1 - Flat UI Component Structure

Do not use `atoms`, `molecules`, or `organisms` folders in `src/_widgets/ui`.
Keep UI components in a flat component-folder structure.

#### Rule 1 Example

```text
src/_widgets/ui/
  button/
    index.tsx
    button.type.ts
    button.variant.ts
  pagination/
    index.tsx
    pagination.type.ts
  table/
    index.tsx
    table.type.ts
```

### Rule 2 - Feature-Based Architecture for Modules

Apply **Feature-Based Architecture** for `src/modules`.

#### Rule 2 Example

```text
src/modules/*/
  ├── components/
  ├── constants/
  ├── converters/
  ├── hooks/
  ├── services/
  ├── types/
  ├── utils/
  └── index.tsx
```

Note: Sub-directories (e.g., `constants/`, `hooks/`, `schema/`) should only be created when they are actually used by the module.

### Rule 3 - No API Calls in Shared Components

Never make API calls in `src/shared/components` because all components there are dumb/presentational components.

### Rule 4 - Domain/System Texts Must Be Constants or Enums

Only domain/system texts must be declared as constants or enums (for example: table columns, API status values, business status values, system messages).
Simple UI labels can be hard-coded in components.

### Rule 5 - Import Order

Import order must follow this sequence:

1. External libraries
2. Project aliases/imports from project root
3. Relative imports (`./` or `../`)

Each import group (1, 2, 3) must be separated by one blank line.

### Rule 6 - Use Global Design Tokens for Styles

Never hard-code HEX color values in components.
Use global color tokens/classes from the design system (for example: `bg-primary`, `text-black-10`, `border-border`).

### Rule 7 - No Comments in Code

Do not add comments to the source code (neither single-line `//` nor multi-line `/* */`).
The code should be self-documenting through clear naming and modular structure.

### Rule 8 - Core Layer Import Boundaries

Inside `src/core`, use relative imports for other `core` files. Do not use `@core/*` aliases from within `core`.
Also, `core` must not depend on types defined in `src/modules`; shared API DTO types belong to `src/core/types`.

### Rule 9 - Use Global Utility Types for Null/Undefined

Do not use raw union types like `| null` or `| undefined` in the source code.
Use global utility types from `globals.type.d.ts` (e.g., `Nullable<T>`, `Maybe<T>`, `Nillable<T>`).

#### Rule 9 Example

```tsx
// ❌ Bad
toAccessToken: (response: SignInResponseDto): string | null => {

// ✅ Good
toAccessToken: (response: SignInResponseDto): Nullable<string> => {
```

### Rule 10 - Logic Helper Separation

All logic processing helpers and utility functions must be placed in a `utils` folder or file. They should not be declared within mappers, services, or components.

### Rule 11 - Centralized Type Declarations

All type and interface declarations must be placed in a `types` folder or files ending in `.type.ts`. Non-type files (e.g., `.service.ts`, `.tsx`, `.mapper.ts`) should not contain any inline type or interface definitions.

#### Rule 11 Example

```tsx
// ❌ Bad in sign-up.service.ts
export interface SignUpResult {
  user: Nullable<AuthUser>;
  accessToken: Nullable<string>;
}

// ✅ Good
// src/modules/sign-up/types/sign-up.type.ts
export interface SignUpResult {
  user: Nullable<AuthUser>;
  accessToken: Nullable<string>;
}
```