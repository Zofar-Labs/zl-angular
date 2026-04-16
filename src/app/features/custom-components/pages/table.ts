import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideFilter, lucideRotateCcw, lucideSearch } from '@ng-icons/lucide';
import { DragonballService } from '../services/dragonball-service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { JsonPipe } from '@angular/common';
import { Pagination } from '../components/pagination';

@Component({
  selector: 'app-table',
  imports: [NgIcon, JsonPipe, Pagination],
  viewProviders: [
    provideIcons({
      lucideFilter,
      lucideSearch,
      lucideChevronDown,
      lucideRotateCcw,
    }),
  ],
  template: `
    <div class="flex flex-col gap-6 p-6 bg-base-100 rounded-xl shadow-md w-full mx-auto">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 class="text-xl font-bold text-base-content">Dragon Ball Z Directory</h2>
        <!-- Search Component -->
        <div class="join">
          <div>
            <label class="input validator join-item">
              <ng-icon name="lucideSearch" class="h-[1em] opacity-50" />
              <input type="text" placeholder="Search by name..." required />
            </label>
            <div class="validator-hint hidden">Please enter a search term</div>
          </div>

          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-neutral join-item gap-2">
              <ng-icon name="lucideFilter" class="text-sm" />
              Filter
              <ng-icon name="lucideChevronDown" class="text-xs opacity-50" />
            </div>

            <div
              tabindex="0"
              class="dropdown-content z-[100] p-0 shadow-2xl bg-base-100 rounded-2xl w-80 sm:w-96 border border-base-200 mt-2 overflow-hidden"
            >
              <div
                class="p-5 border-b border-base-200 bg-base-200/20 flex items-center justify-between"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="p-2 bg-primary/10 rounded-lg text-primary flex items-center justify-center"
                  >
                    <ng-icon name="lucideFilter" class="text-lg" />
                  </div>
                  <div>
                    <h3 class="font-bold text-sm">Filter Options</h3>
                    <p class="text-[10px] text-base-content/50 uppercase tracking-tighter">
                      Refine directory results
                    </p>
                  </div>
                </div>
                <div class="badge badge-sm badge-ghost font-medium">2 Active</div>
              </div>

              <div class="p-5 flex flex-col gap-6">
                <!-- Status -->
                <section>
                  <label
                    class="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-3 block px-1"
                    >Status</label
                  >
                  <div class="flex flex-wrap gap-2">
                    @for (status of ['Draft', 'Published', 'Archived']; track status) {
                      <label
                        class="flex items-center gap-2 px-4 py-2 rounded-full border border-base-300 bg-base-100 hover:border-primary/50 cursor-pointer transition-all has-[:checked]:bg-primary/5 has-[:checked]:border-primary has-[:checked]:text-primary has-[:checked]:ring-1 has-[:checked]:ring-primary/20"
                      >
                        <input type="checkbox" class="hidden" [checked]="status === 'Published'" />
                        <span class="text-xs font-semibold">{{ status }}</span>
                      </label>
                    }
                  </div>
                </section>

                <!-- Department -->
                <section>
                  <label
                    class="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-3 block px-1"
                    >Department</label
                  >
                  <div class="grid grid-cols-2 gap-1">
                    @for (
                      dept of ['Engineering', 'Marketing', 'Human Resources', 'Sales'];
                      track dept
                    ) {
                      <label
                        class="label cursor-pointer justify-start gap-3 px-3 py-2 rounded-lg hover:bg-base-200/50 transition-colors"
                      >
                        <input type="checkbox" class="checkbox checkbox-xs checkbox-primary" />
                        <span class="label-text text-sm font-medium">{{ dept }}</span>
                      </label>
                    }
                  </div>
                </section>

                <!-- Date Range -->
                <section>
                  <label
                    class="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-3 block px-1"
                    >Creation Period</label
                  >
                  <div
                    class="flex items-center gap-2 bg-base-200/30 p-1.5 rounded-xl border border-base-200 focus-within:border-primary/50 transition-all"
                  >
                    <input
                      type="date"
                      class="input input-sm input-ghost w-full focus:bg-transparent text-xs p-1"
                    />
                    <span class="text-base-content/20 text-xs">—</span>
                    <input
                      type="date"
                      class="input input-sm input-ghost w-full focus:bg-transparent text-xs p-1"
                    />
                  </div>
                </section>
              </div>

              <div class="p-4 bg-base-200/50 flex gap-3 border-t border-base-200">
                <button class="btn btn-sm btn-ghost flex-1 gap-2 text-xs">
                  <ng-icon name="lucideRotateCcw" class="text-xs" />
                  Reset
                </button>
                <button class="btn btn-sm btn-primary flex-1 text-xs">Apply Filters</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table Component -->
      <div class="overflow-x-auto border border-base-200 rounded-box">
        <table class="table">
          <thead class="bg-base-200/50">
            <tr>
              @for (column of columns; track $index) {
                <th>{{ column }}</th>
              }
            </tr>
          </thead>
          <tbody>
            @for (character of characters(); track character.id) {
              <tr class="hover">
                <td>{{ character.name }}</td>
                <td>{{ character.ki }}</td>
                <td>{{ character.maxKi }}</td>
                <td>{{ character.race }}</td>
                <td>{{ character.gender }}</td>
                <td>{{ character.affiliation }}</td>
                <td>{{ character.deletedAt }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <!-- Pagination Component -->
      <app-pagination
        [hasPrevious]="!links()?.previous"
        [hasNext]="!links()?.next"
        [currentPage]="meta()?.currentPage"
        (previousPage)="previousPage()"
        (nextPage)="nextPage()"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Table {
  private readonly dragonBallService = inject(DragonballService);

  protected readonly columns: string[] = [
    'Name',
    'Ki',
    'Max Ki',
    'Race',
    'Gender',
    'Affiliation',
    'Deleted at',
  ];

  private page = signal<number>(1);
  private limit = signal<number>(10);

  query = injectQuery(() => ({
    queryKey: ['characters'],
    queryFn: () => this.dragonBallService.getCharacters(this.page(), this.limit()),
  }));

  protected readonly characters = computed(() => this.query.data()?.items);
  protected readonly meta = computed(() => this.query.data()?.meta);
  protected readonly links = computed(() => this.query.data()?.links);

  nextPage(): void {
    this.page.update((value) => (!!this.links()?.next ? ++value : value));
    this.query.refetch();
  }

  previousPage(): void {
    this.page.update((value) => (!!this.links()?.previous ? --value : value));
    this.query.refetch();
  }
}
