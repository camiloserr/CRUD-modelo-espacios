import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'add-region-dialog',
    templateUrl: 'add-region-dialog.html',
  })
  export class AddregionDialog {

    dialogTitle: string;

    regionName = '';
    regionId = '';

    constructor(public dialogRef: MatDialogRef<AddregionDialog>, @Inject(MAT_DIALOG_DATA) public data: any){

      // if the object is not empty, we are modifying a space, not adding it
      if (data.name !== ''){
        this.dialogTitle = 'Modificar';
      }
      else{
        this.dialogTitle = 'Agergar';
      }

      this.regionId = data.id;
      this.regionName = data.name;

    }

    constructObject(): any{
      const ans = {id: this.regionId, name: this.regionName};
      return ans;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
