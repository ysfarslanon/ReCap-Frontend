import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = []
  dataLoaded = false
  brandAddForm: FormGroup
  brandUpdateForm: FormGroup
  brandDeleteForm: FormGroup
  selectedBrand: Brand
  constructor(private brandService: BrandService, private formBuilder: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
    this.addCreateForm();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
      this.dataLoaded = true
    })
  }

  addCreateForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  setSelectedBrandToUpdate(brand: Brand) {
    this.selectedBrand = brand
    this.updateCreateForm()
  }

  updateCreateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      id: [this.selectedBrand.id, Validators.required],
      name: ["", Validators.required]
    })
  }

  setSelectedBrandToDelete(brand: Brand) {
    this.selectedBrand = brand;
    this.deleteCreateForm();
  }
  deleteCreateForm() {
    this.brandDeleteForm = this.formBuilder.group({
      id: [this.selectedBrand.id, [Validators.required]],
      name: [this.selectedBrand.name, [Validators.required]],
    });
  }

  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value)
      this.brandService.add(brandModel).subscribe(response => {
        this.toastrService.success(response.message, "Ekleme başarılı")
          console.log(response)
      }, responseError => {
        if (responseError.error.ValidationErrors.length > 0) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Doğrulama hatası")
          }        
        }
      })
    } else {
      this.toastrService.error("Eksik bilgi", "Hata")
    }
  }

  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(response => {
        this.toastrService.success(response.message, "Ekleme başarılı")
          console.log(response)
      }, responseError => {
        if (responseError.error.ValidationErrors.length > 0) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Doğrulama hatası")
          }        
        }
      })
    } else {
      this.toastrService.error("Eksik bilgi", "Hata")
    }
  }
  delete(){
    if (this.brandDeleteForm.valid) {
      let brandModel=Object.assign({},this.brandDeleteForm.value)
      this.brandService.delete(brandModel).subscribe(response=>{
        this.toastrService.success(response.message,"Silme başarılı")
      },responseError=>{
        if (responseError.error.ValidationErrors.length>0) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Doğrulama hatası")
          }     
        }
      })
    }
  }
}
