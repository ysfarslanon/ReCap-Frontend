import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: Car[]
  rentals:Rental[]
  carImages: CarImage[]
  urlPath: string = "https://localhost:44305" 

  constructor(private carService: CarService, private carDetailService: CarDetailService,
    private rentalService:RentalService, private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getRentalsByCarId(params["carId"])
      if(params["carId"]){
        this.getCarDetail(params["carId"])
        this.getCarImagesByCarId(params["carId"])        
      }      
    })
  
  }
 
 
  getCarDetail(carId: number) {
    this.carService.getCarsByCarId(carId).subscribe(response => {
      this.cars = response.data
      //console.log(response.data)
    })
  }
  getCarImagesByCarId(carId: number) {
    this.carDetailService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data
      //console.log(response.data)
    })
  }
  getRentalsByCarId(carId:number){
   this.rentalService.getRentalsByCarId(carId).subscribe(response=>{
     this.rentals=response.data
   })
  }

  getCarouselActiveOrNot(index: number) {
    if (index == 0) {
      return "carousel-item active"
    }
    return "carousel-item"
  }


}
