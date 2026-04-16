import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { lastValueFrom, map } from 'rxjs';
import { Character, CharacterResponse } from '../interfaces/character-response';

interface Params {
  page: number;
  limit: number;
  search: string;
  gender: string;
  race: string;
  affiliation: string;
}

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getCharacters(filters: Params): Promise<CharacterResponse> {
    let params = new HttpParams();

    if (filters.search) params = params.append('name', filters.search);
    if (filters.gender) params = params.append('gender', filters.gender);
    if (filters.race) params = params.append('race', filters.race);
    if (filters.affiliation) params = params.append('affiliation', filters.affiliation);

    return lastValueFrom(
      this.http
        .get<CharacterResponse | Character[]>(
          `${this.apiUrl}/characters?page=${filters.page}&limit=${filters.limit}`,
          { params }
        )
        .pipe(
          map((res) => {
            if (Array.isArray(res)) {
              return {
                items: res,
                meta: {
                  totalItems: res.length,
                  itemCount: res.length,
                  itemsPerPage: res.length,
                  totalPages: 1,
                  currentPage: 1,
                },
                links: {
                  first: '',
                  previous: '',
                  next: '',
                  last: '',
                },
              };
            }
            return res;
          })
        )
    );
  }
}
