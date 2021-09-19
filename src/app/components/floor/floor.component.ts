import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { AddFloorDialog } from '../dialogs/add-floor.component';
import { DeleteDialog } from '../dialogs/Delete-dialog.component';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  form: FormGroup;
  campus: any;

  regionControl = new FormControl('');
  buildingControl = new FormControl('');


  constructor(public dialog: MatDialog, public data: DatabaseService) {
    this.campus = data.getCampus();
    this.form = new FormGroup({
      reg: this.regionControl,
      bui: this.buildingControl
    });
  }

  countTypes(myFloor: any): any{
    const counts = {};
    myFloor.spaces.forEach(element => {
      console.log(element);
      counts[element.kind] = counts[element.kind] ? counts[element.kind] + 1 : 1;
    });
    return counts;
  }

  deleteFloor(floor: any): void{
    console.log('en la funcion');
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
        // TODO: eliminate floor from DB
      }
      else{
        console.log('cancelado');
      }
    });
  }

  addFloor(): void{
    const dialogRef = this.dialog.open(AddFloorDialog, {
      width: '450px',
      data: {id: '', name: ''}
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

  modifyFloor(floor: any): void{
    const dialogRef = this.dialog.open(AddFloorDialog, {
      width: '450px',
      data: {id: floor.id, name: floor.name}
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
