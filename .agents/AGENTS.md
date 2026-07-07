# Vault 42 - AI Agent Instructions

Welcome to the `vault-42` codebase! This file contains project-scoped instructions, guidelines, and commands to help AI agents understand, develop, build, serve, and test this project effectively.

---

## 1. Project Overview & Architecture

`vault-42` is a dynamic, user-friendly seeds and plants shop application built with **Ionic 8** and **Angular 18**. It targets web and mobile environments using **Capacitor**.

### Tech Stack
- **Framework**: Angular 18 (TypeScript, RxJS)
- **UI library**: Ionic 8 & Ionicons
- **Data/API**: GraphQL Client with Apollo Angular (`@apollo/client`, `apollo-angular`)
- **Mobile runtime**: Capacitor 6 (targets Android/iOS)
- **Testing**: Jasmine & Karma
- **Formatting / Linting**: Prettier & ESLint

### Core Directories & Files
- [src/app/](file:///d:/vault-42/src/app): The core application logic.
  - [core/](file:///d:/vault-42/src/app/core): Singleton services, interceptors, and guards.
  - [feature/](file:///d:/vault-42/src/app/feature): Main feature pages/routes (e.g., `home`, `categories`, `products`, `about`, `not-found`).
  - [shared/](file:///d:/vault-42/src/app/shared): Shared UI components, directives, and pipes.
- [src/assets/](file:///d:/vault-42/src/assets): Static assets like icons and images.
- [src/theme/](file:///d:/vault-42/src/theme): Global styling variables, custom Ionic themes, and variables.
- [capacitor.config.ts](file:///d:/vault-42/capacitor.config.ts): Configuration for Capacitor mobile builds.
- [angular.json](file:///d:/vault-42/angular.json): Angular build configuration.
- [codegen.ts](file:///d:/vault-42/codegen.ts): GraphQL Code Generator configuration.

---

## 2. Dev Setup & CLI Commands

### 📦 Dependency Installation
To install the workspace dependencies, run:
```bash
npm install
```

### 🚀 Running the Development Server
To start the Angular/Ionic local development server (typically serves on `http://localhost:4200`):
```bash
npm start
```

### 🏗️ Building for Production
To build the application for production (compiles code and outputs to `www/` directory):
```bash
npm run build
```

### 🧹 Linting & Formatting
To run the ESLint rules and check style conventions:
```bash
npm run lint
```

### 🧪 Running Unit Tests
To run tests using Jasmine and Karma:
- **Interactive Mode**:
  ```bash
  npm run test
  ```
- **CI / Single Run Mode** (runs without watching and keeps terminal clean):
  ```bash
  npx ng test --watch=false --browsers=ChromeHeadless
  ```

### 🧬 Generating GraphQL Code / Types
If GraphQL queries or schemas are modified, generate the typed Angular services/types:
```bash
npm run generate
```

---

## 3. Style & Design Guidelines

- **Web App Guidelines**: If modifying the layout, refer to the web application design instructions. Maintain premium, modern aesthetics using HSL tailored colors and smooth micro-animations.
- **Ionic Components**: Prefer utilizing Ionic UI components (`<ion-card>`, `<ion-button>`, etc.) to maintain consistency across platforms.
- **Styling**: Write component styles in SCSS (e.g., `.scss` files next to components) or variables inside `src/theme/variables.scss`.
