import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideSectionComponent } from './components/side-section/side-section.component';
import { CoreSectionComponent } from './components/core-section/core-section.component';
import { FormsComponent } from './components/forms/forms.component';
import { IconTextComponent } from './components/icon-text/icon-text.component';
import { SkillLevelComponent } from './components/skill-level/skill-level.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideSectionComponent,
    CoreSectionComponent,
    FormsComponent,
    IconTextComponent,
    SkillLevelComponent,
    InfoTextComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
