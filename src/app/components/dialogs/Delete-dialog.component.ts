import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';


@Component({
    selector: 'delete-dialog',
    templateUrl: 'delete-dialog.html',
  })
  export class DeleteDialog {

    constructor(public dialogRef: MatDialogRef<DeleteDialog>){}

    onNoClick(): void {
      this.dialogRef.close();
    }

}