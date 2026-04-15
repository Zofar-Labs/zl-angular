import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-base-200 flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-100 shadow-sm px-4">
        <div class="flex-1 text-center md:text-start">
          <a class="btn btn-ghost text-xl font-bold tracking-tight">
            <span class="text-primary">zl</span>-angular
          </a>
        </div>
        <div class="hidden md:block flex-none gap-2">
          <div class="flex items-center gap-4 text-sm font-medium opacity-70">
            <a routerLink="components">Components</a>
          </div>
        </div>
      </div>

      <!-- Hero Section -->
      <main class="grow flex items-center justify-center p-6">
        <div
          class="hero max-w-4xl bg-base-100 rounded-3xl shadow-xl overflow-hidden border border-base-300"
        >
          <div class="hero-content text-center py-16 px-8 md:px-16 flex-col">
            <div class="max-w-md">
              <h1 class="text-5xl font-extrabold tracking-tight">
                Hello, <span class="text-primary italic">{{ title() }}</span>
              </h1>
              <p class="py-6 text-lg text-base-content/70">
                A personalized, production-ready Angular boilerplate pre-configured with the tools I
                need for my projects.
              </p>
              <div class="flex flex-wrap justify-center gap-4 mb-10">
                <div
                  class="badge badge-primary badge-outline py-4 px-6 gap-2 text-md font-semibold"
                >
                  <img
                    src="https://github.com/MiguelMateoTavarez/angular/raw/main/adev/src/assets/images/press-kit/angular_icon_gradient.gif"
                    alt="angular-logo"
                    width="20px"
                    height="20px"
                  />
                  Angular
                </div>
                <div
                  class="badge badge-secondary badge-outline py-4 px-6 gap-2 text-md font-semibold text-[#38BDF8]"
                >
                  <img
                    src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.96ee6a5a.svg"
                    alt="angular-logo"
                    width="20px"
                    height="20px"
                  />
                  Tailwind CSS
                </div>
                <div class="badge badge-accent badge-outline py-4 px-6 gap-2 text-md font-semibold">
                  <img
                    src="https://img.daisyui.com/images/daisyui/mark-rotating.svg"
                    alt="angular-logo"
                    width="20px"
                    height="20px"
                  />
                  daisyUI
                </div>
              </div>
              <button
                class="btn btn-primary px-8"
                onclick="document.getElementById('tech_stack_modal').showModal()"
              >
                View Tech Stack Details
              </button>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer
        class="footer footer-center p-10 bg-base-100 text-base-content border-t border-base-300"
      >
        <aside>
          <div class="flex items-center gap-6 mb-6">
            <a
              href="https://angular.dev"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://github.com/MiguelMateoTavarez/angular/raw/main/adev/src/assets/images/press-kit/angular_icon_gradient.gif"
                alt="angular-logo"
                width="120px"
                height="120px"
              />
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.96ee6a5a.svg"
                alt="angular-logo"
                width="120px"
                height="120px"
              />
            </a>
            <a
              href="https://daisyui.com"
              target="_blank"
              class="hover:opacity-80 transition-opacity"
            >
              <img
                src="https://img.daisyui.com/images/daisyui/mark-rotating.svg"
                alt="angular-logo"
                width="120px"
                height="120px"
              />
            </a>
          </div>
          <p class="font-bold">
            Personal Angular Boilerplate <br />Built with passion by Miguel Mateo
          </p>
          <p>Copyright © 2026 - All rights reserved</p>
        </aside>
      </footer>

      <!-- Modal for Tech Stack -->
      <dialog id="tech_stack_modal" class="modal">
        <div class="modal-box w-11/12 max-w-2xl">
          <h3 class="font-bold text-2xl mb-4">Core Toolset</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="card bg-base-200 p-4 border border-base-300">
              <h4 class="font-bold text-primary">UI & Styling</h4>
              <p class="text-sm opacity-70">Tailwind CSS 4 + daisyUI 5</p>
            </div>
            <div class="card bg-base-200 p-4 border border-base-300">
              <h4 class="font-bold text-secondary">Data Fetching</h4>
              <p class="text-sm opacity-70">TanStack Query Angular</p>
            </div>
            <div class="card bg-base-200 p-4 border border-base-300">
              <h4 class="font-bold text-accent">Icons & Toasts</h4>
              <p class="text-sm opacity-70">NG Icons + Hot Toast</p>
            </div>
            <div class="card bg-base-200 p-4 border border-base-300">
              <h4 class="font-bold">Utilities</h4>
              <p class="text-sm opacity-70">date-fns, marked, ngx-markdown</p>
            </div>
          </div>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {
  protected readonly title = signal('zl-angular');
}
