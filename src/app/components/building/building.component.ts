import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { AddBuildingDialog } from '../dialogs/add-building.component';
import { DeleteDialog } from '../dialogs/Delete-dialog.component';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  form: FormGroup;
  campus: any[];
  selectedRegion: string;

  regionControl = new FormControl('');

  constructor(public dialog: MatDialog, public data: DatabaseService) {
    this.data.getCampus2().then( (a) => this.campus = a.response);  }

  deleteBuilding(buildingId: string): void {
    console.log('en la funcion');
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(async result => {
      console.log('The dialog was closed');
      if (result) {
        await this.data.deleteSpace(buildingId);
        await this.updateCampus();
      }
      else {
        // NO hacer nada
        console.log('cancelado');
      }
    });
  }

  addBuilding(regionId: string): void {
    console.log(regionId);
    const dialogRef = this.dialog.open(AddBuildingDialog, {
      width: '450px',
      data: { id: '', name: '', nickname: '' }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        // TODO: llamar al servicio para PUT espacio de l aBD
        console.log('agergando');
        console.log(result);
        await this.data.postSpace(result, regionId);
        await this.updateCampus();

      }
      else {
        // NO hacer nada
        console.log('cancelado');
      }
    });
  }

  modifyBuilding(building: any, regionId: string): void {
    console.log(building);
    const dialogRef = this.dialog.open(AddBuildingDialog, {
      width: '450px',
      data: { id: building.id, name: building.name, nickName: building.nickName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO: llamar al servicio para PUT espacio de l aBD
        console.log('agergando');
        console.log(result);
        this.data.putSpace(result, regionId);

      }
      else {
        // NO hacer nada
        console.log('cancelado');
      }
    });
  }

  private async updateCampus() {
    // needed to update the forms later
    const regionIndex = this.campus.indexOf(this.regionControl.value);

    // getys the campus
    this.campus = (await this.data.getCampus2()).response;

    // updates the form
    this.regionControl.setValue(this.campus[regionIndex]);
  }

  ngOnInit(): void {
  }

}
