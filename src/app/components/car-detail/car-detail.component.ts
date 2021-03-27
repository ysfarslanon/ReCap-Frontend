import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: Car[]
  carImages: CarImage[]
  urlPath: string = "https://localhost:44305" 

  constructor(private carService: CarService, private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetail(params["carId"])
        this.getCarImagesByCarId(params["carId"])
      }      
    })
   
  }

  getCarImagesByCarId2() {
    this.carDetailService.getCarImagesByCarId2().subscribe(response => {
      this.carImages = response.data
     // console.log(response.data)     
      //console.log("Dosya Yolu ===>>    "+response.data[1].imagePath)
      //console.log(this.urlPath+this.carImages[0].imagePath)
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

  getCarouselActiveOrNot(index: number) {
    if (index == 0) {
      return "carousel-item active"
    }
    return "carousel-item"
  }


}
