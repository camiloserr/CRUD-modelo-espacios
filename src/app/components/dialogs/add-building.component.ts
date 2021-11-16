import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'add-building-dialog',
    templateUrl: 'add-building-dialog.html'
})
export class AddBuildingDialog {

    dialogTitle: string;

    buildingName = '';
    buildingId = '';
    buildingNumber = '';
    buildingSchedule = [
        {initHour: '08:00', endHour: '21:00'},
        {initHour: '08:00', endHour: '21:00'},
        {initHour: '08:00', endHour: '21:00'},
        {initHour: '08:00', endHour: '21:00'},
        {initHour: '08:00', endHour: '21:00'},
        {initHour: '08:00', endHour: '21:00'},
        {initHour: '08:00', endHour: '21:00'}
    ];

    daysOfWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes',  'Sabado', 'Domingo'];

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
        this.buildingNumber = data.buildingNumber;
        

    }

    private hourToMinutes(hour:string): number{
        return ((+hour.substring(0,2))*60) + (+hour.substring(3,5));
    }

    constructObject(): any {

        const schedule = [];
        this.buildingSchedule.forEach( (element) => {
            schedule.push({initHour: this.hourToMinutes(element.initHour), endHour: this.hourToMinutes(element.endHour)});
        });
        
        const ans = { id: this.buildingId, name: this.buildingName, buildingNumber: this.buildingNumber, schedule: schedule };
        console.log(ans);
        return ans;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
