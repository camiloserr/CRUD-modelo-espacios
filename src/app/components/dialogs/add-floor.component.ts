import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'add-floor-dialog',
    templateUrl: 'add-floor-dialog.html',
  })
  export class AddFloorDialog {

    dialogTitle: string;

    floorName = '';
    floorId = '';

    constructor(public dialogRef: MatDialogRef<AddFloorDialog>, @Inject(MAT_DIALOG_DATA) public data: any){

      // if the object is not empty, we are modifying a space, not adding it
      if (data.name !== ''){
        this.dialogTitle = 'Modificar';
      }
      else{
        this.dialogTitle = 'Agergar';
      }

      this.floorId = data.id;
      this.floorName = data.name;

    }

    constructObject(): any{
      const ans = {id: this.floorId, name: this.floorName};
      return ans;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
