import { Experience } from './models/experience.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'curriculo';
  public experiences: Experience[] = [{
    titleElement:"Front-end Developer / Safra.com",
    textDateElement:"Jun-2015  -  Current",
    paragElement:"teste teste teste"
  },
  {
    titleElement:"Front-end Developer / Safra.com",
    textDateElement:"Jun-2014  -  Jun-2015",
    paragElement:"teste2 teste2 teste2"
  }

  ]
}
