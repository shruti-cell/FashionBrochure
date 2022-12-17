import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FashionBrochureComponent } from './fashion-brochure/fashion-brochure.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WomenOutfitsComponent } from './women-outfits/women-outfits.component';
import { MenOutfitsComponent } from './men-outfits/men-outfits.component';
import { KidsOutfitsComponent } from './kids-outfits/kids-outfits.component';



 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FashionBrochureComponent,
    WomenOutfitsComponent,
    MenOutfitsComponent,
    KidsOutfitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    CarouselModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
