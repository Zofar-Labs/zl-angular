<p align="center">
  <a href="https://angular.dev" target="_blank" class="hover:opacity-80 transition-opacity">
      <img src="https://github.com/MiguelMateoTavarez/angular/raw/main/adev/src/assets/images/press-kit/angular_icon_gradient.gif" alt="angular-logo" width="120px" height="120px"/>
  </a>
  <a href="https://tailwindcss.com" target="_blank" class="hover:opacity-80 transition-opacity">
      <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.96ee6a5a.svg" alt="angular-logo" width="120px" height="120px"/>
  </a>
  <a href="https://daisyui.com" target="_blank" class="hover:opacity-80 transition-opacity">
    <img src="https://img.daisyui.com/images/daisyui/mark-rotating.svg" alt="angular-logo" width="120px" height="120px"/>
  </a>
</p>

# ZlAngular

This project is a personal Angular boilerplate designed for rapid project creation, pre-configured with a modern toolset for current and future projects.

## Tech Stack & Core Tools

- **Framework:** [Angular 21](https://angular.dev/)
- **Styling:** 
  - [Tailwind CSS 4](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
  - [daisyUI 5](https://daisyui.com/) - The most popular component library for Tailwind CSS.
- **State Management & Data Fetching:** 
  - [TanStack Query (Angular Query)](https://tanstack.com/query/latest/docs/framework/angular/overview) - Powerful asynchronous state management for Angular.
- **Icons:** 
  - [NG Icons](https://ng-icons.github.io/ng-icons/) - High-performance icon library, pre-configured with **Heroicons**.
- **Notifications:** 
  - [@ngxpert/hot-toast](https://ngxpert.github.io/hot-toast/) - Responsive and customizable toast notifications for Angular.
- **Markdown Support:** 
  - [ngx-markdown](https://github.com/j3n5e/ngx-markdown) & [marked](https://marked.js.org/) - Comprehensive markdown rendering support.
- **Utilities:** 
  - [date-fns](https://date-fns.org/) - Modern JavaScript date utility library.
- **Testing:** 
  - [Vitest](https://vitest.dev/) - A fast, modern Vite-native test runner.

## Development

### Scripts

To run these commands, you can use `pnpm`, `npm`, or `ng`.

- `pnpm start`: Starts a local development server at `http://localhost:4200/`.
- `pnpm build`: Compiles the project into the `dist/` directory for production.
- `pnpm test`: Executes unit tests with Vitest.
- `pnpm watch`: Builds the project in watch mode for development.

### Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `directives`, `pipes`, or `services`), run:

```bash
ng generate --help
```

## Additional Resources

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [TanStack Query Angular Docs](https://tanstack.com/query/latest/docs/framework/angular/overview)
- [daisyUI Component Documentation](https://daisyui.com/components/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
