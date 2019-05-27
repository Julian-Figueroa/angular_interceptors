import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Julian FT');

    return this.http.get('https://reqres123.in/api/user', {
      params,
      // headers
    }).pipe(
      map(resp => resp['data']),
    );
  }

}
