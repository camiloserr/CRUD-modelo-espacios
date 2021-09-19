import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { AddSpaceDialog } from '../dialogs/add-space.component';
import { DeleteDialog } from '../dialogs/Delete-dialog.component';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  // selects
  campus: any;

  // form control
  form: FormGroup;
  regionControl = new FormControl('');
  buildingControl = new FormControl('');
  floorControl = new FormControl('');

  selectedFloor: any = {};
  selectedBuilding: any = {};

  constructor(public dialog: MatDialog, public data: DatabaseService) {
    this.campus = data.getCampus();
    this.form = new FormGroup({
      reg: this.regionControl,
      bui: this.buildingControl,
      flo: this.floorControl
    });
  }

  ngOnInit(): void {
  }

  addSpace(): void{
    const dialogRef = this.dialog.open(AddSpaceDialog, {
      width: '450px',
      data: {id: '', name: '', maxOccupation: 0, smokingAllowed: false, eatingAllowed: false, kind: '', owner: ''}
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

  onBuildingChange(newValue): void{
    console.log("changing building", newValue);
    this.selectedBuilding = newValue;
    this.selectedFloor = {};
  }

  onFloorChange(newValue): void{

    console.log("changing floor", newValue);
    this.selectedFloor = newValue;
  }

  deleteSpace(spaceId: string): void{
    console.log('en la funcion');
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
        // TODO: eliminar espacio de l aBD
        console.log('eliminmando', spaceId);
      }
      else{
        // NO hacer nada
        console.log('cancelado');
      }
    });
  }

  modifySpace(space: any): void{
    const dialogRef = this.dialog.open(AddSpaceDialog, {
      width: '450px',
      data: space
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
}


