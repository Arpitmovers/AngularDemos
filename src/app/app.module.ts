import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainViewComponent } from './main-view/main-view.component';
import { DataService } from './main-view/DataService';


@NgModule({
  declarations: [
    MainViewComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
 // bootstrap: [AppComponent]
  bootstrap: [MainViewComponent]
})
export class AppModule { }
