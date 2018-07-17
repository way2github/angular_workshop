import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MyDirective } from './format.directive';
import { BorderComponent } from './border.component';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { QuoteComponent } from './quote.component';
import {ConvertPipe} from './convert.pipe';
import { HttpModule } from "@angular/http";
import { PostService } from "./posts.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    QuoteComponent, 
    ConvertPipe,
    MyDirective,
    BorderComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
