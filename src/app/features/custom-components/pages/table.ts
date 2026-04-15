import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  template: `
    <div class="flex flex-col gap-6 p-6 bg-base-100 rounded-xl shadow-md w-full mx-auto">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 class="text-xl font-bold text-base-content">Employee Directory</h2>

        <div class="join">
          <div>
            <label class="input validator join-item">
              <svg
                class="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input type="text" placeholder="Search by name..." required />
            </label>
            <div class="validator-hint hidden">Please enter a search term</div>
          </div>

          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-neutral join-item">
              Filter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

            <ul
              tabindex="0"
              class="dropdown-content z-50 menu p-4 shadow-lg bg-base-100 rounded-box w-96 border border-base-200 mt-2 gap-2"
            >
              <li>
                <details open>
                  <summary class="font-semibold">Status</summary>
                  <ul>
                    <li>
                      <label class="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
                        <span class="label-text">Draft</span>
                      </label>
                    </li>
                    <li>
                      <label class="label cursor-pointer justify-start gap-3">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-sm checkbox-primary"
                          checked
                        />
                        <span class="label-text">Published</span>
                      </label>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details>
                  <summary class="font-semibold">Department</summary>
                  <ul>
                    <li><a>Engineering</a></li>
                    <li><a>Marketing</a></li>
                    <li><a>Human Resources</a></li>
                  </ul>
                </details>
              </li>

              <div class="divider my-0"></div>
              <li class="pointer-events-none">
                <span class="font-semibold pb-0">Date Range</span>
              </li>
              <li class="grid grid-cols-2 gap-2 px-4 w-full">
                <div class="flex flex-col">
                  <span class="text-xs text-base-content/70 mb-1">From</span>
                  <input type="date" class="input input-sm input-bordered w-full" />
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-base-content/70 mb-1">To</span>
                  <input type="date" class="input input-sm input-bordered w-full" />
                </div>
              </li>

              <div class="flex justify-end gap-2 mt-4">
                <button class="btn btn-sm btn-ghost">Clear</button>
                <button class="btn btn-sm btn-primary">Apply Filters</button>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto border border-base-200 rounded-box">
        <table class="table">
          <thead class="bg-base-200/50">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr class="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-end w-full mt-2">
        <div class="join">
          <button class="join-item btn">«</button>
          <button class="join-item btn">Page 22</button>
          <button class="join-item btn">»</button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Table {}
