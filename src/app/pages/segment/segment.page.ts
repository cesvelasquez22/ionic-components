import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  heroes$: Observable<Hero[]>;
  search = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.heroes$ = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    // console.log('event', event.detail.value);
    this.search = event.detail.value;
  }
}
