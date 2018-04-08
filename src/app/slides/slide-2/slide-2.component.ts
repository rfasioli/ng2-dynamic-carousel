import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { BaseSlide } from "../../dynamic-carousel/model/base-slide";

@Component({
  moduleId: module.id.toString(),
  selector: 'slide-2-component',
  templateUrl: './slide-2.component.html',
  styleUrls: ['./slide-2.component.css']
})
export class Slide2Component implements BaseSlide, OnInit {
  data: any;
  
  @Output() invalidateNextSlide: EventEmitter<any> = new EventEmitter<any>();
  @Output() navigateNextSlide: EventEmitter<any> = new EventEmitter<any>();
  @Input() container: any;
  @Input() availableSlideId: number;
  @Input() visibleSlideId: number;

  //Constructor
  constructor() {
      this.invalidateNextSlide.emit({ "slideId": this.visibleSlideId, "container": this.container });
  }

  ngOnInit() {
  }

  //Overloaded functions
  validate(): boolean {
    return true;
  }
  
  clearData(): void {}
      
  //Control Binding Functions
  start() {
    this.invalidateNextSlide.emit({ "slideId": this.visibleSlideId, "container": this.container });
    this.navigateNextSlide.emit({ "slideId": this.availableSlideId, "container": this.container });
  }      
}