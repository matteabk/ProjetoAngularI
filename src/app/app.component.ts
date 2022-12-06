import { IconText } from './models/icon-text.model';
import { Experience } from './models/experience.model';
import { Component } from '@angular/core';
import { ExperienceContainer } from './models/experience-container.model';
import { ContactData } from './models/contact-data.model';
import { Skill } from './models/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'curriculo';

  public skillBars: Skill[] = [{
    skillTitle: "Photoshop",
    skillLevel: "90"
  },
  {
    skillTitle: "Photography",
    skillLevel: "80"
  },
  {
    skillTitle: "Media",
    skillLevel: "10"
  }
  ]

  public languageBars: Skill[] = [{
    skillTitle: "Portuguese",
    skillLevel: "100"
  },
  {
    skillTitle: "English",
    skillLevel: "80"
  },
  {
    skillTitle: "Spanish",
    skillLevel: "50"
  }
  ]

  public contact: ContactData = {
    imageUrl: "https://www.w3schools.com/w3images/avatar_hat.jpg",
    name: "Fulano",
    contactInfo: [{
      icon: "bi bi-wallet-fill",
      text: "Designer"
    },
    {
      icon: "bi bi-house-door-fill",
      text: "São Paulo - SP"
    }, {
      icon: "bi bi-mailbox2",
      text: "teste@teste.com"
    }, {
      icon: "bi bi-telephone-fill",
      text: "(11) 99988-7766"
    }
    ]
  }

  public experiencesContainers: ExperienceContainer[] = [
    {
      icon: "bi bi-bag-fill",
      title: "Work Experience",
      experiences: [{
        titleElement: "Front-end Developer / Safra.com",
        textDateElement: "Jun-2015  -  Current",
        paragElement: "teste teste teste"
      },
      {
        titleElement: "Front-end Developer / Safra.com",
        textDateElement: "Jun-2014  -  Jun-2015",
        paragElement: "teste2 teste2 teste2"
      }
      ]
    },
    {
      icon: "bi bi-mortarboard-fill",
      title: "Education",
      experiences: [{
        titleElement: "Colegio Liceu",
        textDateElement: "Jun-1995  -  Dez-2005",
        paragElement: "Educacao educacao educacao"
      },
      {
        titleElement: "ADA",
        textDateElement: "Jun-2022  -  Current",
        paragElement: "teste2 teste2 teste2"
      }
      ]
    }
  ];

  public socialMedias: IconText[] = [{
    icon: "bi bi-github",
    text: "https://github.com/"
  },
  {
    icon: "bi bi-facebook",
    text: "https://facebook.com"
  },
  {
    icon: "bi bi-instagram",
    text: "https://instagram.com"
  },
  {
    icon: "bi bi-linkedin",
    text: "https://linkedin.com"
  }]
}
