import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dataObj = {
    "a" : 0,
    "b" : 0,
    "c" : 0
  }

  public descendantTreeLeft : any[] = [{strategy : "default", descendantTree : []}, {strategy : "default", descendantTree : []}]
  public descendantTreeRight : any[] = [{strategy : "onPush", descendantTree : []}, {strategy : "default", descendantTree : []}]

  constructor(private httpClient : HttpClient){

  }

  incrementA(){
    this.dataObj.a += 1;
  }

  ngOnInit(): void {
    this.httpClient.get("", {responseType: 'text'}).subscribe((data) => {
      this.dataObj["a"] = 9000;
    })

    setInterval(()=> {
      this.incrementA();
    }, 1000);

    setInterval(()=> {
      this.dataObj = {
        "a" : 0,
        "b" : 0,
        "c" : 0
      }
    }, 10000)
  }
}
