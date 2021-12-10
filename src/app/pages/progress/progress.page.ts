import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  percentage = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event) {
    // console.log(event.detail.value);
    // const rangeValue = event.detail.value * 0.01;
    const rangeValue = event.detail.value / 100;
    this.percentage = rangeValue;
  }

}
