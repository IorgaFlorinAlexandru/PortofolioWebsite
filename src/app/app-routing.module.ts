import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';

const routes: Routes = [
  { path: 'Homepage', component:HomePageComponent, data: {animation: 'HomePage'} },
  { path: 'About', component:AboutPageComponent,data: {animation: 'AboutPage'}},
  { path:'Skills', component:SkillsPageComponent,data: {animation: 'SkillsPage'}},
  { path:'Projects', component:ProjectsPageComponent,data: {animation: 'ProjectsPage'}},
  {path:'Contact', component:ContactPageComponent,data: {animation: 'ContactPage'}},
  { path: '',   redirectTo: 'Homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
