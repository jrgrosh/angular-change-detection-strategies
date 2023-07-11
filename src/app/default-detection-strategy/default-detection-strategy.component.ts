import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-default-detection-strategy',
  templateUrl: './default-detection-strategy.component.html',
  styleUrls: ['./default-detection-strategy.component.css'],
})
export class DefaultDetectionStrategyComponent implements OnChanges, OnInit {
  @Input() descendantTree : any[] = [];
  @Input() dataObj = {
    "a" : 0,
    "b" : 0,
    "c" : 0
  }

  incrementC(){
    this.dataObj.c+=1;
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges){
    console.log("Child component changes:", changes);
  }
}
