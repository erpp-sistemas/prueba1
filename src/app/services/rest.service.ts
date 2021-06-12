import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite/ngx'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  db: SQLiteObject = null;

  constructor() { }

  setDatabase(db: SQLiteObject) {
    if (this.db === null) {
      this.db = db;
    }
  }


}
