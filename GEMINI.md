# ZlAngular - Project Instructions

This project is a modern Angular boilerplate designed for rapid development. It leverages the latest features of Angular 21 and a powerful supporting ecosystem.

## Project Overview

- **Framework:** [Angular 21](https://angular.dev/) (Standalone Components, Signals, New Control Flow).
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with [daisyUI 5](https://daisyui.com/) for UI components.
- **Data Fetching & State Management:** [TanStack Query (Angular Query)](https://tanstack.com/query/latest/docs/framework/angular/overview).
- **Testing:** [Vitest](https://vitest.dev/) for fast unit testing.
- **Package Manager:** `pnpm`.
- **Icons:** [NG Icons](https://ng-icons.github.io/ng-icons/) (Lucide).
- **Notifications:** [@ngxpert/hot-toast](https://ngxpert.github.io/hot-toast/).

## Architecture & Structure

The project follows a feature-based directory structure under `src/app/features`.

- `src/app/app.config.ts`: Main application configuration (providers, router, etc.).
- `src/app/app.routes.ts`: Root routing configuration.
- `src/app/features/`: Contains feature modules, components, and services.
  - `custom-components/`: Example feature demonstrating a table with pagination and search.
  - `home/`: Main landing page.
- `src/environments/`: Environment-specific configurations.

## Development Workflows

### Building and Running

- **Development Server:** `pnpm start` (runs `ng serve`)
- **Build for Production:** `pnpm build` (runs `ng build`)
- **Run Tests:** `pnpm test` (runs `vitest`)
- **Watch Mode:** `pnpm watch` (runs `ng build --watch --configuration development`)

### Coding Conventions

- **Angular Best Practices:**
  - Use **Standalone Components** (`imports` property in `@Component`).
  - Use **Signals** (`input()`, `computed()`, `effect()`) for reactive state management.
  - Use the new **Control Flow** (`@if`, `@for`, `@switch`).
  - Prefer **ChangeDetectionStrategy.OnPush** for all components.
- **Styling:**
  - Use Tailwind CSS utility classes.
  - Leverage daisyUI classes for standard UI components (buttons, cards, tables).
- **Data Fetching:**
  - Use `inject(HttpClient)` for API calls.
  - Wrap API calls in TanStack Query `injectQuery` or `injectMutation` for state management and caching.
- **Formatting:**
  - Prettier is configured in `package.json`. Follow the existing style (single quotes, 100 print width).

## Key Files

- `angular.json`: Workspace configuration.
- `src/main.ts`: Application entry point.
- `src/app/app.config.ts`: Dependency injection and global providers.
- `src/styles.css`: Global styles (includes Tailwind and daisyUI).
- `package.json`: Dependencies and scripts.

## Testing Strategy

- Unit tests should be written using **Vitest**.
- Test files should follow the `*.spec.ts` naming convention.
- Focus on testing component logic and service interactions.
