import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  // URL del endpoint del servicio de django de modelo de espacios
  private endpoint = 'mocked-endpoint.com/database:9000';
  private campus: any[];

  constructor() {
    this.campus = this.getCampusFromService();
  }

  public getCampus(): any[]{
    return this.campus;
  }

  // Should call the REST service to get the whole campus,
  // every time an opperation is applied on the DB this method should be called again to keep the cached campus updated
  private getCampusFromService(): any[]{

    const spaces = [
      {id: 'ED2-P1-SC101', name: 'Salon 101', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SC', maxOccupation: 20},
      {id: 'ED2-P1-SC102', name: 'Salon 102', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SC', maxOccupation: 25},
      {id: 'ED2-P1-SC103', name: 'Salon 103', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SC', maxOccupation: 26},
      {id: 'ED2-P1-SC104', name: 'Salon 104', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SC', maxOccupation: 12},
      {id: 'ED2-P1-SRnorte', name: 'Sala norte', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SR', maxOccupation: 12},
      {id: 'ED2-P1-SRsur', name: 'Sala sur', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SR', maxOccupation: 12},
    ];
    const spaces2 = [
      {id: 'ED2-P2-SC201', name: 'Salon 101', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SC', maxOccupation: 20},
      {id: 'ED2-P2-SC202', name: 'Salon 102', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SC', maxOccupation: 25},
      {id: 'ED2-P2-SC203', name: 'Salon 103', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SC', maxOccupation: 26},
      {id: 'ED2-P2-SC204', name: 'Salon 104', smokingAllowed: false, eatingAllowed: false, owner: 'DRF', kind: 'SC', maxOccupation: 12}
    ];
    const pisos = [
      {id: 'ED2-P2', name: 'piso 2', spaces: spaces2},
      // tslint:disable-next-line: object-literal-shorthand
      {id: 'ED2-P1', name: 'piso 1', spaces: spaces}
    ];
    const edificios =  [
      {
      maxOccupation: 200,
      currentOccupation: 100,
      id: 'Centro_Javeriano_de_Formación_Deportiva',
      name: 'Centro Javeriano de formacion deportiva',
      floors: [],
      nickName: 'gimnasio'
    },
    {
      maxOccupation: 300,
      currentOccupation: 130,
      id: 'Fernando_Barón_SJ',
      name: 'Fernando Barón',
      floors: pisos,
      nickName: 'Barón'
    }];

    return [{buildings: edificios, name: 'oriental', id: 'REG_OR'}, {buildings: [], name: 'occidental', id: 'REG_OCC'}];
  }
}
