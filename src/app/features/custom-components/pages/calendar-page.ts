import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-calendar-page',
  imports: [DatePipe],
  template: `
    <section class="flex gap-4 h-full overflow-hidden">
      <article class="flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto">
        <div class="stats bg-base-200 rounded-lg shadow w-full gap-4">
          <div class="stat place-items-center">
            <div class="stat-title">Downloads</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">From January 1st to February 1st</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title">Users</div>
            <div class="stat-value text-secondary">4,200</div>
            <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title">New Registers</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
        <div class="p-4 bg-base-200 rounded-xl shadow w-full">
          <div class="flex justify-between items-center mb-4">
            <button (click)="changeMonth(-1)" class="btn btn-circle btn-sm btn-ghost">❮</button>
            <span>
              {{ viewDate() | date: 'MMMM yyyy' }}
            </span>
            <button (click)="changeMonth(1)" class="btn btn-circle btn-sm btn-ghost">❯</button>
          </div>

          <div class="grid grid-cols-7 gap-1 text-center font-semibold text-xs opacity-50 mb-2">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span
            ><span>Fri</span><span>Sat</span>
          </div>

          <div class="grid grid-cols-7 gap-1">
            @for (day of calendarDays(); track $index) {
              <div class="aspect-video">
                @if (day) {
                  <button
                    class="btn btn-ghost btn-sm flex flex-col justify-between p-2 btn-square rounded-lg w-full h-full"
                  >
                    <span class="text-md">{{ day.getDate() }}</span>
                    <div class="w-full flex justify-end">
                      <div class="badge badge-primary text-white rounded-sm">5</div>
                    </div>
                  </button>
                }
              </div>
            }
          </div>
        </div>
      </article>
      <article class="min-h-0 flex flex-col gap-4 p-4 overflow-y-auto bg-base-200 rounded-lg shadow-inner">
        <div class="card bg-primary text-primary-content w-full">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there are title and
              actions parts
            </p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card bg-primary text-primary-content w-full">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there are title and
              actions parts
            </p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card bg-primary text-primary-content w-full">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there are title and
              actions parts
            </p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card bg-primary text-primary-content w-full">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there are title and
              actions parts
            </p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card bg-primary text-primary-content w-full">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there are title and
              actions parts
            </p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card bg-primary text-primary-content w-full">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there are title and
              actions parts
            </p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalendarPage {
  viewDate = signal(new Date());

  calendarDays = computed(() => {
    const date = this.viewDate();
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    for (let i = 1; i < totalDays; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  });

  changeMonth(offset: number) {
    this.viewDate.update((d) => new Date(d.getFullYear(), d.getMonth() + offset, 1));
  }
}
