import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  template: `
    <div class="flex justify-end w-full mt-2">
      <div class="join">
        <button (click)="previousPage.emit()" [disabled]="hasPrevious()" class="join-item btn">
          «
        </button>
        <button class="join-item btn">Page: {{ currentPage() }}</button>
        <button (click)="nextPage.emit()" [disabled]="hasNext()" class="join-item btn">»</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination {
  hasPrevious = input.required<boolean>();
  hasNext = input.required<boolean>();
  currentPage = input<number | undefined>(0);

  previousPage = output();
  nextPage = output();
}
