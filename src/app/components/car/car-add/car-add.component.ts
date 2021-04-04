import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup
  brands: Brand[]
  colors: Color[]
  constructor(private carService: CarService, private formBuilder: FormBuilder,
    private brandService: BrandService, private colorService: ColorService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm()
    this.getBrands()
    this.getColors()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
     //ve formControlName   model ile aynı olmalıdır   
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      modelYear: ["", Validators.required],
      description:["",Validators.required]
    })
  }

  add(){
    console.log(this.carAddForm)
    if (this.carAddForm.valid) {
      let carModel=Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{
        this.toastrService.success(response.message,"Ekleme başarılı")      

      },responseError=>{
        if (responseError.error.ValidationErrors.length>0) {          
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {                       
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      })      
    }else{
      this.toastrService.error("Eksik bilgi","Hata")
    }
  }
}
