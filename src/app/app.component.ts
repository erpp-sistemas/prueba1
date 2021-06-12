import { Component } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { QuerysService } from './services/querys.service';
import { RestService } from './services/rest.service';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private service: RestService,
    private query: QuerysService,
    private sqlite: SQLite,
    private platform: Platform,
    private androidPermissions: AndroidPermissions,
    private statusBar: StatusBar
  ) {
    this.inicialiteApp();
  }


  inicialiteApp() {

    this.platform.ready().then(() => {

      this.statusBar.hide();
      this.getPermission();
      this.createDB();


    })

  }

  /**
   * Metodo que crea la base de datos
   */
  async createDB() {
    let table = this.query.getTables();

    try {
      let db = await this.sqlite.create({
        name: 'errpMovil.db',
        location: 'default'
      });
      await db.executeSql(table.tableErpp, []);
      await db.executeSql(table.tableGestor, []);
    } catch (error) {
      console.error("Error al crear la base de datos");
    }

  }


  /**
   * Metodo para los permisos de la camara, ubicacion y estado
   */
  async getPermission() {
    this.androidPermissions.requestPermissions(
      [
        this.androidPermissions.PERMISSION.CAMERA,
        this.androidPermissions.PERMISSION.READ_PHONE_STATE,
        this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
      ])
  }




}
