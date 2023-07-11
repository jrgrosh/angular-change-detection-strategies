import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class OnPushComponent  implements OnInit, OnChanges{
  @Input() descendantTree : any[] = []
  @Input() dataObj = {
    "a" : 0,
    "b" : 0,
    "c" : 0
  }

  incrementB() : void{
    this.dataObj.b += 1;
  }
  ngOnInit(){

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent component changes: ", changes);
  }
}
