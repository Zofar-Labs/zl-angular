import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-search-form',
  imports: [NgIcon],
  template: `
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
          class="dropdown-content z-100 p-0 shadow-2xl bg-base-100 rounded-2xl w-80 sm:w-96 border border-base-200 mt-2 overflow-hidden"
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
                    class="flex items-center gap-2 px-4 py-2 rounded-full border border-base-300 bg-base-100 hover:border-primary/50 cursor-pointer transition-all has-checked:bg-primary/5 has-checked:border-primary has-checked:text-primary has-checked:ring-1 has-checked:ring-primary/20"
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchForm {}
