import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { ColorService } from 'src/app/services/color.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  colorAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,private colorService: ColorService,
     private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createColorAddForm()
  }

  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  add() {
    if (this.colorAddForm.valid) {
      let colorModel=Object.assign({},this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe(response=>{
        this.toastrService.success(response.message,"Ekleme başarılı")
      
      },responseError=>{
        if (responseError.error.ValidationError.length>0) {
          for (let i = 0; i < responseError.error.ValidationError.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası")
          }
        } 
      })
    }else{
      this.toastrService.error("Eksik bilgi","Hata")
    }
  }
}
