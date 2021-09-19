import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './components/building/building.component';
import { FloorComponent } from './components/floor/floor.component';
import { MainComponent } from './components/main/main.component';
import { RegionComponent } from './components/region/region.component';
import { SpaceComponent } from './components/space/space.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'region', component: RegionComponent},
  {path: 'building', component: BuildingComponent},
  {path: 'floor', component: FloorComponent},
  {path: 'space', component: SpaceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
