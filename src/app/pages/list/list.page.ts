import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/services/data.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users$: Observable<User[]>;

  @ViewChild(IonList) ionList: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users$ = this.dataService.getUsers();
  }

  favorite(user: User) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  share(user: User) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  trash(user: User) {
    console.log('trash', user);
    this.ionList.closeSlidingItems();
  }

}
