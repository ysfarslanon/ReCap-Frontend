import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';


const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars/brand",component:CarComponent},
  {path:"cars/brand/:brandId/cars/carDetails/:carId",pathMatch:"full",component:CarDetailComponent},  
  {path:"cars/color",component:CarComponent},
  {path:"cars/color/:colorId/cars/carDetails/:carId",pathMatch:"full",component:CarDetailComponent},  
  {path:"cars/carDetails/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/filter/:brandId/:colorId",pathMatch:"full",component:CarComponent},
  {path:"cars/filter/:brandId/:colorId/cars/carDetails/:carId", pathMatch:"full",component:CarDetailComponent}, 
  {path:"colors/add",component:ColorAddComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"brands/operation",component:BrandListComponent},
  {path:"colors/operation",component:ColorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
