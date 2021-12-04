import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ComponentInterface } from './models/component.interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  components$: Observable<ComponentInterface[]>;
  constructor(private platform: Platform, private dataService: DataService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.components$ = this.dataService.getMenuOptions();
    });
  }
}
