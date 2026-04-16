import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { CharacterResponse } from '../interfaces/character-response';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getCharacters(page: number = 1, limit: number = 10): Promise<CharacterResponse> {
    return lastValueFrom(this.http.get<CharacterResponse>(`${this.apiUrl}/characters?page=${page}&limit=${limit}`));
  }
}
