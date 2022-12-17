import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionBrochureComponent } from './fashion-brochure/fashion-brochure.component';
import { KidsOutfitsComponent } from './kids-outfits/kids-outfits.component';
import { MenOutfitsComponent } from './men-outfits/men-outfits.component';
import { WomenOutfitsComponent } from './women-outfits/women-outfits.component';


const routes: Routes = [
  { path: 'home', component:FashionBrochureComponent },
  { path: 'women', component: WomenOutfitsComponent},
  { path: 'men', component: MenOutfitsComponent},
  { path: 'kids', component: KidsOutfitsComponent},
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
