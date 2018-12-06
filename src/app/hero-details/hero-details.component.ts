import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})


export class HeroDetailsComponent implements OnInit {

  /* hero属性必须是一个带有@Input的装饰器的输入属性，因为外部的HeroesComponent将会绑定到他*/
  @Input()hero: Hero;
  constructor() { }
  ngOnInit() {
  }

}
