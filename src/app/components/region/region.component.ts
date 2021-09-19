import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { AddregionDialog } from '../dialogs/add-region.component';
import { DeleteDialog } from '../dialogs/Delete-dialog.component';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  public campus: any[];
  constructor(public dialog: MatDialog, public data: DatabaseService) {
    this.campus = data.getCampus();
   }

  ngOnInit(): void {
  }

  addRegion(): void{
    const dialogRef = this.dialog.open(AddregionDialog, {
      width: '450px',
      data: {id: '', name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        // TODO: llamar al servicio para PUT region de l aBD
        console.log('agergando');
        console.log(result);
      }
      else{
        // NO hacer nada
        console.log('cancelado');
      }
    });
  }

  deleteRegion(): void{
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

  modifyRegion(region: any): void{
    const dialogRef = this.dialog.open(AddregionDialog, {
      width: '450px',
      data: {id: region.id, name: region.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        // TODO: llamar al servicio para PUT region de l aBD
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
