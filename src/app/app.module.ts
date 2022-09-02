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
      {path: 'home', component: HomeComponent},
      {path: 'aboutus', component: AboutUsComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
