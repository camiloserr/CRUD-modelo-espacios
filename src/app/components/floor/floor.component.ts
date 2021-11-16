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
  campus: any[];

  regionControl = new FormControl('');
  buildingControl = new FormControl('');


  constructor(public dialog: MatDialog, public data: DatabaseService) {
    this.data.getCampus2().then( (c) => {this.campus = c.response; console.log(this.campus);});
  }

  countTypes(myFloor: any): any{
    const counts = {};
    myFloor.spaces.forEach(element => {
      console.log(element);
      counts[element.spaceType] = counts[element.spaceType] ? counts[element.spaceType] + 1 : 1;
    });
    console.log(counts);
    return counts;
  }

  deleteFloor(floorId: string): void{
    console.log('en la funcion');
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(async result => {
      console.log('The dialog was closed');
      if (result){
        await this.data.deleteSpace(floorId);
        await this.updateCampus();
      }
      else{
        console.log('cancelado');
      }
    });
  }

  addFloor(buildingId: string): void{
    const dialogRef = this.dialog.open(AddFloorDialog, {
      width: '450px',
      data: {id: '', number: '', assistant: false }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result){
        // TODO: llamar al servicio para PUT espacio de l aBD
        console.log('agergando');
        console.log(result);
        await this.data.postSpace(result, buildingId);
        await this.updateCampus();
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

  private async  updateCampus(){

    // needed to update the forms later
    const regionIndex = this.campus.indexOf(this.regionControl.value);
    const buildingIndex = this.campus[regionIndex].buildings.indexOf(this.buildingControl.value);

    // getys the campus
    this.campus = (await this.data.getCampus2()).response;

    // updates the form
    this.regionControl.setValue(this.campus[regionIndex]);
    this.buildingControl.setValue(this.campus[regionIndex].buildings[buildingIndex]);
  }

  ngOnInit(): void {
  }

}
