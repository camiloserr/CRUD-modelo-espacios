import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RegionComponent } from './components/region/region.component';
import { BuildingComponent } from './components/building/building.component';
import { FloorComponent } from './components/floor/floor.component';
import { SpaceComponent } from './components/space/space.component';
import { MainComponent } from './components/main/main.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialog } from './components/dialogs/Delete-dialog.component';
import { AddSpaceDialog } from './components/dialogs/add-space.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AddFloorDialog } from './components/dialogs/add-floor.component';
import { AddBuildingDialog } from './components/dialogs/add-building.component';
import { AddregionDialog } from './components/dialogs/add-region.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegionComponent,
    BuildingComponent,
    FloorComponent,
    SpaceComponent,
    MainComponent,
    DeleteDialog,
    AddSpaceDialog,
    AddFloorDialog,
    AddBuildingDialog,
    AddregionDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
