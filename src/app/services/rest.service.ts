import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite/ngx'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  db: SQLiteObject = null;

  apiObtenerDatosMovil = 'http://localhost:3000/padron'


  constructor(
    private http: HttpClient
  ) { }

  setDatabase(db: SQLiteObject) {
    if (this.db === null) {
      this.db = db;
    }
  }

  obtenerListadoCuentas() {
    return this.http.get(this.apiObtenerDatosMovil);
  }


}
