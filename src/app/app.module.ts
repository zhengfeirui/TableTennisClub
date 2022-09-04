import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ArchivesComponent } from './pages/archives/archives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ArchivesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent,data:{title:'Home'}},
      {path: 'aboutus', component: AboutUsComponent,data:{title:'About Us'}},
      // {
      //   path: 'aboutus', component: AboutUsComponent,data:{title:'About Us'},
      //   children:[{path:'child1',component:childComponent,data:{title:'child1'}}]
      // },
      {path: '', redirectTo: '/home', pathMatch: 'full'},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
