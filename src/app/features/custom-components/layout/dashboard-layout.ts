import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar, lucideHome, lucideSidebarOpen, lucideTable } from '@ng-icons/lucide';

interface MenuItem {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, NgIcon, RouterLink, RouterLinkActive],
  viewProviders: [provideIcons({ lucideHome, lucideTable, lucideSidebarOpen, lucideCalendar })],
  template: `
    <div class="drawer lg:drawer-open h-svh">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col h-full overflow-hidden">
        <!-- Navbar -->
        <nav class="navbar w-full bg-base-300 shrink-0">
          <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <!-- Sidebar toggle icon -->
            <ng-icon name="lucideSidebarOpen" />
          </label>
          <div class="px-4">Navbar Title</div>
        </nav>
        <main class="flex-1 min-h-0 p-4">
          <router-outlet />
        </main>
      </div>

      <div class="drawer-side is-drawer-close:overflow-visible">
        <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
        <div
          class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64"
        >
          <!-- Sidebar content here -->
          <ul class="menu w-full gap-2 grow">
            <!-- List item -->
            @for (menuItem of menuItems; track menuItem.path) {
              <li>
                <a
                  [routerLink]="menuItem.path"
                  routerLinkActive="bg-primary"
                  [routerLinkActiveOptions]="{ exact: true }"
                  class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  [attr.data-tip]="menuItem.label"
                >
                  <!-- Home icon -->
                  <ng-icon [name]="menuItem.icon" />
                  <span class="is-drawer-close:hidden">{{ menuItem.label }}</span>
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardLayout {
  menuItems: MenuItem[] = [
    {
      path: '/components',
      icon: 'lucideHome',
      label: 'Home',
    },
    {
      path: '/components/table',
      icon: 'lucideTable',
      label: 'Table',
    },
    {
      path: '/components/calendar',
      icon: 'lucideCalendar',
      label: 'Calendar',
    },
  ];
}
