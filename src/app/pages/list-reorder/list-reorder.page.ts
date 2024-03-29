import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  heroes: string[] = ['Aquaman', 'Superman', 'Batman', 'Wonder Woman', 'Flash'];

  reorderDisable = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {
    console.log(event);

    const itemToMove = this.heroes.splice(event.detail.from, 1)[0];
    this.heroes.splice(event.detail.to, 0, itemToMove);

    event.detail.complete();

    console.log(this.heroes);
  }

}
