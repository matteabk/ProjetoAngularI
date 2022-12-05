import { Experience } from './models/experience.model';
import { Component } from '@angular/core';
import { ExperienceContainer } from './models/experience-container.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'curriculo';

  public experiencesContainers: ExperienceContainer[] = [
    {
      icon: "bi bi-bag-fill",
      title: "Work Experience",
      experiences: [{
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
    },
    {
      icon: "bi bi-mortarboard-fill",
      title: "Education",
      experiences: [{
        titleElement:"Colegio Liceu",
        textDateElement:"Jun-1995  -  Dez-2005",
        paragElement:"Educacao educacao educacao"
      },
      {
        titleElement:"ADA",
        textDateElement:"Jun-2022  -  Current",
        paragElement:"teste2 teste2 teste2"
      }
      ]
    }
  ];
}
