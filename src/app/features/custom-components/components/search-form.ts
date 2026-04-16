import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideChevronDown,
  lucideFilter,
  lucideRotateCcw,
  lucideSearch,
} from '@ng-icons/lucide';
import { Affiliation, Gender, Race } from '@src/app/features/custom-components/enums';

@Component({
  selector: 'app-search-form',
  imports: [NgIcon, ReactiveFormsModule],
  viewProviders: [
    provideIcons({
      lucideFilter,
      lucideSearch,
      lucideChevronDown,
      lucideRotateCcw,
    }),
  ],
  template: `
    <form [formGroup]="filterForm" (ngSubmit)="submit()" class="join">
      <div>
        <label class="input validator join-item">
          <ng-icon name="lucideSearch" class="h-[1em] opacity-50" />
          <input
            type="text"
            placeholder="Search by name..."
            formControlName="search"
          />
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
            @if (activeFiltersCount(); as count) {
            <div class="badge badge-sm badge-primary font-medium">{{ count }} Active</div>
            }
          </div>

          <div class="p-5 flex flex-col gap-6">
            <!-- Gender -->
            <section>
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-3 block px-1"
                >Gender</label
              >
              <div class="flex flex-wrap gap-2">
                @for (value of genderValues; track value) {
                <label
                  class="flex items-center gap-2 px-4 py-2 rounded-full border border-base-300 bg-base-100 hover:border-primary/50 cursor-pointer transition-all has-[:checked]:bg-primary/5 has-[:checked]:border-primary has-[:checked]:text-primary has-[:checked]:ring-1 has-[:checked]:ring-primary/20"
                >
                  <input type="radio" class="hidden" [value]="value" formControlName="gender" />
                  <span class="text-xs font-semibold">{{ value }}</span>
                </label>
                }
              </div>
            </section>

            <!-- Races -->
            <section>
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-3 block px-1"
                >Race</label
              >
              <div class="grid grid-cols-2 gap-1">
                @for (value of raceValues; track value) {
                <label
                  class="label cursor-pointer justify-start gap-3 px-3 py-2 rounded-lg hover:bg-base-200/50 transition-colors"
                >
                  <input
                    type="radio"
                    class="radio radio-xs radio-primary"
                    [value]="value"
                    formControlName="race"
                  />
                  <span class="label-text text-sm font-medium">{{ value }}</span>
                </label>
                }
              </div>
            </section>

            <!-- Affiliations -->
            <section>
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-3 block px-1"
                >Affiliation</label
              >
              <input
                type="text"
                class="input input-bordered w-full"
                placeholder="Select an affiliation"
                list="affiliations"
                formControlName="affiliation"
              />
              <datalist id="affiliations">
                @for (value of affiliationValues; track value) {
                <option [value]="value"></option>
                }
              </datalist>
            </section>
          </div>

          <div class="p-4 bg-base-200/50 flex gap-3 border-t border-base-200">
            <button
              type="button"
              (click)="reset()"
              class="btn btn-sm btn-ghost flex-1 gap-2 text-xs"
            >
              <ng-icon name="lucideRotateCcw" class="text-xs" />
              Reset
            </button>
            <button type="submit" class="btn btn-sm btn-primary flex-1 text-xs">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchForm {
  private readonly fb = inject(FormBuilder);

  protected readonly genderValues = Object.values(Gender);
  protected readonly raceValues = Object.values(Race);
  protected readonly affiliationValues = Object.values(Affiliation);
  filters = output<any>();

  readonly filterForm = this.fb.group({
    search: [''],
    gender: [''],
    race: [''],
    affiliation: [''],
  });

  activeFiltersCount(): number {
    const values = this.filterForm.getRawValue();
    return Object.values(values).filter((v) => v !== '' && v !== null).length;
  }

  submit() {
    if (this.filterForm.invalid) return;
    this.filters.emit(this.filterForm.getRawValue());
  }

  reset() {
    this.filterForm.reset({
      search: '',
      gender: '',
      race: '',
      affiliation: '',
    });
  }
}
