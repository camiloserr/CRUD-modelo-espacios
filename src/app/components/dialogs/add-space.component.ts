import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'add-space-dialog',
    templateUrl: 'add-space-dialog.html',
  })
  export class AddSpaceDialog {

    dialogTitle: string;

    types = {
      SC : 'Salón de clase',
      AU : 'Auditorio',
      CF : 'Cancha de Fútbol',
      CM : 'Cancha múltiple',
      CA : 'Capilla',
      EM : 'Estudio musical',
      HALL : 'Hall',
      EN : 'Ensamble',
      MC : 'Mus. Cam.',
      PR : 'Práctica individual (Pra Ind)',
      TC : 'Teclado (sala)',
      TP : 'Teorico práctico',
      LF : 'Laboratorio Fotografía',
      TT : 'Taller Tridimensional (Tll. Tridimen)',
      TB : 'Taller Bidimensional (Tll. Bidimen)',
      EST : 'Estudio',
      PEI : 'Per. Ind',
      PRA : 'Pra Ind Practica individual',
      TLLMA : 'Taller Máquina',
      // SR : 'Sala (medicina) *',
      TR : 'Torreón',
      PC : 'Sala de sistemas / Sala de cómputo',
      SA : 'Sala audiovisual',
      SE : 'Seminario',
      PZ : 'Plazoleta (mediatorta cuenta)',
      PU : 'Puente',
      TE : 'Terraza',
      SR : 'Salas reuniones'
    };


    spaceSchedule = [
      {initHour: '08:00', endHour: '21:00'},
      {initHour: '08:00', endHour: '21:00'},
      {initHour: '08:00', endHour: '21:00'},
      {initHour: '08:00', endHour: '21:00'},
      {initHour: '08:00', endHour: '21:00'},
      {initHour: '08:00', endHour: '21:00'},
      {initHour: '08:00', endHour: '21:00'}
  ];
    daysOfWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes',  'Sabado', 'Domingo'];
    equipments = ['Mesas', 'Parlantes', 'Sillas móviles', 'Televisor', 'Tablero', 'VideoBeam', 'Micrófono', 'DVD', 'CPU', 'Computadora', 'VHS', 'Escritorio', 'Toma eléctrica', 'Punto de red', 'Audiovisuales', 'Telón', 'Blackout'];
    accessList = ['Estudiantes', 'Profesores', 'Administrativos', 'Seguridad', 'Público'];

    form: FormGroup;
    nameControl: FormControl;
    idControl: FormControl;
    kindControl: FormControl;
    areaControl: FormControl;
    occupationControl: FormControl;
    smokeControl: FormControl;
    eatingControl: FormControl;
    equipmentControl: FormControl;
    accessControl: FormControl;
    openSpaceControl: FormControl;
    ventilationControl: FormControl;

    constructor(public dialogRef: MatDialogRef<AddSpaceDialog>, @Inject(MAT_DIALOG_DATA) public data: any){

      console.log(data);
      // if the object is not empty, we are modifying a space, not adding it
      if (data.name !== ''){
        this.dialogTitle = 'Modificar';
      }
      else{
        this.dialogTitle = 'Agergar';
      }

      this.nameControl = new FormControl(data.name);
      this.idControl = new FormControl(data.id);
      this.kindControl = new FormControl(data.kind);
      this.occupationControl = new FormControl(data.maxOccupation);
      this.smokeControl = new FormControl(data.smokingAllowed);
      this.eatingControl = new FormControl(data.eatingAllowed);
      this.areaControl = new FormControl(data.area);
      this.equipmentControl = new FormControl(data.equipment);
      this.accessControl = new FormControl(data.accessGroup);
      this.openSpaceControl = new FormControl(data.openSpace);
      this.ventilationControl = new FormControl(data.ventilation);

      this.form = new FormGroup({
        nameC: this.nameControl,
        idC: this.idControl,
        occuC: this.occupationControl,
        kindC: this.kindControl,
        smokeC: this.smokeControl,
        eatC: this.eatingControl,
        areaC: this.areaControl,
        equipC: this.equipmentControl,
        accessC: this.accessControl,
        openSpace: this.openSpaceControl,
        ventilation: this.ventilationControl
      });

      this.nameControl.setValue(data.name);
      this.idControl.setValue(data.id);
      this.kindControl.setValue(data.kind);
      this.occupationControl.setValue(data.maxOccupation);
      this.smokeControl.setValue(data.smokingAllowed);
      this.eatingControl.setValue(data.eatingAllowed);
    }

    constructObject(): any{
      const ans = {
        name: this.form.value.nameC,
        id: this.form.value.idC,
        maxOccupation: this.form.value.occuC,
        kind: this.form.value.kindC,
        smokingAllowed: this.form.value.smokeC,
        eatingAllowed: this.form.value.eatC,
      };

      return ans;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
