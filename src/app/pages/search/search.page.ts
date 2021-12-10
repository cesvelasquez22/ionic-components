import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Album } from 'src/app/services/data.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPage implements OnInit {
  albums: Album[] = [];
  search = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe((albums) => (this.albums = albums));
  }

  onSearchChange(event) {
    // console.log('event', event);
    this.search = event.detail.value;
  }
}
