import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  data = [
    { name: 'primary', selected: false },
    { name: 'secondary', selected: true },
    { name: 'tertiary', selected: false },
    { name: 'success', selected: true },
  ];

  constructor() {}

  ngOnInit() {}

  onClick(item: { name: string; selected: boolean }) {
    console.log(item);
  }

  getData() {
    console.log(this.data);
  }
}
