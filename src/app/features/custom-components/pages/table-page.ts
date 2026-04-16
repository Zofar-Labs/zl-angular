import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideFilter, lucideRotateCcw, lucideSearch } from '@ng-icons/lucide';
import { DragonballService } from '../services/dragonball-service';
import { injectQuery, keepPreviousData } from '@tanstack/angular-query-experimental';
import { Pagination } from '../components/pagination';
import { Table } from '../components/table';
import { ColumnProperties } from '../interfaces/column-properties';
import { SearchForm } from '../components/search-form';

interface SearchFormValues {
  search: string;
  gender: string;
  race: string;
  affiliation: string;
}

@Component({
  selector: 'app-table-page',
  imports: [Pagination, Table, SearchForm],
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
        <app-search-form (filters)="searchEvent($event)" />
      </div>
      
      <app-table [columns]="columns" [items]="characters()" />
      
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
export default class TablePage {
  private readonly dragonBallService = inject(DragonballService);

  protected readonly columns: ColumnProperties[] = [
    { key: 'name', label: 'Name' },
    { key: 'ki', label: 'Ki' },
    { key: 'maxKi', label: 'Max Ki' },
    { key: 'race', label: 'Race' },
    { key: 'gender', label: 'Gender' },
    { key: 'affiliation', label: 'Affiliation' },
  ];

  protected page = signal<number>(1);
  protected limit = signal<number>(10);
  protected search = signal<string>('');
  protected gender = signal<string>('');
  protected race = signal<string>('');
  protected affiliation = signal<string>('');

  query = injectQuery(() => ({
    queryKey: [
      'characters',
      {
        page: this.page(),
        limit: this.limit(),
        search: this.search(),
        gender: this.gender(),
        race: this.race(),
        affiliation: this.affiliation(),
      },
    ],
    queryFn: ({ queryKey }) => {
      const [_key, filters] = queryKey as [string, any];
      return this.dragonBallService.getCharacters(filters);
    },
    placeholderData: keepPreviousData,
  }));

  protected readonly characters = computed(() => this.query.data()?.items ?? []);
  protected readonly meta = computed(() => this.query.data()?.meta);
  protected readonly links = computed(() => this.query.data()?.links);

  nextPage(): void {
    const next = this.links()?.next;
    if (next) {
      this.page.update((v) => v + 1);
    }
  }

  previousPage(): void {
    const prev = this.links()?.previous;
    if (prev) {
      this.page.update((v) => v - 1);
    }
  }

  searchEvent(values: SearchFormValues) {
    this.search.set(values.search || '');
    this.gender.set(values.gender || '');
    this.race.set(values.race || '');
    this.affiliation.set(values.affiliation || '');
    this.page.set(1);
  }
}
