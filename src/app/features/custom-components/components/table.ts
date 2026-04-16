import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ColumnProperties } from '../interfaces/column-properties';

@Component({
  selector: 'app-table',
  imports: [],
  template: `
    <div class="overflow-x-auto border border-base-200 rounded-box">
      <table class="table">
        <thead class="bg-base-200/50">
          <tr>
            @for (column of columns(); track $index) {
              <th>{{ column.label }}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (item of items(); track item.id) {
            <tr class="hover">
              @for (column of columns(); track $index) {
                <td>{{item[column.key]}}</td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table {
  columns = input.required<ColumnProperties[]>();
  items = input<any[] | undefined>([]);
}
