import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuerysService {

  constructor() { }



  getTables() {
    let tableErpp = `CREATE TABLE IF NOT EXISTS erpp (id INTEGER PRIMARY KEY AUTOINCREMENT, cuenta TEXT, adeudo TEXT, nombrePropietario TEXT, telefono_propietario TEXT, celular_propietario TEXT, correo_electronico_propietario TEXT, SupTerrenoH TEXT, SupConstruccionH TEXT, ValorTerrenoH TEXT, ValorConstruccionH TEXT, ValorCatastralH TEXT, ultimoPago TEXT, gestionada INTEGER  NOT NULL DEFAULT 0)`;
    let tableGestor = `CREATE TABLE IF NOT EXISTS gestionGestor (id INTEGER PRIMARY KEY AUTOINCREMENT,account TEXT, idEstatus INTEGER,observaciones TEXT, fechaPromesaPago TEXT,latitud TEXT, longitud TEXT,fechaCaptura TEXT,idAspuser TEXT,idTarea INTEGER,fechaAsignacion TEXT, fechaVencimiento TEXT,idMotivoNoPago INTEGER, motivoNoPago TEXT, idSolucionPlanteada INTEGER,idExpectativasContribuyente INTEGER,otraExpectativaContribuyente TEXT,idCaracteristicaPredio INTEGER,otraCaracteristicaPredio TEXT, idServiciosNoPago INTEGER, idTipoServicio INTEGER, idEstatusToma INTEGER, idTipoToma INTEGER, numeroMedidor TEXT, cargado INTEGER NOT NULL DEFAULT 0)`;

    let tables = {
      tableErpp,
      tableGestor
    }
  
    return tables;

  }




}
