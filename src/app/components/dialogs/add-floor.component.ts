import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { strictEqual } from 'assert';


@Component({
    selector: 'add-floor-dialog',
    templateUrl: 'add-floor-dialog.html',
  })
  export class AddFloorDialog {

    dialogTitle: string;

    floorNumber = '';
    floorId = '';
    selectedEquipment = [];
    hasAssistant = false;
    equipmentList = ['Mesas', 'Parlantes', 'Sillas móviles', 'Televisor', 'Tablero', 'VideoBeam', 'Micrófono',
    'DVD', 'CPU', 'Computadora', 'VHS', 'Escritorio', 'Toma eléctrica', 'Punto de red',
    'Audiovisuales', 'Telón', 'Blackout'].sort();

    constructor(public dialogRef: MatDialogRef<AddFloorDialog>, @Inject(MAT_DIALOG_DATA) public data: any){

      // if the object is not empty, we are modifying a space, not adding it
      if (data.number !== ''){
        this.dialogTitle = 'Modificar';
      }
      else{
        this.dialogTitle = 'Agergar';
      }

      this.floorId = data.id;
      this.floorNumber = data.floorNumber;
      this.hasAssistant = data.assistant;


    }

    constructObject(): any{

      const ans = {id: this.floorId, number: this.floorNumber, assistant: this.hasAssistant, equipment: this.selectedEquipment};
      return ans;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
