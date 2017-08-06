import { Avenger } from '../avenger';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-avengers-list',
  templateUrl: 'avengers-list.component.html',
  styleUrls: ['avengers-list.component.css']
})
export class AvengersListComponent implements OnInit {

  pageTitle = 'Avengers List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  buttonTitle: string = "Show Image";
  listFilter: string;
  erorMessage: string;
  avengers: Avenger[] = [
    {
      "avengerId": 1,
      "avengerName": "Iron Man",
      "description": "Inventeur de génie (ce qui fait qu'il s'entend bien avec Bruce Banner), Tony Stark est un milliardaire égocentrique, devenu super-héros davantage par goût de la provocation que par altruisme. Son humour second degré et son sens de la répartie le rendent aussi irrésistible qu'agaçant. Malgré sa désinvolture, il prend toujours ses responsabilités.",
      "starRating": 3.2,
      "imageUrl": "https://s-media-cache-ak0.pinimg.com/originals/8c/16/cb/8c16cb9da19085e9ff307c5934ead19d.jpg"
    },
    {
      "avengerId": 2,
      "avengerName": "Captain america",
      "description": "De tous les héros Marvel, Captain America est le plus altruiste. Il s'est porté volontaire pour devenir un surhomme et entend bien s'en servir pour protéger la veuve et l'orphelin. Par ses qualités de meneur d'hommes et de stratège, il mérite amplement son titre de capitaine. Il a beaucoup plus le sens de l'honneur que le sens de l'humour, ce qui engendre quelques frictions avec le facétieux Tony Stark.",
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }];

  constructor() { }

  ngOnInit() {
  }

  toggleImage(): void {
    this.showImage = this.showImage ? false : true;
    this.buttonTitle = this.showImage ? "Hide Image" : "Show Image";
  }

}
