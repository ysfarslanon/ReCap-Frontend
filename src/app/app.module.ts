import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { DenemeComponent } from './components/deneme/deneme.component';
import { from } from 'rxjs';
import { FilterBrandPipe } from './pipes/filterBrand/filter-brand.pipe';
import { FilterCarPipe } from './pipes/filterCar/filter-car.pipe';
import { FilterColorPipe } from './pipes/filterColor/filter-color.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';

import{ToastrModule} from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    CarDetailComponent,
    DenemeComponent,
    FilterBrandPipe,
    FilterCarPipe,
    FilterColorPipe,
    CarFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
