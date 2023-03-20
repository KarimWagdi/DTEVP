import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { MainComponent } from './main/main.component';
import { TopPageComponent } from './top-page/top-page.component';
import { ShowMoreComponent } from './show-more/show-more.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TopPageComponent,
    ShowMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
