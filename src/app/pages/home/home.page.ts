import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import {ComponentInterface} from '../../models/component.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components$: Observable<ComponentInterface[]>;

  constructor(private menuController: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.components$ = this.dataService.getMenuOptions();
  }

  showMenu() {
    this.menuController.open('first');
  }

}
