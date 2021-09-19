import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  campus: any;
  selectedRegion: string;

  regionControl = new FormControl('');

  constructor(public dialog: MatDialog, public data: DatabaseService){
    this.campus = data.getCampus();
    this.form = new FormGroup({
      reg: this.regionControl
    });
  }

  deleteBuilding(buildingId): void{
    console.log('en la funcion');
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
        // TODO: eliminar espacio de l aBD
      }
      else{
        // NO hacer nada
        console.log('cancelado');
      }
    });
  }

  addBuilding(): void{
    const dialogRef = this.dialog.open(AddBuildingDialog, {
      width: '450px',
      data: {id: '', name: '', nickname: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        // TODO: llamar al servicio para PUT espacio de l aBD
        console.log('agergando');
        console.log(result);
      }
      else{
        // NO hacer nada
        console.log('cancelado');
      }
    });
  }

  modifyBuilding(building: any): void{
    console.log(building);
    const dialogRef = this.dialog.open(AddBuildingDialog, {
      width: '450px',
      data: {id: building.id, name: building.name, nickName: building.nickName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        // TODO: llamar al servicio para PUT espacio de l aBD
        console.log('agergando');
        console.log(result);
      }
      else{
        // NO hacer nada
        console.log('cancelado');
      }
    });
  }

  ngOnInit(): void {
  }

}
