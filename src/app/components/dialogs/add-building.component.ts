import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'add-building-dialog',
    templateUrl: 'add-building-dialog.html',
})
export class AddBuildingDialog {

    dialogTitle: string;

    buildingName = '';
    buildingId = '';
    buildingNickname = '';

    constructor(public dialogRef: MatDialogRef<AddBuildingDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

        console.log(data);
        // if the object is not empty, we are modifying a space, not adding it
        if (data.name !== '') {
            this.dialogTitle = 'Modificar';
        }
        else {
            this.dialogTitle = 'Agergar';
        }

        this.buildingId = data.id;
        this.buildingName = data.name;
        this.buildingNickname = data.nickName;

    }

    constructObject(): any {
        const ans = { id: this.buildingId, name: this.buildingName, nickName: this.buildingNickname };
        return ans;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
