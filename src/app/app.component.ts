import { FormGroup } from '@angular/forms';
import { IconText } from './models/icon-text.model';
import { Experience } from './models/experience.model';
import { Component } from '@angular/core';
import { ExperienceContainer } from './models/experience-container.model';
import { ContactData } from './models/contact-data.model';
import { Skill } from './models/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'curriculo';

  public skillBars: Skill[] = [
    {
      skillTitle: 'C#',
      skillLevel: '90',
    },
    {
      skillTitle: 'SQL',
      skillLevel: '90',
    },
    {
      skillTitle: 'WEB API',
      skillLevel: '80',
    },
    {
      skillTitle: 'HTML & CSS',
      skillLevel: '90',
    },
    {
      skillTitle: 'JavaScript',
      skillLevel: '80',
    },
    {
      skillTitle: 'Angular',
      skillLevel: '60',
    },
  ];
  public languageBars: Skill[] = [
    {
      skillTitle: 'Portuguese',
      skillLevel: '100',
    },
    {
      skillTitle: 'English',
      skillLevel: '90',
    },
    {
      skillTitle: 'French',
      skillLevel: '30',
    },
  ];
  public contact: ContactData = {
    imageUrl:
      'https://github.com/matteabk/ProjetoAngularI/blob/main/src/assets/FOTO_PERFIL_-_Matheus_A.jpg?raw=true',
    contactInfo: [
      {
        icon: 'bi bi-person-fill',
        text: 'Matheus Alencastro',
      },
      {
        icon: 'bi bi-wallet-fill',
        text: 'Full Stack Developer',
      },
      {
        icon: 'bi bi-house-door-fill',
        text: 'Recife - PE',
      },
      {
        icon: 'bi bi-mailbox2',
        text: 'alencastromatheus@gmail.com',
      },
      {
        icon: 'bi bi-telephone-fill',
        text: '(81) 99597-4698',
      },
    ],
  };
  public experiencesContainers: ExperienceContainer[] = [
    {
      icon: 'bi bi-bag-fill',
      title: 'Work Experience',
      experiences: [
        {
          titleElement: 'Full-Stack Developer / Banco Safra',
          textDateElement: 'Jun-2022  -  Dez-2022',
          paragElement:
            "Contratado pelo programa Top Coders, em parceria com a Ada (antiga Let's Code). Programa consiste em treinamento Full Stack, mesclado com experi??ncias e treinamentos internos administrados pelo Banco Safra.",
        },
        {
          titleElement: 'Estagi??rio de Planejamento e Gest??o / N&A Consultores',
          textDateElement: 'Jan-2021  -  Mai-2022',
          paragElement:
            'Est??gio focado no planejamento e gest??o de projetos de redes solares, tendo como escopo o acompanhamento e a fiscaliza????o da execu????o e entregas de servi??os em obra, al??m de realizra o controle do faturamento na compra de materiais e em medi????es.',
        },
        {
          titleElement: 'Estagi??rio de Qualidade / TPF Engenharia',
          textDateElement: 'Ago-2020  -  Jan-2021',
          paragElement:
            'Est??gio focado na fiscaliza????o das entregas de obras de restaura????o, realizando sempre um controle de qualidade com a elabora????o de relat??rios atrav??s do Power BI.',
        },
        {
          titleElement: 'Analista de Projetos / Poli Junior Engenharia',
          textDateElement: 'Jun-2019  -  Ago-2020',
          paragElement:
            'Capacita????o e elabora????o de projetos de engenharia civil, utilizando tecnologias como AutoCAD e Revit, al??m de realizar visitas t??cnicas em projetos atuantes.',
        },
      ],
    },
    {
      icon: 'bi bi-mortarboard-fill',
      title: 'Education',
      experiences: [
        {
          titleElement: 'Engenharia Civil - Poli UPE',
          textDateElement: 'Jan-2018  -  Current',
          paragElement:
            'Bacharelado em Engenharia Civil pela Escola Polit??cnica de Pernambuco (Universidade de Pernambuco).',
        },
        {
          titleElement: 'Forma????o WEB Full Stack - ADA',
          textDateElement: 'Mai-2022  -  Current',
          paragElement:
            'Curso realizado atrav??s do programa Top Coders, em conjunto com o Banco Safra para forma????o WEB Full Stack, com foco em C# para Back-end e JS / Angular para o Front-end.',
        },
        {
          titleElement:
            'Curso Intensivo de Ingl??s - Language Studies International (LSI)',
          textDateElement: 'Jan-2019  -  Mar-2019',
          paragElement:
            'Curso de ingl??s, realizado em interc??mbio em Londres, com enfoque em conversa????o e troca de experi??ncias entre alunos.',
        },
      ],
    },
  ];
  public socialMedias: IconText[] = [
    {
      icon: 'bi bi-github',
      text: 'https://github.com/matteabk',
    },
    {
      icon: 'bi bi-facebook',
      text: 'https://facebook.com',
    },
    {
      icon: 'bi bi-instagram',
      text: 'https://instagram.com',
    },
    {
      icon: 'bi bi-linkedin',
      text: 'https://www.linkedin.com/in/matheus-kenderessy/',
    },
  ];

  onContactFormData(formData: FormGroup): void {
    console.log(formData.value);
  }
}
