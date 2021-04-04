import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ColorService } from 'src/app/services/color.service';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[]=[]
  dataLoaded=false
  colorAddForm:FormGroup
  colorUpdateForm:FormGroup
  colorDeleteForm:FormGroup
  selectedColor:Color

  constructor(private formBuilder:FormBuilder,private colorService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getColors()
    this.addCreateForm()
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
      this.dataLoaded=true
    })
  }
    addCreateForm(){
      this.colorAddForm=this.formBuilder.group({
        name:["",Validators.required]
      })
    }

    setSelectedColorToUpdate(color:Color){
      this.selectedColor=color
      this.updateCreateForm()
    }

    updateCreateForm(){
      this.colorUpdateForm=this.formBuilder.group({
        id:[this.selectedColor.id,Validators.required],
        name:["",Validators.required]
      })
    }

    setSelectedColorToDelete(color:Color){
      this.selectedColor=color
      this.deleteCreateForm()
    }

    deleteCreateForm() {
      this.colorDeleteForm = this.formBuilder.group({
        id: [this.selectedColor.id, Validators.required],
        name: [this.selectedColor.name, Validators.required]
      })
    }

    add(){
      if (this.colorAddForm.valid) {
        let colorModel = Object.assign({}, this.colorAddForm.value)
        this.colorService.add(colorModel).subscribe(response => {
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
      if (this.colorUpdateForm.valid) {
        let colorModel = Object.assign({}, this.colorUpdateForm.value)
        this.colorService.update(colorModel).subscribe(response => {
          this.toastrService.success(response.message, "Güncelleme başarılı")
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
      if (this.colorDeleteForm.valid) {
        let colorModel = Object.assign({}, this.colorDeleteForm.value)
        this.colorService.delete(colorModel).subscribe(response => {
          this.toastrService.success(response.message, "Silme başarılı")
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
}
