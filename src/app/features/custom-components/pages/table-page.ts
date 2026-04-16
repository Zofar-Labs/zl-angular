import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideFilter, lucideRotateCcw, lucideSearch } from '@ng-icons/lucide';
import { DragonballService } from '../services/dragonball-service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { Pagination } from '../components/pagination';
import { Table } from '../components/table';
import { ColumnProperties } from '../interfaces/column-properties';
import { SearchForm } from "../components/search-form";

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
        <app-search-form/>
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
    {key: 'name', label: 'Name'},
    {key: 'ki', label: 'Ki'},
    {key: 'maxKi', label: 'Max Ki'},
    {key: 'race', label: 'Race'},
    {key: 'gender', label: 'Gender'},
    {key: 'affiliation', label: 'Affiliation'},
    {key: 'deletedAt', label: 'Deleted at'},
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
