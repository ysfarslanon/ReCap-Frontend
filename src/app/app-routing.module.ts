import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';


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
  {path:"cars/filter/:brandId/:colorId/cars/carDetails/:carId", pathMatch:"full",component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
